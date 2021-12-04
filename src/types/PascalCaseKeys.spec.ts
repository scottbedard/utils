import {
  PascalCaseKeys,
  Equal,
  Expect,
} from '../index'

describe('PascalCaseKeys', () => {
  it('shallow', () => {
    type Test = Expect<Equal<{ AB: { c_d: 1 }}, PascalCaseKeys<{ a_b: { c_d: 1 }}>>>
  })
})
