import { KebabCase } from './KebabCase'

/**
 * Kebab case object keys.
 *
 * @example
 * type Obj = KebabCaseKeys<{ foo_bar: any }> // { 'foo-bar': any }
 */
export type KebabCaseKeys<T> = T extends Record<string, any>
  ? { [K in Extract<keyof T, string> as KebabCase<K>]: T[K] }
  : T
