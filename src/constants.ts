import { MovementAction } from "./action/movement-action";
import { MovementMap, Tile } from "./interfaces";

export const MOVE_KEYS: MovementMap = {
  ArrowUp: new MovementAction(0, -1),
  ArrowDown: new MovementAction(0, 1),
  ArrowLeft: new MovementAction(-1, 0),
  ArrowRight: new MovementAction(1, 0),
};

export const FLOOR_TILE: Tile = {
  walkable: true,
  transparent: true,
  dark: { char: " ", fg: "#fff", bg: "#323296" },
};

export const WALL_TILE: Tile = {
  walkable: false,
  transparent: false,
  dark: { char: " ", fg: "#fff", bg: "#000064" },
};
