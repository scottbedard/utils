import {
  Equal,
  Expect,
  MapLowercase,
} from '../index'

describe('MapLowercase', () => {
  it('maps strings to lowercase', () => {
    type Test = Expect<Equal<['a', 'b'], MapLowercase<['A', 'B']>>>
  })
})
