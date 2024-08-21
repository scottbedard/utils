import { degreesToRadians } from './degreesToRadians'
import { Vec } from '../types/Vec'

/**
 * Calculate angled distance from a vector.
 */
export function angleFrom([x, y]: Vec<2>, degrees: number, distance: number): Vec<2> {
  const radians = degreesToRadians(degrees)

  return [(distance * Math.cos(radians)) + x, (distance * Math.sin(radians)) + y]
}