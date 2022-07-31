import { toLine2 } from '../utils'
import { Vector } from '../types/Vector'

/**
 * Measure a two-dimensional line.
 */
export function measure(line: [Vector<2>, Vector<2>]): number

/**
 * Measure the distance between two-dimensional vectors.
 */
export function measure(a: Vector<2>, b: Vector<2>): number

export function measure(a: [Vector<2>, Vector<2>] | Vector<2>, b?: Vector<2>): number {
  const [[x1, y1], [x2, y2]] = toLine2(a, b)

  return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
}
