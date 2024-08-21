import {
  AND,
  Equal,
  Expect,
} from '../index'

it('AND<T, U>', () => {
  type T00 = Expect<Equal<AND<0, 0>, 0>>
  type T01 = Expect<Equal<AND<0, 1>, 0>>
  type T10 = Expect<Equal<AND<1, 0>, 0>>
  type T11 = Expect<Equal<AND<1, 1>, 1>>
})