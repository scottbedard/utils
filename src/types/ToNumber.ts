/**
 * Convert numeric string to number
 *
 * @example
 * ToNumber<'123'> // 123
 */
export type ToNumber<T extends string> = `${T}` extends `${infer U extends number}`
  ? U
  : never
