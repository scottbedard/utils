import { Line } from './types/Line'
import { Vector } from './types/Vector'

/**
 * Opaque type tag
 */
export declare const tag: unique symbol

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
export function toLine2(lineOrV1: Line<2> | Vector<2>, maybeV2?: Vector<2>): Line<2> {
  return maybeV2 ? [lineOrV1 as Vector<2>, maybeV2] : lineOrV1 as Line<2>
}
