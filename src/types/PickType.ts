/**
 * Pick object by type.
 * 
 * @example
 * PickType<{ foo: string, bar: number }, string> // { foo: string }
 */
export type PickType<T, U> = {
  [P in keyof T as T[P] extends U | undefined ? P : never]: T[P]
}
