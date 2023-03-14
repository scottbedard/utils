import {
  Equal,
  Expect,
  HexColor,
} from '../index'

describe('HexColor', () => {
  it('hex color', () => {
    type P1 = Expect<Equal<'#abc', HexColor<'#abc'>>>
    type P2 = Expect<Equal<'#ff0000', HexColor<'#ff0000'>>>

    type F1 = Expect<Equal<never, HexColor<'invalid'>>>
  })

  it('validator', () => {
    const color = <T>(hex: HexColor<T>) => hex

    color('#abc')
  })
})