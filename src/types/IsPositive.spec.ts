import {
  Expect,
  IsPositive,
  Not,
} from '../index'

describe('IsPositive<T>', () => {
  it('positive integer', () => {
    type Test = Expect<IsPositive<1>>
  })

  it('negative integer', () => {
    type Test = Expect<Not<IsPositive<-1>>>
  })

  it('positive float', () => {
    type Test = Expect<IsPositive<1.5>>
  })

  it('negative integer', () => {
    type Test = Expect<Not<IsPositive<-1>>>
  })

  it('zero', () => {
    type Test = Expect<Not<IsPositive<0>>>
  })
})