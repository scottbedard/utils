import {
  Equal,
  Expect,
  Line,
} from '../index'

describe('Line<T>', () => {
  it('describes a straight line between N-dimensional vectors', () => {
    type Test = Expect<Equal<[[number, number], [number, number]], Line<2>>>
  })
})
