import { Not } from './Not'
import { Vector } from './Vector'

/**
 * Get the absolute value of a number
 *
 * @example
 * Abs<-1> // 1
 * Abs<0> // 0
 * Abs<1> // 1
 */
export type Abs<T extends number> = `${T}` extends `-${infer U extends number}` ? U : T

/**
 * Convert a decimal to base 2
 *
 * @example
 * Base2<5> // 101
 */
export type Base2<T extends Decimal> =
  T extends 0 ? 0 :
  T extends 1 ? 1 :
  T extends 2 ? 10 :
  T extends 3 ? 11 :
  T extends 4 ? 100 :
  T extends 5 ? 101 :
  T extends 6 ? 110 :
  T extends 7 ? 111 :
  T extends 8 ? 1000 :
  T extends 9 ? 1001 :
  never

/**
 * Bit
 */
export type Bit = 0 | 1

/**
 * Union of  decimal digits
 */
export type Decimal = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

/**
 * Logical BD
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
 * Get the last digit of a number
 *
 * @example
 * LastDigit<123> // 3
 */
export type LastDigit<T extends number> =
  T extends Decimal ? T :
  `${T}` extends `${number}${0}` ? 0 :
  `${T}` extends `${number}${1}` ? 1 :
  `${T}` extends `${number}${2}` ? 2 :
  `${T}` extends `${number}${3}` ? 3 :
  `${T}` extends `${number}${4}` ? 4 :
  `${T}` extends `${number}${5}` ? 5 :
  `${T}` extends `${number}${6}` ? 6 :
  `${T}` extends `${number}${7}` ? 7 :
  `${T}` extends `${number}${8}` ? 8 :
  `${T}` extends `${number}${9}` ? 9 :
  never

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
 * Reverse the sign of a number
 *
 * @example
 * Negate<1> // -1
 * Negate<-1> // 1
 * Negate<0> // 0 
 */
export type Negate<T extends number> =
  T extends 0
    ? 0
    : `${T}` extends `-${infer U extends number}`
      ? U
      : `-${T}` extends `${infer V extends number}`
        ? V
        : never

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
    
// type Add<T extends number, U extends number, Carry extends number = 0>


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
