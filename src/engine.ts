import * as ROT from "rot-js";
import { MovementAction } from "./action/movement-action";
import { handleInput } from "./input-handler"


export class Engine {
  public static readonly WIDTH = 80;
  public static readonly HEIGHT = 50;

  playerX: number;
  playerY: number;

  display: ROT.Display;

  constructor() {
    this.display = new ROT.Display({ width: Engine.WIDTH, height: Engine.HEIGHT });
    this.playerX = Engine.WIDTH / 2;
    this.playerY = Engine.HEIGHT / 2;
    const container = this.display.getContainer()!;
    document.body.appendChild(container);
    window.addEventListener("keydown", e => this.update(e));
    this.render();
  }

  render() {
    this.display.draw(this.playerX, this.playerY, '@', '#fff', '#000');
  }

  update(event: KeyboardEvent) {
    this.display.clear();
    const action = handleInput(event);
    if(action instanceof MovementAction) {
      this.playerX += action.dx;
      this.playerY += action.dy;
    }
    this.render();
  }
}