import { MOVE_KEYS } from "./constants";
import { Action } from "./interfaces";

export function handleInput(event: KeyboardEvent): Action {
  return MOVE_KEYS[event.key];
}
