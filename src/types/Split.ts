import { Equal } from './Equal'

/**
 * Split `Source` by `Delimeter`.
 * 
 * @example
 * type Characters = Split<'abc'> // ['a', 'b', 'c']
 * type Parts = Split<'a.b.c', '.'> // ['a', 'b', 'c']
 */
export type Split<
  Source extends string,
  Delimeter extends string | string[] = ''
> = Delimeter extends string[]
  ? WalkDelimeters<[Source], Delimeter>
  : Delimeter extends string
    ? WalkString<Source, Delimeter>
    : never

// walk over single string and split by delimeter
type WalkString<
  Source extends string,
  Delimeter extends string = '',
  Parts extends string[] = [],
> = Source extends `${infer Head}${Delimeter}${infer Tail}`
  ? WalkString<Tail, Delimeter, [...Parts, Head]>
  : Equal<Source, ''> extends true
    ? Parts
    : [...Parts, Source]

// walk over strings and split each by delimeter
type WalkParts<
  Parts extends string[],
  Delimeter extends string,
  Acc extends string[] = [],
> = Parts extends [infer Head, ...infer Tail]
  ? Tail extends string[]
    ? Head extends string
      ? WalkParts<Tail, Delimeter, [...Acc, ...WalkString<Head, Delimeter>]>
      : never
    : never
  : Acc

// walk over delimeters and split parts by current delimeter
type WalkDelimeters<
  Parts extends string[],
  Delimeters extends string[],
> = Delimeters extends [infer Head, ...infer Tail]
  ? Head extends string
    ? Tail extends string[]
      ? WalkDelimeters<WalkParts<Parts, Head>, Tail>
      : never
    : never
  : Parts