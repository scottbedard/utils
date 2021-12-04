import { SnakeCase } from './SnakeCase'

/**
 * Deeply snake case object keys.
 * 
 * @example
 * type Obj = SnakeCaseKeysDeep<{ fooBar: { oneTwo: any }}> // { foo_bar: { one_two: any }}
 */
export type SnakeCaseKeysDeep<T> = T extends Array<infer U>
  ? SnakeCaseKeysDeep<U>[]
  : T extends Record<string, any>
    ? { [K in Extract<keyof T, string> as SnakeCase<K>]: SnakeCaseKeysDeep<T[K]> }
    : T
