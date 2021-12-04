import {
  CamelCaseKeys,
  Equal,
  Expect,
} from '../index'

describe('CamelCaseKeys', () => {
  it('shallow', () => {
    type Test = Expect<Equal<{ aB: { c_d: 1 }}, CamelCaseKeys<{ a_b: { c_d: 1 }}>>>
  })
})
