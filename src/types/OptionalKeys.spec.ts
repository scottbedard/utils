import {
  Equal,
  Expect,
  OptionalKeys,
  RequiredKeys,
} from '../index'

describe('RequiredKeys', () => {
  it('creates a union of optional keys', () => {
    type Actual = OptionalKeys<{ foo?: any; bar?: any; baz: any }>
    
    type Test = Expect<Equal<Actual, 'foo' | 'bar'>>
  })

  it('makes required keys optional', () => {
    type Actual = OptionalKeys<{ foo?: any; bar: any; baz: any }, 'bar'>

    type Test1 = Expect<Equal<OptionalKeys<Actual>, 'foo' | 'bar'>>

    type Test2 = Expect<Equal<RequiredKeys<Actual>, 'baz'>>
  })
})
