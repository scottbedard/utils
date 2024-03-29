import { Without } from './Without'

/**
 * Exclusive A or B, or exclusive element from tuple
 * 
 * @example
 * type FooBar = Either<{ foo: any }, { bar: any }>
 * const a: FooBar = { foo } // pass
 * const b: FooBar = { bar } // pass
 * const c: FooBar = { foo, bar } // fail
 *
 * type FooBarBaz = Either<[{ foo: any }, { bar: any }, { baz: any }]>
 * const a = { foo } // pass
 * const b = { bar } // pass
 * const c = { baz } // pass
 * const d = { foo, bar } // fail
 */
export type Either<A, B = void> = B extends void
  ? A extends [infer C, ...infer Rest]
    ? C extends never
      ? never
      : Rest['length'] extends 0
        ? C
        : Rest['length'] extends 1
          ? Either<C, Rest[0]>
          : Either<C, Either<Rest>>
    : never
  : (A | B) extends Record<string, unknown>
    ? (Without<A, B> & B) | (Without<B, A> & A)
    : A | B
