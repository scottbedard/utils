import {
  Expect,
  Not,
  StartsWith,
} from '../index'

describe('StartsWith', () => {
  it('types true with string starts with other string', () => {
    type Test = Expect<StartsWith<'FooBar', 'Foo'>>
  })

  it('types false when string does not start with other string', () => {
    type Test = Expect<Not<StartsWith<'FooBar', 'Hello'>>>
  })
})
