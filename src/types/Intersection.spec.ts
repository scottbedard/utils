import { 
  Equal,
  Expect,
  Intersection,
} from '../index'

describe('Intersection', () => {
  type Foo = { a: 1, b: 2 }

  type Bar = { b: 3, c: 4 }

  it('intersects objects', () => {
    type Test = Expect<Equal<{ b: 2 }, Intersection<Foo, Bar>>>
  })
})
