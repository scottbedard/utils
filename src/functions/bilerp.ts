import { lerp } from './lerp'
import { Vec } from '../types/Vec'

/**
 * Bi-linear interpolation
 */
export function bilerp([x1, y1]: Vec<2>, [x2, y2]: Vec<2>, alpha: number): Vec<2> {
  return [lerp(x1, x2, alpha), lerp(y1, y2, alpha)]
}