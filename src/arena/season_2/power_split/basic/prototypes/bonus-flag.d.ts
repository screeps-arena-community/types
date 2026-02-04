declare module 'arena/season_2/power_split/basic/prototypes' {
  import { Flag } from 'game/prototypes'
  import { BodyPartType } from 'game/prototypes/creep'

  /** An object that applies an effect of the specified type to all creeps belonging to the player who captured it.  */
  export class BonusFlag extends Flag {
    /** The affected bodypart type */
    readonly bonusType: BodyPartType
  }
}
