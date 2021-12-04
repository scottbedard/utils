import { 
  Equal,
  Expect,
  Without,
} from '../index'

describe('Without', () => {
  type Foo = { a: any, b: any }

  type Bar = { b: any, c: any }

  it('prohibits object properties', () => {
    type Test1 = Expect<Equal<{ a?: never }, Without<Foo, Bar>>>
  })
})
