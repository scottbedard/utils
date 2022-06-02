import {
  Equal,
  Expect,
  Properties,
} from '../index'

describe('Properties', () => {
  it('properties of an object', () => {
    type Test = Expect<Equal<Properties<{ foo: string, bar(a: string): any }>, 'foo'>>
  })
})
