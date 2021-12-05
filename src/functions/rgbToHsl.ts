import { clamp, clampColor } from '../utils'
import { parseColor } from './parseColor'

/**
 * Convert RGB to HSL.
 */
export function rgbToHsl(source: string | [number, number, number, number?]): [number, number, number, number] {
  let [
    red, 
    green, 
    blue, 
    alpha = 1,
  ] = typeof source === 'string'
    ? parseColor(source)
    : source

  red = clampColor(red) / 255
  green = clampColor(green) / 255
  blue = clampColor(blue) / 255
  alpha = clamp(alpha, 0, 1)

  const min = Math.min(red, green, blue)
  const max = Math.max(red, green, blue)
  const delta = max - min

  // gray
  if (delta === 0) {
    return [0, 0, max, alpha]
  }

  // hue
  let hue = 0

  if (max === red) {
    hue = ((green - blue) / delta) % 6
  } else if (max === green) {
    hue = (blue - red) / delta + 2
  } else {
    hue = (red - green) / delta + 4
  }

  hue = Math.round(hue * 60)

  if (hue < 0) {
    hue += 360
  }

  // lightness
  const lightness = (max + min) / 2

  // saturation
  const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1))

  return [hue, saturation, lightness, alpha]
}
