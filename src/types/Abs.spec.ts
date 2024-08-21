import {
  Abs,
  Expect,
  Equal,
} from '../index'

describe('Abs<T>', () => {
  it('positive integer', () => {
    type Test = Expect<Equal<1, Abs<1>>>
  })

  it('negative integer', () => {
    type Test = Expect<Equal<1, Abs<-1>>>
  })

  it('positive float', () => {
    type Test = Expect<Equal<1.5, Abs<1.5>>>
  })

  it('negative float', () => {
    type Test = Expect<Equal<1.5, Abs<-1.5>>>
  })

  it('zero', () => {
    type Test = Expect<Equal<0, Abs<0>>>
  })
})