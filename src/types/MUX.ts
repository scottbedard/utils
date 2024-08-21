import { Bit } from './Bit'

/**
 * Logical MUX
 * 
 * @example
 * MUX<0, 0, 0> // 0
 * MUX<0, 1, 0> // 0
 * MUX<1, 0, 0> // 1
 * MUX<1, 1, 0> // 1
 * MUX<0, 0, 1> // 0
 * MUX<0, 1, 1> // 1
 * MUX<1, 0, 1> // 0
 * MUX<1, 1, 1> // 1
 */
export type MUX<T extends Bit, U extends Bit, S extends Bit> = S extends 0 ? T : U
