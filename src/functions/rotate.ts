import { Vector2 } from '../types'
import { degreesToRadians } from './degreesToRadians'

/**
 * Rotate a vector counter-clockwise around the origin.
 */
export function rotate([x, y]: Vector2, degrees: number): Vector2 {
  const radians = degreesToRadians(degrees)
  const cos = Math.cos(radians)
  const sin = Math.sin(radians)

  return [(x * cos) - (y * sin), (x * sin) + (y * cos)]
}
