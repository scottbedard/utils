import { clamp, clampColor } from '../utils'

/**
 * Parse a color string.
 */
export function parseColor(color: string): [number, number, number, number] {
  const hex = color
    .match(/^\s*#?([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])?\s*$/i)

  if (hex) {
    let [, r = '0', g = '0', b = '0', a = 'ff'] = hex

    return [
      clampColor(parseInt(r, 16)),
      clampColor(parseInt(g, 16)),
      clampColor(parseInt(b, 16)),
      clampColor(Math.round(parseInt(a, 16) / 255)),
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
