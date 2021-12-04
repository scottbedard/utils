import { PascalCase } from './PascalCase'

/**
 * Deeply Pascal case object keys.
 * 
 * @example
 * type Obj = PascalCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FooBar: { OneTwo: any }}
 */
export type PascalCaseKeysDeep<T> = T extends Array<infer U>
  ? PascalCaseKeysDeep<U>[]
  : T extends Record<string, any>
    ? { [K in Extract<keyof T, string> as PascalCase<K>]: PascalCaseKeysDeep<T[K]> }
    : T
