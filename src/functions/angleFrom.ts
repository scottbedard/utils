import { degreesToRadians } from './degreesToRadians'
import { Vector } from '../types/Vector'

/**
 * Calculate angled distance from a vector.
 */
export function angleFrom([x, y]: Vector<2>, degrees: number, distance: number): Vector<2> {
  const radians = degreesToRadians(degrees)

  return [(distance * Math.cos(radians)) + x, (distance * Math.sin(radians)) + y]
}