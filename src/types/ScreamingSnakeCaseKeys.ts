import { ScreamingSnakeCase } from './ScreamingSnakeCase'

/**
 * Screaming snake case object keys.
 *
 * @example
 * type Obj = ScreamingSnakeCaseKeys<{ foo_bar: any }> // { FOO_BAR: any }
 */
export type ScreamingSnakeCaseKeys<T> = T extends Record<string, any>
  ? { [K in Extract<keyof T, string> as ScreamingSnakeCase<K>]: T[K] }
  : T
