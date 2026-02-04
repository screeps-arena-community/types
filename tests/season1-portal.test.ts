/**
 * Type tests for Season 1: Portal Exploration
 */
import { Creep } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'
import { Portal } from 'arena/season_1/portal_exploration/basic'

export function loop(): void {
  // Test Portal type
  const portals = getObjectsByPrototype(Portal)

  for (const portal of portals) {
    // Test portal properties
    const destination = portal.destination
    const x: number = destination.x
    const y: number = destination.y

    console.log(`Portal leads to: ${x}, ${y}`)

    // Test moving creeps to portals
    const myCreeps = getObjectsByPrototype(Creep).filter((c) => c.my)
    if (myCreeps.length > 0) {
      const creep = myCreeps[0]
      creep.moveTo(portal)
    }
  }
}
