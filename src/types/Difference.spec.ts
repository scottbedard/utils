import {
  Difference,
  Equal,
  Expect,
} from '../index'

describe('Difference', () => {
  type LeftSet = 'a' | 'b'

  type RightSet = 'b' | 'c'

  type LeftObj = { a: any, b: number }

  type RightObj = { b: string, c: any }

  it('sets', () => {
    type Test = Expect<Equal<'a', Difference<LeftSet, RightSet>>>
  })

  it('objects', () => {
    type Test = Expect<Equal<{ a: any }, Difference<LeftObj, RightObj>>>
  })

  it('mixed types results in never', () => {
    type Test1 = Expect<Equal<never, Difference<LeftObj, RightSet>>>
    type Test2 = Expect<Equal<never, Difference<LeftSet, RightObj>>>
  })
})