import {
  Equal,
  Expect,
  XNOR,
} from '../index'

it('XNOR<T, U>', () => {
  type T00 = Expect<Equal<XNOR<0, 0>, 1>>
  type T01 = Expect<Equal<XNOR<0, 1>, 0>>
  type T10 = Expect<Equal<XNOR<1, 0>, 0>>
  type T11 = Expect<Equal<XNOR<1, 1>, 1>>
})
