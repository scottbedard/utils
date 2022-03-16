import { StartsWith } from './StartsWith'

/**
 * Pick keys of `T` that start with `U`.
 */
export type PickStartsWith<T extends Record<string, any>, U extends string> = {
  [P in keyof T as StartsWith<Exclude<P, number | symbol>, U> extends true ? P : never]: T[P]
}
