import {
  Equal,
  Expect,
  PascalCase,
} from '../index'

describe('PascalCase', () => {
  it('from camel', () => {
    type Test = Expect<Equal<'FooBarBaz', PascalCase<'fooBarBaz'>>>
  })

  it('from kebab', () => {
    type Test = Expect<Equal<'FooBarBaz', PascalCase<'foo-bar-baz'>>>
  })

  it('from pascal', () => {
    type Test = Expect<Equal<'FooBarBaz', PascalCase<'fooBarBaz'>>>
  })

  it('from screaming snake', () => {
    type Test = Expect<Equal<'FooBarBaz', PascalCase<'FOO_BAR_BAZ'>>>
  })

  it('from snake', () => {
    type Test = Expect<Equal<'FooBarBaz', PascalCase<'foo_bar_baz'>>>
  })
})
