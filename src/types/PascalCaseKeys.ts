import { PascalCase } from './PascalCase'

/**
 * Pascal case object keys.
 *
 * @example
 * type Obj = PascalCaseKeys<{ foo_bar: any }> // { FooBar: any }
 */
export type PascalCaseKeys<T> = T extends Record<string, any>
  ? { [K in Extract<keyof T, string> as PascalCase<K>]: T[K] }
  : T
