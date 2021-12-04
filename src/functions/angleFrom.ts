import { degreesToRadians } from './degreesToRadians'
import { Vector2 } from '../utils'

/**
 * Calculate angled distance from a vector.
 */
export function angleFrom([x, y]: Vector2, degrees: number, distance: number): Vector2 {
  const radians = degreesToRadians(degrees)

  return [(distance * Math.cos(radians)) + x, (distance * Math.sin(radians)) + y]
}