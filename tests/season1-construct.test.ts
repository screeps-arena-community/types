/**
 * Type tests for Season 1: Construct and Control
 */
import { Creep, ConstructionSite } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'
import {
  AreaEffect,
  ConstructionBoost,
  StructureGoal,
} from 'arena/season_1/construct_and_control/basic'
import {
  EFFECT_DAMAGE,
  EFFECT_FREEZE,
} from 'arena/season_1/construct_and_control/basic/constants'

export function loop(): void {
  // Test StructureGoal
  const goals = getObjectsByPrototype(StructureGoal)
  for (const goal of goals) {
    const progress: number = goal.progress
    const progressTotal: number = goal.progressTotal
  }

  // Test AreaEffect
  const effects = getObjectsByPrototype(AreaEffect)
  for (const effect of effects) {
    const effectType: number = effect.effect
    if (effectType === EFFECT_DAMAGE || effectType === EFFECT_FREEZE) {
      console.log(`Effect detected: ${effectType}`)
    }
  }

  // Test ConstructionBoost
  const boosts = getObjectsByPrototype(ConstructionBoost)
  for (const boost of boosts) {
    const myCreeps = getObjectsByPrototype(Creep).filter((c) => c.my)
    if (myCreeps.length > 0) {
      myCreeps[0].moveTo(boost)
    }
  }

  // Test construction
  const sites = getObjectsByPrototype(ConstructionSite).filter((s) => s.my)
  for (const site of sites) {
    const myCreeps = getObjectsByPrototype(Creep).filter(
      (c) => c.my && c.store.getUsedCapacity() > 0
    )
    if (myCreeps.length > 0) {
      myCreeps[0].build(site)
    }
  }
}
