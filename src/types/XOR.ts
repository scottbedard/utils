import { Without } from './Without'

/**
 * Exclusive A or B
 * 
 * @example
 * type FooOrBar = XOR<{ foo: any }, { bar: any }>
 * 
 * const a: FooOrBar = { foo } // pass
 * const b: FooOrBar = { bar } // pass
 * const c: FooOrBar = { foo, bar } // fail
 */
export type XOR<A, B> = (A | B) extends Record<string, unknown>
  ? (Without<A, B> & B) | (Without<B, A> & A)
  : A | B
