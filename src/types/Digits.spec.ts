import {
  Digits,
  Equal,
  Expect,
} from '../index'

describe('Digits<T>', () => {
  it('positive integer', () => {
    type Test = Expect<Equal<[1, 2, 3], Digits<123>>>
  })

  it('negative integer', () => {
    type Test = Expect<Equal<never, Digits<-123>>>
  })

  it('positive float', () => {
    type Test = Expect<Equal<never, Digits<123.456>>>
  })

  it('negative float', () => {
    type Test = Expect<Equal<never, Digits<-123.456>>>
  })

  it('zero', () => {
    type Test = Expect<Equal<[0], Digits<0>>>
  })
})