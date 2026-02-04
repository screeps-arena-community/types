declare module 'arena/season_1/portal_exploration/basic/prototypes' {
  import { GameObject } from 'game/prototypes'

  /** A portal is a special type of game object that allows creeps to teleport */
  export class Portal extends GameObject {
    /** The destination coordinates of the portal */
    readonly destination: { x: number; y: number }
  }
}
