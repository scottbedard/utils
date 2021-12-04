import {
  Equal,
  Expect,
} from '../index'

describe('Equal', () => {
  it('pass', () => {
    type Pass = Expect<Equal<true, true>>
  })

  it('fail', () => {
    // @ts-expect-error
    type Fail = Expect<Equal<true, false>>
  })
})