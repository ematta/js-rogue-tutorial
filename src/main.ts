import { Engine } from "./engine";

window.addEventListener('DOMContentLoaded', () => {
  const engine = new Engine();

  const container = engine.display.getContainer()!;

  document.body.appendChild(container);

  engine.render();
})