import { 
  Equal,
  Expect,
  Split,
} from '../index'

describe('Split', () => {
  it('string delimeter', () => {
    type Test = Expect<Equal<['a', 'b', 'c'], Split<'a-b-c', '-'>>>
  })

  it('no delimeter', () => {
    type Test = Expect<Equal<['a', 'b', 'c'], Split<'abc'>>>
  })

  it('empty delimeter', () => {
    type Test = Expect<Equal<['a', 'b', 'c'], Split<'abc', ''>>>
  })

  it('multiple delimers', () => {
    type Test = Expect<Equal<['a', 'b', 'c'], Split<'a.b-c', ['.', '-']>>>
  })
})