import { lerpVectors } from './lerpVectors'
import { parseColor } from './parseColor'
import { stringifyColor } from './stringifyColor'

/**
 * Linear interpolation between colors.
 */
export function lerpColors(
  from: string | number[],
  to: string | number[],
  alpha: number,
): string {
  const toVector = (color: string | number[]) => Array.isArray(color)
    ? [color[0] ?? 0, color[1] ?? 0, color[2] ?? 0, color[3] ?? 1]
    : parseColor(color)

  return stringifyColor(lerpVectors(toVector(from), toVector(to), alpha))
}
