/**
 * Get the absolute value of a number
 *
 * @example
 * Abs<-1> // 1
 * Abs<0> // 0
 * Abs<1> // 1
 */
export type Abs<T extends number> = `${T}` extends `-${infer U extends number}` ? U : T
