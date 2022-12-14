import * as ROT from "rot-js";
import { handleInput } from "./input";
import { Entity } from "./entity";
import { GameMap } from "./map";

export class Engine {
  public static readonly WIDTH = 80;
  public static readonly HEIGHT = 50;
  public static readonly MAP_WIDTH = 80;
  public static readonly MAP_HEIGHT = 45;

  player: Entity;
  entities: Entity[];

  display: ROT.Display;

  gameMap: GameMap;

  constructor(entities: Entity[], player: Entity) {
    this.player = player;
    this.entities = entities;

    this.display = new ROT.Display({
      width: Engine.WIDTH,
      height: Engine.HEIGHT,
      forceSquareRatio: true,
    });

    this.gameMap = new GameMap(
      Engine.MAP_WIDTH,
      Engine.MAP_HEIGHT,
      this.display
    );

    const container = this.display.getContainer()!;
    document.body.appendChild(container);
    window.addEventListener("keydown", (e) => this.update(e));
    this.render();
  }

  render() {
    this.gameMap.render();
    this.entities.forEach((e) =>
      this.display.draw(e.x, e.y, e.char, e.fg, e.bg)
    );
  }

  update(event: KeyboardEvent) {
    this.display.clear();
    const action = handleInput(event);
    if (action) action.perform(this, this.player);
    this.render();
  }
}
