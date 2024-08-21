import {
  Decimal,
  IsPositive,
} from '../index'

/**
 * Explode positive integer into digits
 *
 * @example
 * Digits<123> // [1, 2, 3]
 */
export type Digits<T extends number> =
  T extends Decimal
    ? [T]
    : IsPositive<T> extends true
      ? `${T}` extends `${infer U extends number}${infer V extends number}`
        ? [U, ...Digits<V>]
        : never
      : never
