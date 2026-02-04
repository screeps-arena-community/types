/**
 * Type tests for Season 2: Power Split
 */
import { Creep } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'
import { BonusFlag } from 'arena/season_2/power_split/basic'
import {
  EFF_CONSTRUCTION_BOOST,
  EFF_HEAL_BOOST,
  EFF_RANGED_ATTACK_BOOST,
  EFF_ATTACK_BOOST,
  EFF_WORK_BOOST,
  EFF_MOVE_BOOST,
} from 'game/constants'

export function loop(): void {
  // Test BonusFlag type
  const flags = getObjectsByPrototype(BonusFlag)

  for (const flag of flags) {
    // Test BonusFlag properties
    const bonusType: string = flag.bonusType

    // Check bonus type
    if (bonusType === EFF_CONSTRUCTION_BOOST) {
      console.log('Construction boost flag found')
    } else if (bonusType === EFF_HEAL_BOOST) {
      console.log('Heal boost flag found')
    } else if (bonusType === EFF_RANGED_ATTACK_BOOST) {
      console.log('Ranged attack boost flag found')
    } else if (bonusType === EFF_ATTACK_BOOST) {
      console.log('Attack boost flag found')
    } else if (bonusType === EFF_WORK_BOOST) {
      console.log('Work boost flag found')
    } else if (bonusType === EFF_MOVE_BOOST) {
      console.log('Move boost flag found')
    }

    // Send creeps to capture flags
    const myCreeps = getObjectsByPrototype(Creep).filter((c) => c.my)

    if (myCreeps.length > 0) {
      const creep = myCreeps[0]
      creep.moveTo(flag)
    }
  }
}
