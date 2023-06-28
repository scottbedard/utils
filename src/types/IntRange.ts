import { Enumerate } from './Enumerate'

/**
 * Create an inclusive union of integers from `T` to `U`
 *
 * @example
 * IntRange<5, 10> // 5 | 6 | 7 | 8 | 9 | 10
 */
export type IntRange<T extends number, U extends number> = Exclude<Enumerate<U>, Enumerate<T>>
