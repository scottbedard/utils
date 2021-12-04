import {
  Equal,
  Expect,
  SymmetricDifference,
} from '../index'

describe('SymmetricDifference', () => {
  type LeftSet = 'a' | 'b'

  type RightSet = 'b' | 'c'

  type LeftObj = { a: any, b: number }

  type RightObj = { b: string, c: any }

  it('sets', () => {
    type Test = Expect<Equal<'a' | 'c', SymmetricDifference<LeftSet, RightSet>>>
  })

  it('objects', () => {
    type Test = Expect<Equal<{ a: any, c: any }, SymmetricDifference<LeftObj, RightObj>>>
  })

  it('mixed types results in never', () => {
    type Test1 = Expect<Equal<never, SymmetricDifference<LeftObj, RightSet>>>
    type Test2 = Expect<Equal<never, SymmetricDifference<LeftSet, RightObj>>>
  })
})
