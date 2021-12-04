import {
  KebabCaseKeys,
  Equal,
  Expect,
} from '../index'

describe('KebabCaseKeys', () => {
  it('shallow', () => {
    type Test = Expect<Equal<{ 'a-b': { c_d: 1 }}, KebabCaseKeys<{ a_b: { c_d: 1 }}>>>
  })
})
