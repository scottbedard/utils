import {
  Equal,
  Expect,
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