import {
  Equal,
  Expect,
  NOT,
  Not,
} from '../index'

describe('Not', () => {
  it('pass', () => {
    type Test = Expect<Not<Equal<1, 2>>>
  })

  it('fail', () => {
    // @ts-expect-error
    type Test = Expect<Not<Equal<1, 1>>>
  })
})

describe('NOT', () => {
  it('NOT<T>', () => {
    type T0 = Expect<Equal<NOT<0>, 1>>
    type T1 = Expect<Equal<NOT<1>, 0>>
  })
})