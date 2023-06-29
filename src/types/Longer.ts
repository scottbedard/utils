/**
 * Return the longer of two tuples. For tuples of equal length, the first is returned.
 *
 * @example
 * Longer<[1], [2]> // [1]
 * Longer<[1, 2, 3], [4, 5]> // [1, 2, 3]
 */
export type Longer<T extends unknown[], U extends unknown[], OriginalT = T, OriginalU = U> =
  T['length'] extends U['length']
    ? T
    : T extends [unknown, ...infer T1]
      ? U extends [unknown, ...infer U1]
        ? Longer<T1, U1, OriginalT, OriginalU>
        : OriginalT
      : OriginalU
