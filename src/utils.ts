import { Line2, Vector2 } from './types'

/**
 * Helper to allow functions to accept lines or vectors.
 */
export function toLine2(lineOrV1: Line2 | Vector2, maybeV2?: Vector2): Line2 {
  return maybeV2 ? [lineOrV1 as Vector2, maybeV2] : lineOrV1 as Line2
}
