import { Not } from './Not'
import { StartsWith } from './StartsWith'

/**
 * Omit keys of `T` that start with `U`.
 */
export type OmitStartsWith<T extends Record<string, any>, U extends string> = {
  [P in keyof T as Not<StartsWith<Exclude<P, number | symbol>, U>> extends true ? P : never]: T[P]
}