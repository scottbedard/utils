/**
 * Type-safe wrapper around `Object.keys`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
export function keys<T extends Record<string | number | symbol, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}
