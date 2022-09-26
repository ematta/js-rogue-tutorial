export interface Action {
  perform: (engine: Engine, entity: Entity) => void;
}

export interface MovementMap {
  [key: string]: Action;
}

export interface Graphic {
  char: string;
  fg: string;
  bg: string;
}

export interface Tile {
  walkable: boolean;
  transparent: boolean;
  dark: Graphic;
}
