/**
 * Add one or more vectors together.
 */
export function addVectors<T extends number[]>(...vectors: T[]): T {
  return vectors.reduce((acc, v) => v.map((n, i) => (acc[i] ?? 0) + n) as T, [] as T)
}
