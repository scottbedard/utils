import { LeftPad } from './LeftPad'

/**
 * Pad vectors with leading zeros
 *
 * @example
 * PadDigits<[1, 2], [3]> // [ [1, 2], [0, 3] ]
 */
export type PadDigits<T extends number[], U extends number[]> = [
  LeftPad<T, U['length'], 0>,
  LeftPad<U, T['length'], 0>
]
