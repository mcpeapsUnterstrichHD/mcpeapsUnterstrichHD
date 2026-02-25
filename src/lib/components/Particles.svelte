<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    class?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    refresh?: boolean;
  }

  let {
    class: className = '',
    quantity = 120,
    staticity = 50,
    ease = 20,
    refresh = true
  }: Props = $props();

  let canvasEl: HTMLCanvasElement;
  let containerEl: HTMLDivElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let circles: Circle[] = [];
  let mouse = { x: 0, y: 0 };
  let canvasSize = { w: 0, h: 0 };
  let dpr = 1;
  let animationId: number;

  type Circle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
    color: string;
  };

  function circleParams(): Circle {
    const getRandomColor = (one: string, two: string): string =>
      Math.random() < 0.5 ? one : two;

    const x = Math.floor(Math.random() * canvasSize.w);
    const y = Math.floor(Math.random() * canvasSize.h);
    const size = Math.floor(Math.random() * 2) + 3;
    const alpha = Number.parseFloat((Math.random() * 0.8 + 0.1).toFixed(1));
    const targetAlpha = Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));

    return {
      x, y,
      translateX: 0, translateY: 0,
      size, alpha, targetAlpha,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: 0.1 + Math.random() * 4,
      color: getRandomColor(
        `rgba(191,97,106,${alpha})`,  // Nord red (nord11)
        `rgba(163,190,140,${alpha})`  // Nord green (nord14)
      ),
    };
  }

  function drawCircle(circle: Circle, update = false) {
    if (!ctx) return;
    ctx.translate(circle.translateX, circle.translateY);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!update) circles.push(circle);
  }

  function clearContext() {
    ctx?.clearRect(0, 0, canvasSize.w, canvasSize.h);
  }

  function drawParticles() {
    clearContext();
    for (let i = 0; i < quantity; i++) {
      drawCircle(circleParams());
    }
  }

  function resizeCanvas() {
    if (!containerEl || !canvasEl || !ctx) return;
    circles = [];
    const rect = containerEl.getBoundingClientRect();
    canvasSize.w = rect.width || window.innerWidth;
    canvasSize.h = rect.height || window.innerHeight;
    canvasEl.width = canvasSize.w * dpr;
    canvasEl.height = canvasSize.h * dpr;
    canvasEl.style.width = `${canvasSize.w}px`;
    canvasEl.style.height = `${canvasSize.h}px`;
    ctx.scale(dpr, dpr);
    drawParticles();
  }

  function remapValue(value: number, start1: number, end1: number, start2: number, end2: number): number {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  }

  function animate() {
    clearContext();
    circles.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = Math.min(...edge);
      const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));

      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.h + circle.size
      ) {
        circles.splice(i, 1);
        drawCircle(circleParams());
      } else {
        drawCircle({ ...circle }, true);
      }
    });
    animationId = requestAnimationFrame(animate);
  }

  function onMouseMove(event: MouseEvent) {
    if (!canvasEl) return;
    const rect = canvasEl.getBoundingClientRect();
    const x = event.clientX - rect.left - canvasSize.w / 2;
    const y = event.clientY - rect.top - canvasSize.h / 2;
    const inside = x < canvasSize.w / 2 && x > -canvasSize.w / 2 && y < canvasSize.h / 2 && y > -canvasSize.h / 2;
    if (inside) {
      mouse.x = x;
      mouse.y = y;
    }
  }

  onMount(() => {
    dpr = window.devicePixelRatio || 1;
    ctx = canvasEl.getContext('2d');
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  });
</script>

<div
  class="fixed inset-0 z-[-1] no-print pointer-events-none {className}"
  bind:this={containerEl}
  aria-hidden="true"
>
  <canvas bind:this={canvasEl}></canvas>
</div>
