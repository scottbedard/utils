import { LeftPad } from './LeftPad'
import { Not } from './Not'

/**
 * Get the absolute value of a number
 *
 * @example
 * Abs<-1> // 1
 * Abs<0> // 0
 * Abs<1> // 1
 */
export type Abs<T extends number> = `${T}` extends `-${infer U extends number}` ? U : T

// /**
//  * Add two numbers
//  *
//  * @example
//  * Add<1, 2> // 3
//  */
// export type Add<T extends number, U extends number> =
//   IsPositive<T> extends true
//     ? IsInteger<T> extends true
//       ? IsPositive<U> extends true
//         ? IsInteger<U> extends true
//           ? never // positive integer + positive integer
//           : never // positive integer + positive float
//         : IsInteger<U> extends true
//           ? never // positive integer + negative integer
//           : never // positive integer + negative float
//       : never
//     : IsInteger<T> extends true

// type T1 = Add<1, 2>

/**
 * Explode positive integer into digits
 *
 * @example
 * Digits<123> // [1, 2, 3]
 */
export type Digits<T extends number> =
  T extends Decimal
    ? [T]
    : IsPositive<T> extends true
      ? `${T}` extends `${infer U extends number}${infer V extends number}`
        ? [U, ...Digits<V>]
        : never
      : never

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
export type AND<T extends Bit, U extends Bit> = {
  0: { 0: 0, 1: 0 },
  1: { 0: 0, 1: 1 },
}[T][U]

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
export type NAND<T extends Bit, U extends Bit> = {
  0: { 0: 1, 1: 1 },
  1: { 0: 1, 1: 0 },
}[T][U]

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
export type NOR<T extends Bit, U extends Bit> = {
  0: { 0: 1, 1: 0 },
  1: { 0: 0, 1: 0 },
}[T][U]

/**
 * Pad vectors with leading zeros
 *
 * @example
 * PadDigits<[1, 2], [3]> // [ [1, 2], [0, 3] ]
 */
export type PadDigits<T extends number[], U extends number[]> = [LeftPad<T, U['length'], 0>, LeftPad<U, T['length'], 0>]

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

/**
 * Logical XOR
 *
 * @example
 * XOR<0, 0> // 0
 * XOR<0, 1> // 1
 * XOR<1, 0> // 1
 * XOR<1, 1> // 0
 */
export type XOR<T extends Bit, U extends Bit> = {
  0: { 0: 0, 1: 1 },
  1: { 0: 1, 1: 0 },
}[T][U]

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

/**
 * Add decimals
 *
 * @example
 * DecimalAdd<1, 2> // 3
 */
export type DecimalAdd<T extends Decimal, U extends Decimal> = {
  0: {  0: 0,   1: 1,   2: 2,   3: 3,   4: 4,   5: 5,   6: 6,   7: 7,   8: 8,   9: 9   },
  1: {  0: 1,   1: 2,   2: 3,   3: 4,   4: 5,   5: 6,   6: 7,   7: 8,   8: 9,   9: 10  },
  2: {  0: 2,   1: 3,   2: 4,   3: 5,   4: 6,   5: 7,   6: 8,   7: 9,   8: 10,  9: 11  },
  3: {  0: 3,   1: 4,   2: 5,   3: 6,   4: 7,   5: 8,   6: 9,   7: 10,  8: 11,  9: 12  },
  4: {  0: 4,   1: 5,   2: 6,   3: 7,   4: 8,   5: 9,   6: 10,  7: 11,  8: 12,  9: 13  },
  5: {  0: 5,   1: 6,   2: 7,   3: 8,   4: 9,   5: 10,  6: 11,  7: 12,  8: 13,  9: 14  },
  6: {  0: 6,   1: 7,   2: 8,   3: 9,   4: 10,  5: 11,  6: 12,  7: 13,  8: 14,  9: 15  },
  7: {  0: 7,   1: 8,   2: 9,   3: 10,  4: 11,  5: 12,  6: 13,  7: 14,  8: 15,  9: 16  },
  8: {  0: 8,   1: 9,   2: 10,  3: 11,  4: 12,  5: 13,  6: 14,  7: 15,  8: 16,  9: 17  },
  9: {  0: 9,   1: 10,  2: 11,  3: 12,  4: 13,  5: 14,  6: 15,  7: 16,  8: 17,  9: 18  },
}[T][U]

/**
 * Test if `T` is an integer
 *
 * @example
 * IsInteger<1> // true
 * IsInteger<1.5> // false
 */
export type IsInteger<T extends number> = Not<IsFloat<T>>

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
 * Determine if `T` is a negative float
 * 
 * @example
 * IsNegativeFloat<-1> // false
 * IsNegativeFloat<-1.5> // true
 * IsNegativeFloat<1> // false
 */
export type IsNegativeFloat<T extends number> = IsNegative<T> extends true ? IsFloat<T> : false

/**
 * Determine if `T` is a negative integer
 * 
 * @example
 * IsNegativeInteger<-1> // true
 * IsNegativeInteger<-1.5> // false
 * IsNegativeInteger<1> // false
 */
export type IsNegativeInteger<T extends number> = IsNegative<T> extends true ? IsInteger<T> : false

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

/**
 * Determine if `T` is a positive integer
 * 
 * @example
 * IsPositiveInteger<1> // true
 * IsPositiveInteger<1.5> // false
 * IsPositiveInteger<-1> // false
 */
export type IsPositiveFloat<T extends number> = IsPositive<T> extends true ? IsFloat<T> : false

/**
 * Determine if `T` is a positive integer
 * 
 * @example
 * IsPositiveInteger<1> // true
 * IsPositiveInteger<1.5> // false
 * IsPositiveInteger<-1> // false
 */
export type IsPositiveInteger<T extends number> = IsPositive<T> extends true ? IsInteger<T> : false

/**
 * Convert numeric string to number
 *
 * @example
 * ToNumber<'123'> // 123
 */
export type ToNumber<T extends string> = `${T}` extends `${infer U extends number}`
  ? U
  : never
