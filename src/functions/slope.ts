import { Line2, toLine2 } from '../utils'
import { Vector } from '../types/Vector'

/**
 * Calculate the slope of a line
 */
export function slope(line: Line2): number;

/**
 * Calculate the slope between to vectors
 */
export function slope(v1: Vector<2>, v2: Vector<2>): number;

export function slope(a: [Vector<2>, Vector<2>] | Vector<2>, b?: Vector<2>): number {
  const [[x1, y1], [x2, y2]] = toLine2(a, b)

  return (y2 - y1) / (x2 - x1)
}
