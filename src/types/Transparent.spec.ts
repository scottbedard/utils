import {
  Equal,
  Expect,
  Opaque,
  Transparent,
} from '../index'

describe('Transparent', () => {
  it('pass', () => {
    const foo = 5
    const bar = 5 as Opaque<number, 'Bar'>
    const baz = 'hello'

    // create a function that only accepts transparent numbers
    const handle = (n: Transparent<number>) => {
      // ...
    }

    // foo should pass
    handle(foo)

    // bar should error since it is opaque
    // @ts-expect-error
    handle(bar)

    // baz should fail because it's the wrong primitive type
    // @ts-expect-error
    handle(baz)
  })
})