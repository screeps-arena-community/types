# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-02-04

### Fixed

- Fixed module resolution - types now work immediately after installation
- Added triple-slash references to load all ambient module declarations
- Removed unnecessary `exports` from package.json

### Changed

- Simplified installation - no additional tsconfig paths configuration needed
- Updated documentation with clearer usage examples

## [1.0.0] - 2026-02-04

### Added

- Initial release of @screeps-arena/types
- Core game API types (game/*)
  - Constants, prototypes, utils, path-finder, visual
  - All game objects: Creep, Structure, Tower, Spawn, etc.
- Season 1 arena types
  - Construct and Control mode
  - Portal Exploration mode
- Season 2 arena types
  - Capture the Flag mode
  - Power Split mode
- Comprehensive TypeScript type definitions
- Package exports for tree-shaking support
- Full documentation and usage examples

[1.0.1]: https://github.com/screeps-arena/types/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/screeps-arena/types/releases/tag/v1.0.0
