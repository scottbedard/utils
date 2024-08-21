import {
  Equal,
  Expect,
  NAND,
} from '../index'

it('NAND<T, U>', () => {
  type T00 = Expect<Equal<NAND<0, 0>, 1>>
  type T01 = Expect<Equal<NAND<0, 1>, 1>>
  type T10 = Expect<Equal<NAND<1, 0>, 1>>
  type T11 = Expect<Equal<NAND<1, 1>, 0>>
})
