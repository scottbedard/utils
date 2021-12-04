import { Split } from './Split'

/**
 * Extract the first element of a string or array.
 * 
 * @example
 * type FirstChar = First<'abc'> // 'a'
 * type FirstItem = First<[1, 2, 3]>, // 1
 */
export type First<T extends string | any[]> = T extends string
  ? First<Split<T>>
  : T extends [infer FirstItem, ...any]
    ? FirstItem
    : never
