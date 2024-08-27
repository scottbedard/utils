/**
 * Resolve a promise after a certain amount of time
 */
export function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
