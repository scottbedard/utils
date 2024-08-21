import { IsNegative } from './IsNegative'
import { Not } from './Not'

/**
 * Determine if `T` is greater than 0
 *
 * @example
 * IsPositive<5> // true
 * IsPositive<-3> // false
 * IsPositive<0> // false
 */
export type IsPositive<T extends number> = T extends 0
  ? false
  : Not<IsNegative<T>>
