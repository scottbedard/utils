import {
  Equal,
  Expect,
  Pop,
} from '../index'

describe('Pop', () => {
  it('empty source', () => {
    type Test = Expect<Equal<[], Pop<[]>>>
  })

  describe('one item', () => {
    type Test = Expect<Equal<[], Pop<[1]>>>
  })

  describe('many items', () => {
    type Test = Expect<Equal<[1, 2, 3], Pop<[1, 2, 3, 4]>>>
  })
})
