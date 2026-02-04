declare module 'game/prototypes' {
  export { Creep, BodyPartType } from 'game/prototypes/creep'
  export {
    GameObject,
    Position,
    EffectData,
    Effect,
  } from 'game/prototypes/game-object'
  export { Structure } from 'game/prototypes/structure'
  export { OwnedStructure } from 'game/prototypes/owned-structure'
  export { StructureTower } from 'game/prototypes/tower'
  export {
    StructureSpawn,
    SpawnCreepResult,
    Spawning,
  } from 'game/prototypes/spawn'
  export { StructureWall } from 'game/prototypes/wall'
  export { StructureContainer } from 'game/prototypes/container'
  export { Source } from 'game/prototypes/source'
  export { Resource, ResourceType } from 'game/prototypes/resource'
  export { StructureRampart } from 'game/prototypes/rampart'
  export { ConstructionSite } from 'game/prototypes/construction-site'
  export { StructureExtension } from 'game/prototypes/extension'
  export { StructureRoad } from 'game/prototypes/road'
  export { Flag } from 'game/prototypes/flag'
  export { Store } from 'game/prototypes/store'
}
