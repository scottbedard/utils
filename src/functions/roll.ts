/**
 * Roll the start of an array forwards or backwards.
 *
 * @example
 * roll([0, 1, 2], 1) // [1, 2, 0]
 */
export function roll<T>(arr: T[], n: number): T[] {
  const offset = (((n % arr.length) + arr.length) % arr.length)

  return arr.slice(offset).concat(arr.slice(0, offset))
}
