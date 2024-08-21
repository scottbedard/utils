import { Line } from '../types/Line'
import { toLine2 } from '../utils'
import { Vec } from '../types/Vec'

/**
 * Calculate the slope of a line
 */
export function slope(line: Line<2>): number;

/**
 * Calculate the slope between to vectors
 */
export function slope(v1: Vec<2>, v2: Vec<2>): number;

export function slope(a: Line<2> | Vec<2>, b?: Vec<2>): number {
  const [[x1, y1], [x2, y2]] = toLine2(a, b)

  return (y2 - y1) / (x2 - x1)
}
