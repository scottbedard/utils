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
