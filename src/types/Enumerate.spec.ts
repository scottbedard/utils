import {
  Enumerate,
  Equal,
  Expect,
} from '../index'

describe('Enumerate', () => {
  it('create enumeration of integers', () => {
    type Test1 = Expect<Equal<0 | 1 | 2 | 3 | 4, Enumerate<5>>>
  })
})