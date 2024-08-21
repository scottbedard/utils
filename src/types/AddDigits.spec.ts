import {
  AddDigits,
  Equal,
  Expect,
} from '../index'

describe('AddDigits', () => {
  it('0 + 0', () => {
    type Test = Expect<Equal<0, AddDigits<0, 0>>>
  })

  it('0 + 1', () => {
    type Test = Expect<Equal<1, AddDigits<0, 1>>>
  })

  it('1 + 0', () => {
    type Test = Expect<Equal<1, AddDigits<1, 0>>>
  })

  it('3 + 5', () => {
    type Test = Expect<Equal<8, AddDigits<3, 5>>>
  })

  it('9 + 9', () => {
    type Test = Expect<Equal<18, AddDigits<9, 9>>>
  })
})