import {
  Equal,
  Expect,
  Longer,
} from '../index'

describe('Longer<T, U>', () => {
  it('empty', () => {
    type Test = Expect<Equal<[], Longer<[], []>>>
  })

  it('equal length', () => {
    type Test = Expect<Equal<[1, 2, 3], Longer<[1, 2, 3], [4, 5, 6]>>>
  })

  it('first', () => {
    type Test = Expect<Equal<[1, 2, 3], Longer<[1, 2, 3], [4, 5]>>>
  })

  it('second', () => {
    type Test = Expect<Equal<[4, 5, 6], Longer<[1, 2], [4, 5, 6]>>>
  })
})
