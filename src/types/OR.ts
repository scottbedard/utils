import { Bit } from './Bit'

/**
 * Logical OR
 *
 * @example
 * OR<0, 0> // 0
 * OR<0, 1> // 1
 * OR<1, 0> // 1
 * OR<1, 1> // 1
 */
export type OR<T extends Bit, U extends Bit> = {
  0: { 0: 0, 1: 1 },
  1: { 0: 1, 1: 1 },
}[T][U]
