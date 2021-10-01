import { clamp, clampColor } from '../utils'

/**
 * Parse a color string.
 */
export function parseColor(color: string): [number, number, number, number] {
  const singleHex = color
    .match(/^\s*#?([\dabcdef])([\dabcdef])([\dabcdef])([\dabcdef])?\s*$/i)

  if (singleHex) {
    const [, r = '0', g = '0', b = '0', a = 'f'] = singleHex

    return [
      clampColor(parseInt(r + r, 16)),
      clampColor(parseInt(g + g, 16)),
      clampColor(parseInt(b + b, 16)),
      clamp(parseInt(a + a, 16) / 255, 0, 1),
    ]
  }

  const doubleHex = color
    .match(/^\s*#?([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})?\s*$/i)

  if (doubleHex) {
    const [, r = '0', g = '0', b = '0', a = 'ff'] = doubleHex

    return [
      clampColor(parseInt(r, 16)),
      clampColor(parseInt(g, 16)),
      clampColor(parseInt(b, 16)),
      clamp(parseInt(a, 16) / 255, 0, 1),
    ]
  }

  const normalize = (str: string) => str.endsWith('%') ? Math.round((parseInt(str, 10) / 100) * 255) : parseInt(str, 10)

  const rgba = color
    .match(/^\s*rgba?\(\s*(\d+%?),\s*(\d+%?),\s*(\d+%?),?\s*(\d+%?)?\s*\)\s*$/i)

  if (rgba) {
    const [, r = '0', g = '0', b = '0', a = '255'] = rgba

    return [
      clampColor(normalize(r)),
      clampColor(normalize(g)),
      clampColor(normalize(b)),
      clamp(normalize(a) / 255, 0, 1),
    ]
  }

  throw new Error(`Invalid color: ${color}`)
}
