declare module 'arena/season_1/construct_and_control/basic/prototypes' {
  import { GameObject } from 'game/prototypes'

  /** An object that provides a construction boost effect to the creep that steps onto this object for 200 ticks */
  export class ConstructionBoost extends GameObject {
    /** The number of ticks until this object disappears */
    ticksToDecay: number
  }
}
