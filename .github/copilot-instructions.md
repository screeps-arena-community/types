# Copilot Instructions: Screeps Arena Types

This file contains important rules and nuances for working with Screeps Arena type definitions.
Read this before making any changes to the type library.

## Architecture

### Ambient Module Declarations

All types are declared as ambient modules using `declare module 'module-name'`:

```typescript
declare module 'game/prototypes/creep' {
  // types here
}
```

### ⚠️ CRITICAL: Imports Outside `declare module`

**NEVER** add imports at the top level of a file (outside `declare module`):

```typescript
// ❌ WRONG - breaks the entire type system!
import { Something } from '../other'

declare module 'game/prototypes/example' {
  // ...
}
```

```typescript
// ✅ CORRECT - imports inside declare module
declare module 'game/prototypes/example' {
  import { Something } from 'game/other'
  // ...
}
```

**Why:** Top-level imports convert the file from an ambient declaration to an ES module.
This causes classes to be invisible when inheriting in client code.

---

## Classes vs Types vs Interfaces

### Runtime Entities → `class`

If a real class/constructor exists in Screeps Arena runtime, declare it as `class`:

```typescript
// ✅ Real classes in runtime
export class GameObject { ... }
export class Creep extends GameObject { ... }
export class Position { ... }  // Yes, Position is also a class in runtime!
export class Effect { ... }
```

### Function Results / Options → `interface`

For result objects and options, use `interface`:

```typescript
export interface SpawnCreepResult {
  object?: Creep
  error?: number
}

export interface FindPathOptions {
  ignore?: GameObject[]
}
```

### Literal Types / Union Types → `type`

For union types and aliases, use `type`:

```typescript
export type BodyPartType = typeof ATTACK | typeof CARRY | typeof HEAL
export type Direction = typeof TOP | typeof RIGHT | typeof BOTTOM | typeof LEFT
export type ResourceType = typeof RESOURCE_ENERGY
```

---

## Position Specifics

`Position` is an **interface** that describes the structure `{ x, y }`.
`GameObject` implements this interface and declares its own `x` and `y` properties.

```typescript
// ✅ Correct - Position is an interface
export interface Position {
  x: number
  y: number
}

export class GameObject implements Position {
  x: number  // declared directly, not inherited
  y: number  // declared directly, not inherited
  // ...
}
```

This allows:
- Using `Position` as a type for any object with `x` and `y`
- Proper functionality of methods like `findClosestByPath<T extends Position>(...)`
- Structural typing compatibility

---

## Bugs in Official Types (typings/)

Official types from the game contain errors. Our library fixes them:

### 1. Unimported Constants

```typescript
// ❌ In official types, TOUGH is not imported
type BodyPartType = typeof ATTACK | ... | typeof TOUGH  // TOUGH undefined!

// ✅ Our fix - added TOUGH import
import { ATTACK, CARRY, HEAL, MOVE, RANGED_ATTACK, TOUGH, WORK } from 'game/constants'
```

### 2. Non-existent DirectionConstant

```typescript
// ❌ In official types
directions: DirectionConstant[]  // DirectionConstant is not defined anywhere!

// ✅ Our fix - use Direction from utils
import { Direction } from 'game/utils'
directions: Direction[]
```

### 3. Unimported Classes in tower.d.ts

```typescript
// ❌ In official types, Creep and Structure are not imported
attack(target: Creep | Structure): TowerAttackResult  // Creep undefined!

// ✅ Our fix
import { Creep } from 'game/prototypes/creep'
import { Structure } from 'game/prototypes/structure'
```

### 4. Constants Without Types

```typescript
// ❌ In official types - implicit any
export const BODYPART_COST
export const OBSTACLE_OBJECT_TYPES

// ✅ Our fix
export const BODYPART_COST: Record<string, number>
export const OBSTACLE_OBJECT_TYPES: string[]
```

---

## Additional Exports

Our library exports more types than the official one for developer convenience:

```typescript
// game/prototypes/index.d.ts
export { BodyPartType } from 'game/prototypes/creep'          // Convenient for body typing
export { Position, EffectData, Effect } from 'game/prototypes/game-object'
export { SpawnCreepResult, Spawning } from 'game/prototypes/spawn'
export { ResourceType } from 'game/prototypes/resource'
export { Store } from 'game/prototypes/store'
```

---

## Testing

### Main Tests

```bash
npm test  # Runs tsc --project tsconfig.test.json
```

Tests in `tests/` verify that types compile without errors.

### Integration Tests (test-package/)

```bash
cd test-package && npm test
```

The `test-package/` project verifies:
- Inheritance from `GameObject`, `Creep`, `Structure`
- Method availability in subclasses
- Import correctness

**IMPORTANT:** `test-package/` uses `skipLibCheck: false`, which reveals errors hidden in main tests.

---

## Adding Seasonal Types

When adding types for a new season:

1. Create structure in `src/arena/season_N/`:
   ```
   src/arena/season_N/
   ├── arena_name/
   │   ├── index.d.ts
   │   └── basic/
   │       ├── basic.d.ts
   │       └── prototypes/
   │           └── custom-object.d.ts
   ```

2. Use correct paths in re-exports:
   ```typescript
   // ✅ Correct
   declare module 'arena/season_N/arena_name/basic' {
     export * from 'arena/season_N/arena_name/basic/prototypes'
   }

   // ❌ Wrong (season_alpha doesn't exist)
   export * from 'arena/season_alpha/...'
   ```

3. Add `/// <reference>` in `src/index.d.ts`

4. Add test in `tests/`

---

## Pre-commit Checklist

- [ ] No imports outside `declare module`
- [ ] All used types/constants are imported inside the module
- [ ] Runtime entities are declared as `class`
- [ ] `npm test` passes
- [ ] `cd test-package && npm test` passes
- [ ] Class inheritance works in test-package

---

## Useful Commands

```bash
# Check types
npm test

# Check integration
cd test-package && npm test

# Build package (dry-run)
npm pack --dry-run

# Search for imports outside declare module
grep -r "^import" src/
```
