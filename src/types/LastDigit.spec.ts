import {
  Expect,
  Equal,
  LastDigit,
} from '../index'

describe('LastDigit<T>', () => {
  it('positive integer', () => {
    type Test = Expect<Equal<3, LastDigit<123>>>
  })

  it('negative integer', () => {
    type Test = Expect<Equal<3, LastDigit<-123>>>
  })

  it('positive float', () => {
    type Test = Expect<Equal<6, LastDigit<123.456>>>
  })

  it('negative float', () => {
    type Test = Expect<Equal<6, LastDigit<-123.456>>>
  })

  it('zero', () => {
    type Test = Expect<Equal<0, LastDigit<0>>>
  })
})