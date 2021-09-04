import { cols } from './cols'
import { flattenCols } from './flattenCols'
import { flattenRows } from './flattenRows'
import { rows } from './rows'

/**
 * Rotate a square matrix.
 */
export function rotateMatrix<T>(matrix: T[], rotations: number): T[] {
  const rotation = (rotations + 4) % 4

  if (rotation === 1) {
    return flattenCols(rows(matrix).slice().reverse())
  }

  if (rotation === 2) {
    return matrix.slice().reverse()
  }

  if (rotation === 3) {
    return flattenRows(cols(matrix).slice().reverse())
  }

  return matrix.slice()
}
