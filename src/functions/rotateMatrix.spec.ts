import { rotateMatrix } from '..'

describe('rotateMatrix', () => {
  const matrix = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
  ]

  it('rotates a matrix clockwise', () => {
    const rotatedMatrix = rotateMatrix(matrix, 1)

    expect(rotatedMatrix).toEqual([
      6, 3, 0,
      7, 4, 1,
      8, 5, 2,
    ])

    // verify that the source matrix remains unchanged
    expect(matrix).toEqual([
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
    ])
  })

  it('rotates a matrix counter-clockwise', () => {
    const rotatedMatrix = rotateMatrix(matrix, -1)

    expect(rotatedMatrix).toEqual([
      2, 5, 8,
      1, 4, 7,
      0, 3, 6,
    ])

    expect(matrix).toEqual([
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
    ])
  })

  it('rotates a matrix by 180 degrees', () => {
    const rotatedMatrix = rotateMatrix(matrix, 2)

    expect(rotatedMatrix).toEqual([
      8, 7, 6,
      5, 4, 3,
      2, 1, 0,
    ])

    expect(matrix).toEqual([
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
    ])
  })

  it('clones the matrix when rotation is 0', () => {
    const rotatedMatrix = rotateMatrix(matrix, 0)

    expect(rotatedMatrix).toEqual(matrix)

    expect(rotatedMatrix).not.toBe(matrix)
  })
})
