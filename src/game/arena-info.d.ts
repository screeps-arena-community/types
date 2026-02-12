declare module 'game' {
  export interface ArenaInfo {
    /** CPU wall time execution limit per one tick (except the first tick). */
    ticksLimit: number
    /** CPU wall time limit on the first tick. */
    cpuTimeLimitFirstTick: number
    /** Currently equals to 1 for basic arena and 2 for advanced. */
    level: number
    /** The name of the arena. */
    name: string
    /** The name of the season this arena belongs. */
    season: string
    /** Game ticks limit. */
    cpuTimeLimit: number
  }

  const arenaInfo: ArenaInfo
  export { arenaInfo }
}
