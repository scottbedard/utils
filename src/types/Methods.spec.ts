import {
  Equal,
  Expect,
  Methods,
} from '../index'

describe('Methods', () => {
  it('methods of an object', () => {
    type Test = Expect<Equal<Methods<{ foo: string, bar(one: string): number }>, 'bar'>>
  })
})
