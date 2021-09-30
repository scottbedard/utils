import { Line2, Vector2 } from './types'

/**
 * Clamp number to a given range.
 */
export function clamp(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, val))
}

/**
 * Clamp a number to between 0 and 255.
 */
export function clampColor(val: number): number {
  return clamp(val, 0, 255)
}

/**
 * Helper to allow functions to accept lines or vectors.
 */
export function toLine2(lineOrV1: Line2 | Vector2, maybeV2?: Vector2): Line2 {
  return maybeV2 ? [lineOrV1 as Vector2, maybeV2] : lineOrV1 as Line2
}
