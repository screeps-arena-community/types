/**
 * Integration tests for package types.
 * These tests verify that inheritance from game classes works correctly.
 */

import { ArenaInfo, arenaInfo } from 'game'
import { Creep, GameObject, Position, Structure } from 'game/prototypes'

// Test 1: Inherit from GameObject
class MyGameObject extends GameObject {
  customMethod(): number {
    // Should have access to GameObject methods
    const range = this.getRangeTo({ x: 0, y: 0 })
    const path = this.findPathTo({ x: 10, y: 10 })
    const closest = this.findClosestByRange([
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ])
    const inRange = this.findInRange([{ x: 1, y: 1 }], 5)

    // Should have access to GameObject properties
    const id = this.id
    const exists = this.exists
    const x = this.x
    const y = this.y

    return range
  }
}

// Test 2: Inherit from Creep (which extends GameObject)
class MyCreep extends Creep {
  customCreepMethod(): void {
    // Should have access to Creep methods
    this.move(1)
    this.moveTo({ x: 10, y: 10 })

    // Should have access to Creep properties
    const hits = this.hits
    const fatigue = this.fatigue
    const body = this.body

    // Should have access to inherited GameObject methods
    const range = this.getRangeTo({ x: 0, y: 0 })
    const path = this.findPathTo({ x: 10, y: 10 })
    const closest = this.findClosestByPath([{ x: 1, y: 1 }])
    const inRange = this.findInRange([{ x: 1, y: 1 }], 5)

    // Should have access to inherited GameObject properties
    const id = this.id
    const exists = this.exists
    const x = this.x
    const y = this.y
  }
}

// Test 3: Inherit from Structure (which extends GameObject)
class MyStructure extends Structure {
  customStructureMethod(): void {
    // Should have access to Structure properties
    const hits = this.hits
    const hitsMax = this.hitsMax

    // Should have access to inherited GameObject methods
    const range = this.getRangeTo({ x: 0, y: 0 })
    const path = this.findPathTo({ x: 10, y: 10 })

    // Should have access to inherited GameObject properties
    const id = this.id
    const exists = this.exists
  }
}

// Test 4: Use Position type
function usePosition(pos: Position): void {
  const x: number = pos.x
  const y: number = pos.y
}

// Test 5: Generic methods with Position constraint
function testGenerics(obj: GameObject): void {
  const positions: Position[] = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
  ]

  const closest: Position = obj.findClosestByRange(positions)
  const inRange: Position[] = obj.findInRange(positions, 5)
  const path: Position[] = obj.findPathTo({ x: 10, y: 10 })
}

// Test 6: Use arenaInfo properties
function testArenaInfo(): void {
  const info: ArenaInfo = arenaInfo

  const name: string = info.name
  const level: number = info.level
  const season: string = info.season
  const ticksLimit: number = info.ticksLimit
  const cpuTimeLimit: number = info.cpuTimeLimit
  const cpuTimeLimitFirstTick: number = info.cpuTimeLimitFirstTick
}

console.log('All type checks passed!')
