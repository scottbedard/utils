import { Bit } from './Bit'

/**
 * Logical NAND
 *
 * @example
 * NAND<0, 0> // 1
 * NAND<0, 1> // 1
 * NAND<1, 0> // 1
 * NAND<1, 1> // 0
 */
export type NAND<T extends Bit, U extends Bit> = {
  0: { 0: 1, 1: 1 },
  1: { 0: 1, 1: 0 },
}[T][U]
