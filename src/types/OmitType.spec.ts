import {
  Equal,
  Expect,
  OmitType,
} from '../index'

describe('OmitType', () => {
  it('omits object keys by type', () => {
    type Test = Expect<Equal<OmitType<{ foo: string, bar: number }, string>, { bar: number }>>
  })
})
