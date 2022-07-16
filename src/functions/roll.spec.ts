import { roll } from '../index'

describe('roll', () => {
  it('positive', () => {
    const arr = [0, 1, 2]

    expect(roll(arr, 1)).toEqual([1, 2, 0])
  })

  it('negative', () => {
    const arr = [0, 1, 2]

    expect(roll(arr, -1)).toEqual([2, 0, 1])
  })
})
