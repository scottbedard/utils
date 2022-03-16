import {
  Equal,
  Expect,
  PickStartsWith,
} from '../index'

describe('PickType', () => {
  it('picks keys that start with string', () => {
    type Foo = PickStartsWith<{
      FooOne: void
      FooTwo: void
      BarThree: void
    }, 'Foo'>

    type Test = Expect<Equal<Foo, { FooOne: void; FooTwo: void }>>
  })
})
