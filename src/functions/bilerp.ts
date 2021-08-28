import { lerp } from './lerp'
import { Vector2 } from '../types'

/**
 * Bi-linear interpolation
 */
export function bilerp([x1, y1]: Vector2, [x2, y2]: Vector2, alpha: number): Vector2 {
  return [lerp(x1, x2, alpha), lerp(y1, y2, alpha)]
}