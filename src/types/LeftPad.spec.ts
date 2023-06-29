import {
  Equal,
  Expect,
  LeftPad,
} from '../index'

describe('LeftPad<T, U, Character>', () => {
  it('empty', () => {
    type T1 = Expect<Equal<[], LeftPad<[], 0>>>
    type T2 = Expect<Equal<[unknown], LeftPad<[], 1>>>
  })

  it('longer than padding', () => {
    type T1 = Expect<Equal<[1, 2, 3], LeftPad<[1, 2, 3], 1>>>
  })

  it('shorter than padding', () => {
    type T1 = Expect<Equal<['x', 1, 2, 3], LeftPad<[1, 2, 3], 4, 'x'>>>
    type T2 = Expect<Equal<['x', 'x', 1, 2, 3], LeftPad<[1, 2, 3], 5, 'x'>>>
  })
})