import {
  Expect,
  IsInteger,
  Not,
} from '../index'

describe('IsInteger<T>', () => {
  it('positive integer', () => {
    type Test = Expect<IsInteger<1>>
  })

  it('negative integer', () => {
    type Test = Expect<IsInteger<-1>>
  })

  it('positive float', () => {
    type Test = Expect<Not<IsInteger<1.5>>>
  })

  it('negative float', () => {
    type Test = Expect<Not<IsInteger<-1.5>>>
  })
  
  it('zero', () => {
    type Test = Expect<IsInteger<0>>
  })
})
