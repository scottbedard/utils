import { Vector2 } from '../types'

/**
 * Measure the distance between two vectors.
 */
export function measure([x1, y1]: Vector2, [x2, y2]: Vector2): number {
  return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
}
