/**
 * Parse a color string.
 */
export function parseColor(color: string): [number, number, number, number] {
  const clamp = (val: number) => Math.min(255, Math.max(0, val))

  const hex = color
    .match(/^\s*#?([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])([\dabcdef][\dabcdef])?\s*$/i)

  if (hex) {
    const [, r = '0', g = '0', b = '0', a = '0'] = hex

    return [
      clamp(parseInt(r, 16)),
      clamp(parseInt(g, 16)),
      clamp(parseInt(b, 16)),
      clamp(Math.round(parseInt(a, 16) / 255)),
    ]
  }

  const rgba = color
    .match(/^\s*rgba?\(\s*(\d+),\s*(\d+),\s*(\d+),?\s*(\d+)?\s*\)\s*$/i)

  if (rgba) {
    const [, r = '0', g = '0', b = '0', a = '0'] = rgba

    return [
      clamp(parseInt(r, 10)),
      clamp(parseInt(g, 10)),
      clamp(parseInt(b, 10)),
      clamp(parseInt(a, 10) / 255),
    ]
  }

  throw new Error(`Invalid color: ${color}`)
}
