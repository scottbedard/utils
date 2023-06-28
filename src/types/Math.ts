import { Not } from './Not'
import { Vector } from './Vector'

/**
 * Integer union
 */
export type Bit = 0 | 1

/**
 * Integer union from 0 to 9
 */
export type Decimal = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * Logical And
 * 
 * @example
 * AND<1, 1> // 1
 * AND<1, 0> // 0
 * AND<0, 1> // 0
 * AND<0, 0> // 0
 */
export type AND<T extends Bit, U extends Bit> =
  T extends 1
    ? U extends 1
      ? 1
      : 0
  : 0

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
export type MUX<T extends Bit, U extends Bit, S extends Bit> = OR<AND<T, NOT<S>>, AND<U, S>>

/**
 * Logical NAND
 *
 * @example
 * NAND<0, 0> // 1
 * NAND<0, 1> // 1
 * NAND<1, 0> // 1
 * NAND<1, 1> // 0
 */
export type NAND<T extends Bit, U extends Bit> = NOT<AND<T, U>>

/**
 * Logical NOR
 *
 * @example
 * NOR<0, 0> // 1
 * NOR<0, 1> // 0
 * NOR<1, 0> // 0
 * NOR<1, 1> // 0
 */
export type NOR<T extends Bit, U extends Bit> = NOT<OR<T, U>>

/**
 * Logical NOT
 *
 * @example
 * NOT<1> // 0
 * NOT<0> // 1
 */
export type NOT<T extends Bit> = T extends 0 ? 1 : 0

/**
 * Logical OR
 *
 * @example
 * OR<0, 0> // 0
 * OR<0, 1> // 1
 * OR<1, 0> // 1
 * OR<1, 1> // 1
 */
export type OR<T extends Bit, U extends Bit> =
  T extends 0
    ? U extends 0
      ? 0
      : 1
    : 1

/**
 * Logical XOR
 *
 * @example
 * XOR<1, 0> // 1
 * XOR<0, 1> // 1
 * XOR<1, 1> // 0
 * XOR<0, 0> // 0
 */
export type XOR<T extends Bit, U extends Bit> = T extends U ? 0 : 1

/**
 * Logical XNOR
 *
 * @example
 * XNOR<0, 0> // 1
 * XNOR<0, 1> // 0
 * XNOR<1, 0> // 0
 * XNOR<1, 1> // 1
 */
export type XNOR<T extends Bit, U extends Bit> = NOT<XOR<T, U>>

/**
 * Get the length of a tuple
 *
 * @example
 * Length<[]> // 0
 * Length<[any]> // 1
 * Length<[any, any]> // 2
 */
type Length<T extends any[]> = T extends { length: infer L } ? L : never;

/**
 * Add decimals
 *
 * @example
 * DecimalAdd<1, 2> // 3
 */
export type DecimalAdd<T extends Decimal, U extends Decimal> = T extends 0
  ? U
  : U extends 0
    ? T
    : Length<[...Vector<T>, ...Vector<U>]>

/**
 * Subtract decimals
 *
 * @example
 * DecimalSubtract<1, 2> // 0
 */
export type DecimalSubtract<T extends Decimal, U extends Decimal> = T extends 0
  ? U
  : U extends 0
    ? T
    : Vector<T> extends [...(infer V), ...Vector<U>]
      ? Length<V>
      : never

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
