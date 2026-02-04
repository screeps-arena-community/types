# @screeps-arena-community/types

Typescript types for the game [Screeps Arena](https://store.steampowered.com/app/1137320/Screeps_Arena) based on the official [Screeps Arena Docs](https://arena.screeps.com/docs).

[![npm version](https://img.shields.io/npm/v/@screeps-arena-community/types.svg)](https://www.npmjs.com/package/@screeps-arena-community/types)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install --save-dev @screeps-arena-community/types
```

## Quick Start

Add the package to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@screeps-arena-community/types"],
    "moduleResolution": "node",
    "module": "ESNext",
    "target": "ES2020"
  }
}
```

For custom path mappings (optional):

```json
{
  "compilerOptions": {
    "types": ["@screeps-arena-community/types"],
    "paths": {
      "game/*": ["node_modules/@screeps-arena-community/types/src/game/*"],
      "arena/*": ["node_modules/@screeps-arena-community/types/src/arena/*"]
    }
  }
}
```

## Usage

### Core Game API

The core game API is available for all arena modes:

```typescript
import { Creep, Structure } from 'game/prototypes'
import { getObjectsByPrototype, getRange } from 'game/utils'
import { searchPath } from 'game/path-finder'
import { ATTACK, MOVE, HEAL } from 'game/constants'

export function loop() {
  const myCreeps = getObjectsByPrototype(Creep).filter((c) => c.my)
  // Your game logic here...
}
```

### Season-Specific Types

Import types specific to your arena mode:

#### Season 1: Construct and Control

```typescript
import {
  StructureGoal,
  AreaEffect,
} from 'arena/season_1/construct_and_control/basic'
import { EFFECT_DAMAGE } from 'arena/season_1/construct_and_control/basic/constants'
```

#### Season 1: Portal Exploration

```typescript
import { Portal } from 'arena/season_1/portal_exploration/basic'

export function loop() {
  const portals = getObjectsByPrototype(Portal)
  // Navigate through portals...
}
```

#### Season 2: Capture the Flag

```typescript
import { BodyPart } from 'arena/season_2/capture_the_flag/basic'

export function loop() {
  const droppedParts = getObjectsByPrototype(BodyPart)
  // Collect body parts...
}
```

#### Season 2: Power Split

```typescript
import { BonusFlag } from 'arena/season_2/power_split/basic'
import { EFF_CONSTRUCT_BOOST } from 'arena/season_2/power_split/basic/constants'

export function loop() {
  const flags = getObjectsByPrototype(BonusFlag)
  // Capture bonus flags...
}
```

## Available Arena Modes

| Season   | Mode                  | Import Path                            |
| -------- | --------------------- | -------------------------------------- |
| Season 1 | Construct and Control | `arena/season_1/construct_and_control` |
| Season 1 | Portal Exploration    | `arena/season_1/portal_exploration`    |
| Season 2 | Capture the Flag      | `arena/season_2/capture_the_flag`      |
| Season 2 | Power Split           | `arena/season_2/power_split`           |

## Package Structure

```
@screeps-arena/types/
├── src/
│   ├── index.d.ts              # Main entry (core game types)
│   ├── game/                   # Core game API
│   │   ├── constants.d.ts
│   │   ├── prototypes/         # Game objects (Creep, Structure, etc.)
│   │   ├── utils.d.ts
│   │   ├── path-finder.d.ts
│   │   └── visual.d.ts
│   └── arena/                  # Arena-specific types
│       ├── season_1/
│       │   ├── construct_and_control/
│       │   └── portal_exploration/
│       └── season_2/
│           ├── capture_the_flag/
│           └── power_split/
```

## Version Compatibility

| Package Version | Game Version | Notes                                      |
| --------------- | ------------ | ------------------------------------------ |
| 1.0.0           | Season 1 & 2 | Initial release with all major arena modes |

## Documentation

- [Screeps Arena Documentation](https://docs.screeps.com/arena/)
- [Screeps Arena on Steam](https://store.steampowered.com/app/1137320/Screeps_Arena/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- [NPM Package](https://www.npmjs.com/package/@screeps-arena-community/types)
- [GitHub Repository](https://github.com/screeps-arena-community/types)
- [Issue Tracker](https://github.com/screeps-arena-community/types/issues)
