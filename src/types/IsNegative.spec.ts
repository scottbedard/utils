import {
  Expect,
  IsNegative,
  Not,
} from '../index'

describe('IsNegative<T>', () => {
  it('positive integer', () => {
    type Test = Expect<Not<IsNegative<1>>>
  })

  it('negative integer', () => {
    type Test = Expect<IsNegative<-1>>
  })

  it('positive float', () => {
    type Test = Expect<Not<IsNegative<1.5>>>
  })

  it('negative float', () => {
    type Test = Expect<IsNegative<-1.5>>
  })

  it('zero', () => {
    type Test = Expect<Not<IsNegative<0>>>
  })
})