import {
  Equal,
  Expect,
  Opaque,
  UnwrapOpaque,
} from '../index'

describe('UnwrapOpaque', () => {
  it('primitive', () => {
    type Foo = Opaque<string, 'foo'>

    type Test = Expect<Equal<string, UnwrapOpaque<Foo>>>
  })

  it('record', () => {
    type Foo = Opaque<{ hello: number }, 'foo'>

    type Test = Expect<Equal<{ hello: number }, UnwrapOpaque<Foo>>>
  })

  it('invalid', () => {
    type Test = Expect<Equal<never, UnwrapOpaque<string>>>
  })
})