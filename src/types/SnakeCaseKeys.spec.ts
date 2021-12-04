import {
  Equal,
  Expect,
  SnakeCaseKeys,
} from '../index'

describe('SnakeCase', () => {
  it('shallow', () => {
    type Test = Expect<Equal<{ a_b: { cD: 1 }}, SnakeCaseKeys<{ aB: { cD: 1 }}>>>
  })
})
