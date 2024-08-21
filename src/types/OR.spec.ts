import {
  Equal,
  Expect,
  OR,
} from '../index'

it('OR<T, U>', () => {
  type T00 = Expect<Equal<OR<0, 0>, 0>>
  type T01 = Expect<Equal<OR<0, 1>, 1>>
  type T10 = Expect<Equal<OR<1, 0>, 1>>
  type T11 = Expect<Equal<OR<1, 1>, 1>>
})
