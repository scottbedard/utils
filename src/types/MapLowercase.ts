/**
 * Map strings to lowercase.
 * 
 * @example
 * type Lower = MapLowercase<['A', 'B']> // ['a', 'b']
 */
export type MapLowercase<
  T extends string[],
  Acc extends string[] = [],
> = T extends [infer Head, ...infer Tail]
  ? Head extends string
    ? Tail extends string[]
      ? MapLowercase<Tail, [...Acc, Lowercase<Head>]>
      : never
    : never
  : Acc
