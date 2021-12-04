import {
  Equal,
  Expect,
  First,
} from '../index'

describe('First', () => {
  it('array', () => {
    type Test = Expect<Equal<1, First<[1, 2, 3]>>>
  })

  it('string', () => {
    type Test = Expect<Equal<'a', First<'abc'>>>
  })
  
  it('empty array', () => {
    type Test = Expect<Equal<never, First<[]>>>
  })
  
  it('empty string', () => {
    type Test = Expect<Equal<never, First<''>>>
  })
})
