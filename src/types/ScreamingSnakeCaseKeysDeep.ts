import { ScreamingSnakeCase } from './ScreamingSnakeCase'

/**
 * Deeply screaming snake case object keys.
 * 
 * @example
 * type Obj = ScreamingSnakeCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FOO_BAR: { ONE_TWO: any }}
 */
export type ScreamingSnakeCaseKeysDeep<T> = T extends Array<infer U>
  ? ScreamingSnakeCaseKeysDeep<U>[]
  : T extends Record<string, any>
    ? { [K in Extract<keyof T, string> as ScreamingSnakeCase<K>]: ScreamingSnakeCaseKeysDeep<T[K]> }
    : T
