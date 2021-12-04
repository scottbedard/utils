import {
  Equal,
  Expect,
  KebabCase,
} from '../index'

describe('KebabCase', () => {
  it('from camel', () => {
    type Test = Expect<Equal<'foo-bar-baz', KebabCase<'fooBarBaz'>>>
  })

  it('from kebab', () => {
    type Test = Expect<Equal<'foo-bar-baz', KebabCase<'foo-bar-baz'>>>
  })

  it('from pascal', () => {
    type Test = Expect<Equal<'foo-bar-baz', KebabCase<'fooBarBaz'>>>
  })

  it('from screaming snake', () => {
    type Test = Expect<Equal<'foo-bar-baz', KebabCase<'FOO_BAR_BAZ'>>>
  })

  it('from snake', () => {
    type Test = Expect<Equal<'foo-bar-baz', KebabCase<'foo_bar_baz'>>>
  })
})
