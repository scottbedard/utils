/**
 * Create union of integers from 0 to `T`
 * 
 * @example
 * Enumerate<5> // 0 | 1 | 2 | 3 | 4
 */
export type Enumerate<T extends number, Acc extends number[] = []> = Acc['length'] extends T
  ? Acc[number]
  : Enumerate<T, [...Acc, Acc['length']]>
