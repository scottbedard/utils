import { Equal } from './Equal'

/**
 * Types `true` if all `Sources` equal `Value`.
 */
export type AllEqual<
  Sources extends any[],
  Value
> = Sources extends [infer Head, ...infer Tail]
  ? Equal<Head, Value> extends true
    ? AllEqual<Tail, Value>
    : false
  : true