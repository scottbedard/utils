import {
  Equal,
  Expect,
  SnakeCase,
} from '../index'

describe('SnakeCase', () => {
  it('from camel', () => {
    type Test = Expect<Equal<'foo_bar_baz', SnakeCase<'fooBarBaz'>>>
  })

  it('from kebab', () => {
    type Test = Expect<Equal<'foo_bar_baz', SnakeCase<'foo-bar-baz'>>>
  })

  it('from pascal', () => {
    type Test = Expect<Equal<'foo_bar_baz', SnakeCase<'fooBarBaz'>>>
  })

  it('from screaming snake', () => {
    type Test = Expect<Equal<'foo_bar_baz', SnakeCase<'FOO_BAR_BAZ'>>>
  })

  it('from snake', () => {
    type Test = Expect<Equal<'foo_bar_baz', SnakeCase<'foo_bar_baz'>>>
  })
})
