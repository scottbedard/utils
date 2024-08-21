import {
  Expect,
  IsFloat,
  Not,
} from '../index'

describe('IsFloat<T>', () => {
  it('positive integer', () => {
    type Test = Expect<Not<IsFloat<1>>>
  })

  it('negative integer', () => {
    type Test = Expect<Not<IsFloat<-1>>>
  })

  it('positive float', () => {
    type Test = Expect<IsFloat<1.5>>
  })

  it('negative float', () => {
    type Test = Expect<IsFloat<-1.5>>
  })
  
  it('zero', () => {
    type Test = Expect<Not<IsFloat<0>>>
  })
})
