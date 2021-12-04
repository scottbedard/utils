/**
 * Capitalize the first letter of each string.
 * 
 * @example
 * type Capitalized = MapLowercase<['foo', 'bar']> // ['Foo', 'Bar']
 */
export type MapCapitalize<
  T extends string[],
  Acc extends string[] = [],
> = T extends [infer Head, ...infer Tail]
  ? Head extends string
    ? Tail extends string[]
      ? MapCapitalize<Tail, [...Acc, Capitalize<Head>]>
      : never
    : never
  : Acc
