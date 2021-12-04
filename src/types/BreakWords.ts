import { Last } from './Last'
import { Split } from './Split'

/**
 * Break a string by word break characters and casing.
 * 
 * @example
 * type Words = BreakWords<'one two-three_fourFive'> // ['one', 'two', 'three', 'four', 'Five']
 */
export type BreakWords<T extends string> = BreakParts<BreakChars<T>>

// break a string into parts
type BreakParts<
  Parts extends string[],
  Acc extends string[] = []
> = Parts extends [infer Head, ...infer Tail]
  ? Head extends string
    ? Tail extends string[]
      ? BreakParts<Tail, [...Acc, ...BreakCase<Head>]>
      : never
    : never
  : Acc

// break words by non-letter characters
type BreakChars<T extends string> = Split<T, ['-', '_', ' ']>

// break word by casing change
type BreakCase<T extends string> = T extends Uppercase<T>
  ? [T]
  : T extends Lowercase<T>
    ? [T]
    : BreakCaseMixed<T>

// break mixed case words by casing change
type BreakCaseMixed<
  T extends string,
  CurrentWord extends string = '',
  Words extends string[] = [],
> = T extends `${infer CurrentChar}${infer RestChars}`
  ? CurrentWord extends ''
    ? BreakCaseMixed<RestChars, CurrentChar, Words>
    : SameWord<CurrentChar, Last<CurrentWord>> extends true
      ? BreakCaseMixed<RestChars, `${CurrentWord}${CurrentChar}`, Words>
      : BreakCaseMixed<RestChars, CurrentChar, [...Words, CurrentWord]>
  : [...Words, CurrentWord]

type SameWord<A extends string, B extends string> = A extends Lowercase<A>
  ? true
  : B extends Uppercase<B>
    ? true
    : false