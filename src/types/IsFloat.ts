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
