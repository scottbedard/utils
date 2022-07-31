import { degreesToRadians } from './degreesToRadians'
import { Vector } from '../types/Vector'

/**
 * Rotate a vector counter-clockwise around the origin.
 */
export function rotateVector([x, y]: Vector<2>, degrees: number): Vector<2> {
  const radians = degreesToRadians(degrees)
  const cos = Math.cos(radians)
  const sin = Math.sin(radians)

  return [(x * cos) - (y * sin), (x * sin) + (y * cos)]
}
