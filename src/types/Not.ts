/**
 * Reverse the boolean value of `T`.
 * 
 * @example
 * type Test = Not<true> // false
 */
export type Not<T extends boolean> = T extends true ? false : true
