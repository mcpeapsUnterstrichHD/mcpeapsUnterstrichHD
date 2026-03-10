export function toggleCommandMenu() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("toggle-command-menu"));
  }
}
