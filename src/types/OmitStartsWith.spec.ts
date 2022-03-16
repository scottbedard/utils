import {
  Equal,
  Expect,
  OmitStartsWith,
} from '../index'

describe('PickType', () => {
  it('picks keys that start with string', () => {
    type Foo = OmitStartsWith<{
      FooOne: void
      FooTwo: void
      BarThree: void
    }, 'Bar'>

    type Test = Expect<Equal<Foo, { FooOne: void; FooTwo: void }>>
  })
})
