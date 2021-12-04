import {
  Equal,
  Expect,
  ScreamingSnakeCaseKeys,
} from '../index'

describe('ScreamingSnakeCaseKeys', () => {
  it('shallow', () => {
    type Test = Expect<Equal<{ A_B: { c_d: 1 }}, ScreamingSnakeCaseKeys<{ a_b: { c_d: 1 }}>>>
  })
})
