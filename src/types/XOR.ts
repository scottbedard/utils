import { Bit } from './Bit'

/**
 * Logical XOR
 *
 * @example
 * XOR<0, 0> // 0
 * XOR<0, 1> // 1
 * XOR<1, 0> // 1
 * XOR<1, 1> // 0
 */
export type XOR<T extends Bit, U extends Bit> = {
  0: { 0: 0, 1: 1 },
  1: { 0: 1, 1: 0 },
}[T][U]
