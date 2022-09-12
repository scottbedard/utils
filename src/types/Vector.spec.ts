import { 
  Equal,
  Expect,
  Vector,
} from '../index'

describe('Vector', () => {
  it('creates numeric tuple of length T', () => {
    type Test1 = Expect<Equal<[number, number, number], Vector<3>>>
  })

  it('creates non-numeric tuples of length T', () => {
    type Test = Expect<Equal<[string, string, string], Vector<3, string>>>
  })
})
