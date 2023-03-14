import {
  Equal,
  Expect,
  RgbColor,
} from '../index'

describe('RgbColor', () => {
  it('rgb values', () => {
    type P1 = Expect<Equal<'rgb(0, 0, 0)', RgbColor<'rgb(0, 0, 0)'>>>
    type P2 = Expect<Equal<'rgb(255, 255, 255)', RgbColor<'rgb(255, 255, 255)'>>>

    type F1 = Expect<Equal<never, RgbColor<'rgb(invalid)'>>>
  })

  it('validator', () => {
    const rgb = <T>(color: RgbColor<T>) => color

    rgb('rgb(0, 0, 0)')

    // @ts-expect-error
    rgb('invalid')
  })
})