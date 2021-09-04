import { flattenRows } from './flattenRows'
import { flip } from './flip'

/**
 * Flatten an array of columns.
 *
 * [                [
 *   [1, 4, 7],       1, 2, 3,
 *   [2, 5, 8],  ->   4, 5, 6,
 *   [3, 6, 9],       7, 8, 9,
 * ]                ]
 *
 * @param {T[][]} arr Array of column values.
 *
 * @return {T[]}
 */
export function flattenCols<T>(arr: T[][]): T[] {
  return flattenRows(flip(arr))
}
