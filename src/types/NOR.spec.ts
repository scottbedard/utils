import {
  Equal,
  Expect,
  NOR,
} from '../index'

it('NOR<T, U>', () => {
  type T00 = Expect<Equal<NOR<0, 0>, 1>>
  type T01 = Expect<Equal<NOR<0, 1>, 0>>
  type T10 = Expect<Equal<NOR<1, 0>, 0>>
  type T11 = Expect<Equal<NOR<1, 1>, 0>>
})
