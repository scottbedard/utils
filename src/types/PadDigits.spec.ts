import {
  Equal,
  Expect,
  PadDigits,
} from '../index'

describe('PadDigits<T, U>', () => {
  it('equal length', () => {
    type Test = Expect<Equal<[[1], [2]], PadDigits<[1], [2]>>>
  })

  it('first shorter', () => {
    type Test = Expect<Equal<[[0, 1], [2, 3]], PadDigits<[1], [2, 3]>>>
  })

  it('second shorter', () => {
    type Test = Expect<Equal<[[1, 2], [0, 3]], PadDigits<[1, 2], [3]>>>
  })
})
