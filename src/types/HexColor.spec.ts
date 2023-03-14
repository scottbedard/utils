import {
  Equal,
  Expect,
  HexColor,
} from '../index'

describe('HexColor', () => {
  it('hex color', () => {
    type Pass1 = Expect<Equal<'#abc', HexColor<'#abc'>>>
sa
    type Pass2 = Expect<Equal<'#ff0000', HexColor<'#ff0000'>>>

    type Fail = Expect<Equal<never, HexColor<'not a hex color'>>>
  })

  it('validator', () => {
    const color = <T>(hex: HexColor<T>) => hex

    color('#abc')
  })
})