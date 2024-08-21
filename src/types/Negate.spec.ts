import {
  Equal,
  Expect,
  Negate,
} from '../index'

describe('Negate<T>', () => {
  it('positive integer', () => {
    type Test = Expect<Equal<-1, Negate<1>>>
  })

  it('negative integer', () => {
    type Test = Expect<Equal<1, Negate<-1>>>
  })

  it('positive float', () => {
    type Test = Expect<Equal<-1.5, Negate<1.5>>>
  })

  it('negative float', () => {
    type Test = Expect<Equal<1.5, Negate<-1.5>>>
  })

  it('zero', () => {
    type Test = Expect<Equal<0, Negate<0>>>
  })
})