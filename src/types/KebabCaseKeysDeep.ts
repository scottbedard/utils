
import { KebabCase } from './KebabCase'

/**
 * Deeply kebab case object keys.
 * 
 * @example
 * type Obj = KebabCaseKeysDeep<{ foo_bar: { one_two: any }}> // { 'foo-bar': { 'one-two': any }}
 */
export type KebabCaseKeysDeep<T> = T extends Array<infer U>
  ? KebabCaseKeysDeep<U>[]
  : T extends Record<string, any>
    ? { [K in Extract<keyof T, string> as KebabCase<K>]: KebabCaseKeysDeep<T[K]> }
    : T
