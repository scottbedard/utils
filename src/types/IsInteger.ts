import { Not } from './Not'
import { IsFloat } from './IsFloat'

/**
 * Test if `T` is an integer
 *
 * @example
 * IsInteger<1> // true
 * IsInteger<1.5> // false
 */
export type IsInteger<T extends number> = Not<IsFloat<T>> extends true
  ? true
  : false

