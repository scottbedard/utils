import {
  CamelCase,
  Equal,
  Expect,
} from '../index'

describe('CamelCase', () => {
  it('from camel', () => {
    type Test = Expect<Equal<'fooBarBaz', CamelCase<'fooBarBaz'>>>
  })

  it('from kebab', () => {
    type Test = Expect<Equal<'fooBarBaz', CamelCase<'foo-bar-baz'>>>
  })

  it('from pascal', () => {
    type Test = Expect<Equal<'fooBarBaz', CamelCase<'fooBarBaz'>>>
  })

  it('from screaming snake', () => {
    type Test = Expect<Equal<'fooBarBaz', CamelCase<'FOO_BAR_BAZ'>>>
  })

  it('from snake', () => {
    type Test = Expect<Equal<'fooBarBaz', CamelCase<'foo_bar_baz'>>>
  })
})
