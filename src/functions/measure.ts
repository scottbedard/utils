import { Line } from '../types/Line'
import { toLine2 } from '../utils'
import { Vec } from '../types/Vec'

/**
 * Measure a two-dimensional line.
 */
export function measure(line: Line<2>): number

/**
 * Measure the distance between two-dimensional vectors.
 */
export function measure(a: Vec<2>, b: Vec<2>): number

export function measure(a: Line<2> | Vec<2>, b?: Vec<2>): number {
  const [[x1, y1], [x2, y2]] = toLine2(a, b)

  return Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
}
