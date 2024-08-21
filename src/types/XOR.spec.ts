import {
  Equal,
  Expect,
  XOR,
} from '../index'

it('XOR<T, U>', () => {
  type T00 = Expect<Equal<XOR<0, 0>, 0>>
  type T01 = Expect<Equal<XOR<0, 1>, 1>>
  type T10 = Expect<Equal<XOR<1, 0>, 1>>
  type T11 = Expect<Equal<XOR<1, 1>, 0>>
})
