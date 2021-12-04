import { Line2, Vector2, toLine2 } from '../utils'

/**
 * Calculate the slope of a line
 */
export function slope(line: Line2): number;

/**
 * Calculate the slope between to vectors
 */
export function slope(v1: Vector2, v2: Vector2): number;

export function slope(a: Line2 | Vector2, b?: Vector2): number {
  const [[x1, y1], [x2, y2]] = toLine2(a, b)

  return (y2 - y1) / (x2 - x1)
}
