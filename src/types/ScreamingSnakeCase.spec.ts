import {
  Equal,
  Expect,
  ScreamingSnakeCase,
} from '../index'

describe('ScreamingSnakeCase', () => {
  it('from camel', () => {
    type Test = Expect<Equal<'FOO_BAR_BAZ', ScreamingSnakeCase<'fooBarBaz'>>>
  })

  it('from kebab', () => {
    type Test = Expect<Equal<'FOO_BAR_BAZ', ScreamingSnakeCase<'foo-bar-baz'>>>
  })

  it('from pascal', () => {
    type Test = Expect<Equal<'FOO_BAR_BAZ', ScreamingSnakeCase<'fooBarBaz'>>>
  })

  it('from screaming snake', () => {
    type Test = Expect<Equal<'FOO_BAR_BAZ', ScreamingSnakeCase<'FOO_BAR_BAZ'>>>
  })

  it('from snake', () => {
    type Test = Expect<Equal<'FOO_BAR_BAZ', ScreamingSnakeCase<'foo_bar_baz'>>>
  })
})