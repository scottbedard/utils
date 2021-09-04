/**
 * Flatten an array of rows.
 *
 * [                [
 *   [1, 2, 3],       1, 2, 3,
 *   [4, 5, 6],  ->   4, 5, 6,
 *   [7, 8, 9],       7, 8, 9,
 * ]                ]
 *
 * @param {T[][]} arr Array of row values.
 *
 * @return {T[]}
 */
export function flattenRows<T>(arr: T[][]): T[] {
  return arr.reduce((acc, row) => acc.concat(row), [])
}
