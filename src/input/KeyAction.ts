import { KeyEventType } from "./KeyEventType";

export type KeyActionFunction = (key: string) => void;

/**
 * Interface to enforce structure of KeyActions for [[InputTracker]].
 */
export interface KeyAction {

  /**
   * Function to be executed when listed keys are pressed.
   */
  action: KeyActionFunction,

  /**
   * The [[KeyEventType]] attached to action.
   */
  keyEventType: KeyEventType,

  /**
   * A list of keys that will trigger the [[action]] function.
   */
  keys: string[],

}