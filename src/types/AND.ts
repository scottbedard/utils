import { Bit } from './Bit'

/**
 * Logical AND
 * 
 * @example
 * AND<1, 1> // 1
 * AND<1, 0> // 0
 * AND<0, 1> // 0
 * AND<0, 0> // 0
 */
export type AND<T extends Bit, U extends Bit> = {
  0: { 0: 0, 1: 0 },
  1: { 0: 0, 1: 1 },
}[T][U]
