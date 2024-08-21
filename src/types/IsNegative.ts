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
