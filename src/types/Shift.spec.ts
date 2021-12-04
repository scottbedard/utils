import {
  Equal,
  Expect,
  Shift,
} from '../index'

describe('Shift', () => {
  it('empty source', () => {
    type Test = Expect<Equal<[], Shift<[]>>>
  })

  it('one item', () => {
    type Test = Expect<Equal<[], Shift<[1]>>>
  })

  it('many items', () => {
    type Test = Expect<Equal<[2, 3, 4], Shift<[1, 2, 3, 4]>>>
  })
})
