/**
 * Convert between rows and columns. A good way to visualize
 * this operation is holding a card by the top-left and
 * bottom-right corners and flipping it over.
 *
 * [                [
 *   [1, 2, 3],       [1, 4, 7],
 *   [4, 5, 6],  ->   [2, 5, 8],
 *   [7, 8, 9],       [3, 6, 9],
 * ]                ]
 *
 * @param {T[][]} arrs
 *
 * @return {T[][]}
 */
export function flip<T>(arrs: T[][]): T[][] {
  return arrs[0].map((x, i) => arrs.map((arr) => arr[i]))
}
