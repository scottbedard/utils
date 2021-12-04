/**
 * Map strings to uppercase.
 * 
 * @example
 * type Upper = MapUppercase<['a', 'b']> // ['A', 'B']
 */
export type MapUppercase<
  T extends string[],
  Acc extends string[] = [],
> = T extends [infer Head, ...infer Tail]
  ? Head extends string
    ? Tail extends string[]
      ? MapUppercase<Tail, [...Acc, Uppercase<Head>]>
      : never
    : never
  : Acc
