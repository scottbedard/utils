
/**
 * The intersection of `A` and `B`, giving preference to `A`.
 * 
 * @example
 * type Shared = Intersection<{ a: 1, b: 2 }, { b: 3, c: 4 }> // { b: 2 }
 */
export type Intersection<
  A extends Record<string, unknown>,
  B extends Record<string, unknown>
> = Pick<A, keyof A & keyof B>
