/**
 * Omit object keys by type.
 * 
 * @example
 * OmitType<{ foo: string, bar: number }, string> // { bar: number }
 */
export type OmitType<T extends Record<string, any>, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P]
}
