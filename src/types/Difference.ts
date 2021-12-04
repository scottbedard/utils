/**
 * Elements of `A` that are not elements of `B`. For unions, this
 * is the same as the built in `Exclude` utility.
 * 
 * @example
 * type Left = Difference<{ a: any, b: any }, { b: any, c: any }> // { a: any }
 */
export type Difference<A, B> = [A] extends [Record<string, unknown>]
  ? [B] extends [Record<string, unknown>]
    ? Omit<A, keyof B>
    : never
  : [B] extends [Record<string, unknown>]
    ? never
    : Exclude<A, B>
