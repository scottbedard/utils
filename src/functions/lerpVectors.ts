import { lerp } from './lerp'

/**
 * Linear interpolation between two vectors.
 */
export function lerpVectors(v1: number[], v2: number[], alpha: number): number[] {
  const size = Math.max(v1.length, v2.length)
  const normalizedV1 = new Array(size).fill(0).map((x, i) => v1[i] ?? x)
  const normalizedV2 = new Array(size).fill(0).map((x, i) => v2[i] ?? x)

  return normalizedV1.map((val: number, index: number) => lerp(val, normalizedV2[index], alpha))
}

