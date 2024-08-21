import {
  Equal,
  Expect,
  ToNumber,
} from '../index'

describe('ToNumber<T>', () => {
  it('positive integer', () => {
    type Test = Expect<Equal<123, ToNumber<'123'>>>
  })

  it('negative integer', () => {
    type Test = Expect<Equal<-123, ToNumber<'-123'>>>
  })

  it('positive float', () => {
    type Test = Expect<Equal<123.456, ToNumber<'123.456'>>>
  })

  it('negative float', () => {
    type Test = Expect<Equal<-123.456, ToNumber<'-123.456'>>>
  })

  it('zero', () => {
    type Test = Expect<Equal<0, ToNumber<'0'>>>
  })
})