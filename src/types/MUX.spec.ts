import {
  Equal,
  Expect,
  MUX,
} from '../index'

it('MUX<T, U, S>', () => {
  type T000 = Expect<Equal<MUX<0, 0, 0>, 0>>
  type T001 = Expect<Equal<MUX<0, 0, 1>, 0>>
  type T010 = Expect<Equal<MUX<0, 1, 0>, 0>>
  type T011 = Expect<Equal<MUX<0, 1, 1>, 1>>
  type T100 = Expect<Equal<MUX<1, 0, 0>, 1>>
  type T101 = Expect<Equal<MUX<1, 0, 1>, 0>>
  type T110 = Expect<Equal<MUX<1, 1, 0>, 1>>
  type T111 = Expect<Equal<MUX<1, 1, 1>, 1>>
})
