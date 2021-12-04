import { SnakeCase } from './SnakeCase'

/**
 * Snake case object keys.
 *
 * @example
 * type Obj = SnakeCaseKeys<{ fooBar: any }> // { foo_bar: any }
 */
export type SnakeCaseKeys<T> = T extends Record<string, any>
  ? { [K in Extract<keyof T, string> as SnakeCase<K>]: T[K] }
  : T
