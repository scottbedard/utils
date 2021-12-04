/**
 * Prohibit properties of `A` while excluding properties of `B`.
 *
 * @example
 * Without<{ a: any, b: any }, { b: any }> // { a?: never }
 */
export type Without<A, B> = {
  [K in Exclude<keyof A, keyof B>]?: never
}
