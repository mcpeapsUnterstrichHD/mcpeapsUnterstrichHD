<script lang="ts">
import { onMount } from "svelte";
import { cn } from "$lib/utils"; // Aus deinem Projekt

// Deine ursprünglichen Svelte 5 Props
interface Props {
  class?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

let {
  class: className = "",
  quantity = 120,
  staticity = 50,
  ease = 20,
  refresh = true,
}: Props = $props();

let canvas: HTMLCanvasElement;

// Maus-Logik für den Parallax-Effekt
let mouse = { x: 0, y: 0 };
function handleMouseMove(event: MouseEvent) {
  // Maus relativ zum Bildschirmzentrum
  mouse.x = event.clientX - window.innerWidth / 2;
  mouse.y = event.clientY - window.innerHeight / 2;
}

// --- SHADER CODE ---
const vsSource = `#version 300 es
  in vec2 a_position;
  in vec4 a_color;
  in float a_size;
  uniform vec2 u_resolution;
  out vec4 v_color;
  void main() {
      vec2 zeroToOne = a_position / u_resolution;
      vec2 clipSpace = (zeroToOne * 2.0) - 1.0;
      gl_Position = vec4(clipSpace * vec2(1, -1), 0.0, 1.0);
      gl_PointSize = a_size;
      v_color = a_color;
  }`;

const fsSource = `#version 300 es
  precision mediump float;
  in vec4 v_color;
  out vec4 outColor;
  void main() {
      float dist = distance(gl_PointCoord, vec2(0.5, 0.5)) * 2.0;
      float alpha = 1.0 - smoothstep(0.8, 1.0, dist);
      if (dist > 1.0) discard;
      outColor = vec4(v_color.rgb, v_color.a * alpha);
  }`;

onMount(() => {
  const gl = canvas.getContext("webgl2", { alpha: true, antialias: true });
  if (!gl) return;

  // Shader Kompilierung
  const vShader = gl.createShader(gl.VERTEX_SHADER)!;
  gl.shaderSource(vShader, vsSource);
  gl.compileShader(vShader);
  const fShader = gl.createShader(gl.FRAGMENT_SHADER)!;
  gl.shaderSource(fShader, fsSource);
  gl.compileShader(fShader);
  const program = gl.createProgram()!;
  gl.attachShader(program, vShader);
  gl.attachShader(program, fShader);
  gl.linkProgram(program);

  const posLoc = gl.getAttribLocation(program, "a_position");
  const colorLoc = gl.getAttribLocation(program, "a_color");
  const sizeLoc = gl.getAttribLocation(program, "a_size");
  const resLoc = gl.getUniformLocation(program, "u_resolution");

  const floatsPerParticle = 7;
  const particleData = new Float32Array(quantity * floatsPerParticle);

  // Nord Colors aus deiner Config umgerechnet für WebGL (0.0 bis 1.0)
  const nord11 = [191 / 255, 97 / 255, 106 / 255]; // Red
  const nord14 = [163 / 255, 190 / 255, 140 / 255]; // Green

  // Deine Original-Physik-Logik (CPU)
  const circles = Array.from({ length: quantity }, () => {
    const isRed = Math.random() > 0.5;
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      translateX: 0,
      translateY: 0,
      dx: (Math.random() - 0.5) * 0.5, // Langsames Driften
      dy: (Math.random() - 0.5) * 0.5,
      magnetism: 0.1 + Math.random() * 4,
      size: Math.random() * 2 + 3, // Original war meist 3-4
      color: isRed ? nord11 : nord14,
      targetAlpha: Math.random() * 0.5 + 0.2,
    };
  });

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, particleData.byteLength, gl.DYNAMIC_DRAW);

  const stride = floatsPerParticle * 4;
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, stride, 0);
  gl.enableVertexAttribArray(colorLoc);
  gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, stride, 2 * 4);
  gl.enableVertexAttribArray(sizeLoc);
  gl.vertexAttribPointer(sizeLoc, 1, gl.FLOAT, false, stride, 6 * 4);

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    gl!.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener("resize", resize);
  resize();

  let animationFrameId: number;

  function render() {
    // CPU: Berechne Physik & Maus-Magnetismus (Dein Original-Code)
    for (let i = 0; i < quantity; i++) {
      const p = circles[i];

      p.x += p.dx;
      p.y += p.dy;

      // Parallax-Effekt zur Maus (Ease & Staticity Props)
      p.translateX +=
        ((mouse.x / staticity) * p.magnetism - p.translateX) / ease;
      p.translateY +=
        ((mouse.y / staticity) * p.magnetism - p.translateY) / ease;

      // Respawn am anderen Bildschirmrand, wenn er rausfliegt
      if (p.x < -10 || p.x > window.innerWidth + 10) {
        p.x = p.x < 0 ? window.innerWidth + 10 : -10;
        p.translateX = 0;
      }
      if (p.y < -10 || p.y > window.innerHeight + 10) {
        p.y = p.y < 0 ? window.innerHeight + 10 : -10;
        p.translateY = 0;
      }

      // Fade In/Out am Rand (Alpha Remapping)
      const edgeX = Math.min(
        p.x + p.translateX,
        window.innerWidth - (p.x + p.translateX),
      );
      const edgeY = Math.min(
        p.y + p.translateY,
        window.innerHeight - (p.y + p.translateY),
      );
      const dist = Math.min(edgeX, edgeY);
      let drawAlpha = p.targetAlpha;
      if (dist < 50) {
        drawAlpha = p.targetAlpha * Math.max(0, dist / 50); // Fadeout auf den letzten 50px
      }

      // Daten in den Puffer schreiben
      const idx = i * floatsPerParticle;
      particleData[idx + 0] = (p.x + p.translateX) * window.devicePixelRatio;
      particleData[idx + 1] = (p.y + p.translateY) * window.devicePixelRatio;
      particleData[idx + 2] = p.color[0]; // R
      particleData[idx + 3] = p.color[1]; // G
      particleData[idx + 4] = p.color[2]; // B
      particleData[idx + 5] = drawAlpha; // A
      particleData[idx + 6] = p.size * 2.0 * window.devicePixelRatio; // Durchmesser (Gl_PointSize)
    }

    // WebGL GPU Draw Call (Ein Rutsch)
    gl!.bindBuffer(gl!.ARRAY_BUFFER, buffer);
    gl!.bufferSubData(gl!.ARRAY_BUFFER, 0, particleData);
    gl!.clearColor(0, 0, 0, 0);
    gl!.clear(gl!.COLOR_BUFFER_BIT);
    gl!.useProgram(program);
    gl!.uniform2f(resLoc, canvas.width, canvas.height);
    gl!.enable(gl!.BLEND);
    gl!.blendFunc(gl!.SRC_ALPHA, gl!.ONE_MINUS_SRC_ALPHA);
    gl!.drawArrays(gl!.POINTS, 0, quantity);

    animationFrameId = requestAnimationFrame(render);
  }
  render();

  return () => {
    window.removeEventListener("resize", resize);
    cancelAnimationFrame(animationFrameId);
    gl!.deleteProgram(program);
  };
});
</script>

<svelte:window onmousemove={handleMouseMove} />

<canvas
  bind:this={canvas}
  class={cn("no-print", className)}
  aria-hidden="true"
  style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; pointer-events: none;"
></canvas>
