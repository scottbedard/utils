/**
 * Multiply a vector by a number.
 */
export function scale<T extends number[]>(vector: T, scalar: number): T {
  return vector.map(n => n * scalar) as T
}
