import { 
  Equal,
  Expect,
  Vec,
} from '../index'

describe('Vector', () => {
  it('creates numeric tuple of length T', () => {
    type Test1 = Expect<Equal<[number, number, number], Vec<3>>>
  })

  it('creates non-numeric tuples of length T', () => {
    type Test = Expect<Equal<[string, string, string], Vec<3, string>>>
  })
})
