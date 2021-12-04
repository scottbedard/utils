import {
  Expect,
} from '../index'

describe('Expect', () => {
  it('pass', () => {
    type Pass = Expect<true>
  })

  it('fail', () => {
    // @ts-expect-error
    type Fail = Expect<false>
  })
})