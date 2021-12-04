import { CamelCase } from './CamelCase'

/**
 * Deeply camel case object keys.
 * 
 * @example
 * type Obj = CamelCaseKeysDeep<{ foo_bar: { one_two: any }}> // { fooBar: { oneTwo: any }}
 */
export type CamelCaseKeysDeep<T> = T extends Array<infer U>
  ? CamelCaseKeysDeep<U>[]
  : T extends Record<string, any>
    ? { [K in Extract<keyof T, string> as CamelCase<K>]: CamelCaseKeysDeep<T[K]> }
    : T
