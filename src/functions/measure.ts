import { Line2, Vector2, toLine2 } from '../utils'

/**
 * Measure a two-dimensional line.
 */
export function measure(line: Line2): number

/**
 * Measure the distance between two-dimensional vectors.
 */
export function measure(a: Vector2, b: Vector2): number

export function measure(a: Line2 | Vector2, b?: Vector2): number {
  const [[x1, y1], [x2, y2]] = toLine2(a, b)

  return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
}
