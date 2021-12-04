import {
  Equal,
  Expect,
  Join,
} from '../index'

describe('Join', () => {
  it('no delimeter', () => {
    type Test = Expect<Equal<'abc', Join<['a', 'b', 'c']>>>
  })

  it('empty space delimeter', () => {
    type Test = Expect<Equal<'abc', Join<['a', 'b', 'c'], ''>>>
  })

  it('normal delimeter', () => {
    type Test = Expect<Equal<'a.b.c', Join<['a', 'b', 'c'], '.'>>>
  })

  it('empty parts', () => {
    type Test1 = Expect<Equal<'', Join<[]>>>
    type Test2 = Expect<Equal<'', Join<[], 'whatever'>>>
  })
})