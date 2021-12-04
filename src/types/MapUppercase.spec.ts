import {
  Equal,
  Expect,
  MapUppercase,
} from '../index'

describe('MapUppercase', () => {
  it('maps strings to uppercase', () => {
    type Test = Expect<Equal<['A', 'B'], MapUppercase<['a', 'b']>>>
  })
})
