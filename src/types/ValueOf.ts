/**
 * Generate a union from the values of `T`.
 *
 * @example
 * ValueOf<Array<string>> // string
 * ValuesOf<{ foo: number, bar: string }> // number | string
 */
export type ValueOf<T extends Record<string, unknown> | Array<any> | ReadonlyArray<any>> = T extends Array<infer U> 
  ? U
  : T extends ReadonlyArray<infer V>
    ? V
    : T extends Record<string, unknown>
      ? T[keyof T]
      : never
