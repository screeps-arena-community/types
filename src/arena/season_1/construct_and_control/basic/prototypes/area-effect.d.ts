declare module 'arena/season_1/construct_and_control/basic/prototypes' {
  import { GameObject } from 'game/prototypes'
  import { EFFECT_SLOWDOWN } from 'arena/season_1/construct_and_control/basic/constants'

  export type AreaEffectType = typeof EFFECT_SLOWDOWN

  /** An object that applies an effect of the specified type to all creeps at the same tile */
  export class AreaEffect extends GameObject {
    /** The effect type */
    readonly effect: AreaEffectType
  }
}
