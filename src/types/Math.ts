import { Not } from './Not'

/**
 * Bit
 */
export type Bit = 0 | 1

/**
 * Bitwise And
 * 
 * @example
 * BitwiseAnd<1, 1> // 1
 * BitwiseAnd<1, 0> // 0
 * BitwiseAnd<0, 1> // 0
 * BitwiseAnd<0, 0> // 0
 */
export type BitwiseAND<T extends Bit, U extends Bit> = T extends 1
  ? U extends 1
    ? 1
    : 0
  : 0

/**
 * Bitwise Or
 *
 * @example
 * BitwiseOr<1, 1> // 1
 * BitwiseOr<1, 0> // 1
 * BitwiseOr<0, 1> // 1
 * BitwiseOr<0, 0> // 0
 */
export type BitwiseOR<T extends Bit, U extends Bit> = T extends 1
  ? 1
  : U extends 1
    ? 1
    : 0

/**
 * Bitwise Xor
 *
 * @example
 * BitwiseXOR<1, 0> // 1
 * BitwiseXOR<0, 1> // 1
 * BitwiseXOR<1, 1> // 0
 * BitwiseXOR<0, 0> // 0
 */
export type BitwiseXOR<T extends Bit, U extends Bit> = T extends 1
  ? U extends 0
    ? 1
    : 0
  : U extends 1
    ? 1
    : 0

/**
 * Test if `T` is a float
 *
 * @example
 * IsFloat<1> // false
 * IsFloat<1.5> // true
 */
export type IsFloat<T extends number> = `${T}` extends `${number}.${number}`
  ? true
  : false

/**
 * Determine if `T` is less than 0
 *
 * @example
 * IsNegative<-3> // true
 * IsNegative<5> // false
 * IsNegative<0> // false
 * IsNegative<-0> // false
 */
export type IsNegative<T extends number> = T extends 0
  ? false
  : `${T}` extends `-${number}`
    ? true
    : false

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
