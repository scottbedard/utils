import { 
  Equal,
  Expect,
  XOR,
} from '../index'

describe('XOR', ()  => {
  it('acts as a union for primitive types', () => {
    type Test = Expect<Equal<XOR<1, 2>, 1 | 2>>
  })

  it('acts as exclusive or for objects', () => {
    type FooOrBar = XOR<{ foo: number }, { bar: number }>

    const test1: FooOrBar = { foo: 1 }

    const test2: FooOrBar = { bar: 1 }

    // @ts-expect-error
    const test3: FooOrBar = {}

    // @ts-expect-error
    const test4: FooOrBar = { foo: 1, bar: 1 }
  })

  it('exclusive item from tuple', () => {
    type FooBarBaz = XOR<[
      { foo: number },
      { bar: number },
      { baz: number },
      { qux: number, abc: number },
    ]>

    let test: FooBarBaz

    // exclusive item from set
    test = { foo: 1 }
    test = { bar: 1 }
    test = { baz: 1 }
    test = { baz: 1 }

    // @ts-expect-error, missing keys
    test = {}

    // @ts-expect-error, missing secondary key
    test = { qux: 1 }

    // @ts-expect-error, item overlap
    test = { foo: 1, bar: 1 }
  })
})
