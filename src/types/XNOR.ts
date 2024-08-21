import { Bit } from './Bit'

/**
 * Logical XNOR
 *
 * @example
 * XNOR<0, 0> // 1
 * XNOR<0, 1> // 0
 * XNOR<1, 0> // 0
 * XNOR<1, 1> // 1
 */
export type XNOR<T extends Bit, U extends Bit> = T extends U ? 1 : 0
