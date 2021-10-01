import { clampColor } from '../utils'

/**
 * Convert a color vector to string.
 */
export function stringifyColor(
  [red, green, blue, alpha]: [number, number, number, number?],
): string {
  const toHex = (n: number) => clampColor(n).toString(16).padStart(2, '0')

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}${typeof alpha === 'number' ? toHex(alpha) : ''}`
}
