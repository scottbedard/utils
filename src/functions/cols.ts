import { flip } from './flip'
import { rows } from './rows'

/**
 * Chunk a matrix into columns.
 *
 * [              [
 *   1, 2, 3,       [1, 4, 7],
 *   4, 5, 6,  ->   [2, 5, 8],
 *   7, 8, 9,       [3, 6, 9],
 * ]              ]
 *
 * @param {T[]} matrix Matrix array to chunk.
 *
 * @return {T[][]}
 */
export function cols<T>(matrix: T[]): T[][] {
  return flip(rows(matrix))
}
