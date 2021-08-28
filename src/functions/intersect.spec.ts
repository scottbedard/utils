import { intersect } from '..'

describe('intersect', () => {
  it('returns null if lines are parellel', () => {
    expect(intersect([[0, 0], [1, 1]], [[0, 0], [1, 1]])).toBeUndefined()
    expect(intersect([[0, 0], [1, 1]], [[1, 1], [0, 0]])).toBeUndefined()
    expect(intersect([[0, 0], [1, 0]], [[1, 1], [2, 1]])).toBeUndefined()
  })

  it('calculates intersection if first line is vertical', () => {
    expect(intersect([[1, 1], [1, -1]], [[-1, 2], [3, 1]])).toEqual([1, 1.5])
  })

  it('calculates intersection if second line is vertical', () => {
    expect(intersect([[3, 1], [-1, -2]], [[1, 1], [1, 2]])).toEqual([1, -.5])
  })

  it('calculates intersection if neither line is vertical', () => {
    expect(intersect([[0, 0], [1, 1]], [[0, 1], [1, 0]])).toEqual([0.5, 0.5])
    
    const [x, y] = intersect([[-2, 3], [4, -1]], [[-3, -1], [2, -2]])
    expect(x).toBeCloseTo(7)
    expect(y).toBe(-3)
  })
})
