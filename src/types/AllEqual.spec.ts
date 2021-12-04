import {
  AllEqual,
  Equal,
  Expect,
} from '../index'

describe('AllEqual', () => {
  it('pass', () => {
    type Test = Expect<AllEqual<[1, 1, 1], 1>>
  })

  it('fail', () => {
    type Test = Expect<
      Equal<
        false,
        AllEqual<[1, 1, 2], 1>
      >
    >
  })

  it('empty array', () => {
    type Test = Expect<AllEqual<[], true>>
  })
})