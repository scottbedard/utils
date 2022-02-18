import {
  Equal,
  Expect,
  PickType,
} from '../index'

describe('PickType', () => {
  it('picks object by type', () => {
    type Test = Expect<Equal<PickType<{ foo: string, bar: number }, string>, { foo: string }>>
  })
})
