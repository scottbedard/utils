import { Bit } from './Bit'

/**
 * Reverse the boolean value of `T`.
 * 
 * @example
 * type Test = Not<true> // false
 */
export type Not<T extends boolean> = T extends true ? false : true

/**
 * Logical NOT
 *
 * @example
 * NOT<1> // 0
 * NOT<0> // 1
 */
export type NOT<T extends Bit> = {
  0: 1,
  1: 0,
}[T]