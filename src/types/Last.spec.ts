import {
  Equal,
  Expect,
  Last,
} from '../index'

describe('Last', () => {
  it('array', () => {
    type Test = Expect<Equal<3, Last<[1, 2, 3]>>>
  })

  it('string', () => {
    type Test = Expect<Equal<'c', Last<'abc'>>>
  })
  
  it('empty array', () => {
    type Test = Expect<Equal<never, Last<[]>>>
  })
  
  it('empty string', () => {
    type Test = Expect<Equal<never, Last<''>>>
  })
})