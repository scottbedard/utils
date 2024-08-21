import { Longer } from './Longer'
import { Vec } from './Vec'

/**
 * Left pad `T` to length `U` with `Character`
 *
 * @example
 * LeftPad<[1, 2, 3], 5, 'x'> // ['x', 'x', 1, 2, 3]
 */
export type LeftPad<T extends unknown[], U extends number, Character = unknown> =
  T['length'] extends U
    ? T
    : Longer<T, Vec<U>> extends T
      ? T
        : [Character, ...T]['length'] extends U
          ? [Character, ...T]
          : LeftPad<[Character, ...T], U, Character>
