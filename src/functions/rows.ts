/**
 * Chunk a matrix into rows.
 *
 * [              [
 *   1, 2, 3,       [1, 2, 3],
 *   4, 5, 6,  ->   [4, 5, 6],
 *   7, 8, 9,       [7, 8, 9],
 * ]              ]
 *
 * @param {T[]} arr
 *
 * @return {T[][]}
 */
export function rows<T>(arr: T[]): T[][] {
  const size = Math.sqrt(arr.length)

  return new Array(size).fill(0).map((x, i) => {
    const start = i * size

    return arr.slice(start, start + size)
  })
}
