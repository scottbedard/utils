import { Decimal } from './Decimal'

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
