import { Split } from './Split'

/**
 * Extract the last element of a string or array.
 * 
 * @example
 * type LastChar = Last<'abc'> // 'c'
 * type LastItem = Last<[1, 2, 3]>, // 3
 */
export type Last<T extends string | any[]> = T extends string
  ? Last<Split<T>>
  : T extends [...any, infer LastItem]
    ? LastItem
    : never