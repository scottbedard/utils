import { clampColor } from '../utils'

/**
 * Convert a color vector to string.
 */
export function stringifyColor([red = 0, green = 0, blue = 0, alpha = 1]: number[]): string {
  const toHex = (n: number) => clampColor(Math.round(n)).toString(16).padStart(2, '0')

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}${alpha < 1 ? toHex(alpha * 255) : ''}`
}
