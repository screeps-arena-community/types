/**
 * Type tests for Season 2: Capture the Flag
 */
import { Creep } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'
import { BodyPart } from 'arena/season_2/capture_the_flag/basic'
import { ATTACK, MOVE, HEAL, RANGED_ATTACK } from 'game/constants'

export function loop(): void {
  // Test BodyPart type (dropped body parts)
  const bodyParts = getObjectsByPrototype(BodyPart)

  for (const part of bodyParts) {
    // Test BodyPart.type property
    const partType: string = part.type

    // Find nearest creep to collect the body part
    const myCreeps = getObjectsByPrototype(Creep).filter((c) => c.my)

    if (myCreeps.length > 0) {
      const creep = myCreeps[0]

      // Move to the body part to collect it
      creep.moveTo(part)

      // Check if we should collect this type of part
      if (
        partType === ATTACK ||
        partType === RANGED_ATTACK ||
        partType === HEAL ||
        partType === MOVE
      ) {
        console.log(`Collecting ${partType} body part`)
      }
    }
  }
}
