/**
 * Type tests for core game API
 */
import { Creep, Structure, Spawn, Tower } from 'game/prototypes'
import { getObjectsByPrototype, getRange, getTicks } from 'game/utils'
import { searchPath } from 'game/path-finder'
import {
  ATTACK,
  MOVE,
  HEAL,
  RANGED_ATTACK,
  WORK,
  CARRY,
  TOUGH,
} from 'game/constants'

// Test basic game loop
export function loop(): void {
  const myCreeps = getObjectsByPrototype(Creep).filter((c) => c.my)
  const enemyCreeps = getObjectsByPrototype(Creep).filter((c) => !c.my)

  // Test creep methods
  for (const creep of myCreeps) {
    if (enemyCreeps.length > 0) {
      const target = enemyCreeps[0]
      const range = getRange(creep, target)

      if (range === 1) {
        creep.attack(target)
      } else if (range <= 3) {
        creep.rangedAttack(target)
      } else {
        creep.moveTo(target)
      }
    }

    // Test damaged creeps healing
    if (creep.hits < creep.hitsMax) {
      const healers = myCreeps.filter((c) =>
        c.body.some((part) => part.type === HEAL)
      )
      if (healers.length > 0) {
        healers[0].heal(creep)
      }
    }
  }

  // Test structures
  const mySpawn = getObjectsByPrototype(Spawn).find((s) => s.my)
  if (mySpawn && mySpawn.store.getUsedCapacity() >= 200) {
    mySpawn.spawnCreep([ATTACK, ATTACK, MOVE, MOVE])
  }

  // Test towers
  const myTowers = getObjectsByPrototype(Tower).filter((t) => t.my)
  for (const tower of myTowers) {
    if (enemyCreeps.length > 0) {
      tower.attack(enemyCreeps[0])
    }
  }

  // Test pathfinding
  if (myCreeps.length > 0 && enemyCreeps.length > 0) {
    const path = searchPath(myCreeps[0], enemyCreeps[0], { maxRooms: 1 })
    if (path.path.length > 0) {
      myCreeps[0].moveTo(path.path[0])
    }
  }

  // Test getTicks
  const ticks: number = getTicks()
}
