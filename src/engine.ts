import * as ROT from "rot-js";

export class Engine {
  public static readonly WIDTH = 80;
  public static readonly HEIGHT = 50;

  display: ROT.Display;

  constructor() {
    this.display = new ROT.Display({ width: Engine.WIDTH, height: Engine.HEIGHT });
  }

  render() {
    const x = Engine.WIDTH / 2;
    const y = Engine.HEIGHT / 2;
    this.display.draw(x, y, 'Hello World', '#fff', '#000');
  }
}