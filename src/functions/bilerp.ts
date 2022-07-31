import { lerp } from './lerp'
import { Vector } from '../types/Vector'

/**
 * Bi-linear interpolation
 */
export function bilerp([x1, y1]: Vector<2>, [x2, y2]: Vector<2>, alpha: number): Vector<2> {
  return [lerp(x1, x2, alpha), lerp(y1, y2, alpha)]
}