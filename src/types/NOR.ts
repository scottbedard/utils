import { Bit } from './Bit'

/**
 * Logical NOR
 *
 * @example
 * NOR<0, 0> // 1
 * NOR<0, 1> // 0
 * NOR<1, 0> // 0
 * NOR<1, 1> // 0
 */
export type NOR<T extends Bit, U extends Bit> = {
  0: { 0: 1, 1: 0 },
  1: { 0: 0, 1: 0 },
}[T][U]
