import { 
  Equal,
  Expect,
  Vector,
} from '../index'

describe('Vector', () => {
  it('creates a numeric tuple of size T', () => {
    type Test1 = Expect<Equal<[number, number, number], Vector<3>>>
  })
})
