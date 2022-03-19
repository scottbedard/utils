import {
  Equal,
  Expect,
  OptionalKeys,
  RequiredKeys,
} from '../index'

describe('RequiredKeys', () => {
  it('creates a union of optional keys', () => {
    type Actual = RequiredKeys<{ foo?: any; bar: any; baz: any }>
    
    type Test = Expect<Equal<Actual, 'bar' | 'baz'>>
  })

  it('makes optional keys required', () => {
    type Actual = RequiredKeys<{ foo?: any; bar?: any; baz: any }, 'foo'>

    type Test1 = Expect<Equal<RequiredKeys<Actual>, 'foo' | 'baz'>>

    type Test2 = Expect<Equal<OptionalKeys<Actual>, 'bar'>>
  })
})
