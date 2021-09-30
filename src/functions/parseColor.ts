import { clampColor } from '../utils'

/**
 * Parse a color string.
 */
export function parseColor(color: string): [number, number, number, number] {
  const hex = color
    .match(/^\s*#?([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])?\s*$/i)

  if (hex) {
    const [, r = '0', g = '0', b = '0', a = 'ff'] = hex

    return [
      clampColor(parseInt(r, 16)),
      clampColor(parseInt(g, 16)),
      clampColor(parseInt(b, 16)),
      clampColor(Math.round(parseInt(a, 16) / 255)),
    ]
  }

  const rgba = color
    .match(/^\s*rgba?\(\s*(\d+),\s*(\d+),\s*(\d+),?\s*(\d+)?\s*\)\s*$/i)

  if (rgba) {
    const [, r = '0', g = '0', b = '0', a = '255'] = rgba

    return [
      clampColor(parseInt(r, 10)),
      clampColor(parseInt(g, 10)),
      clampColor(parseInt(b, 10)),
      clampColor(parseInt(a, 10) / 255),
    ]
  }

  throw new Error(`Invalid color: ${color}`)
}
