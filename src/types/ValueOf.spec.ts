import {
  Equal,
  Expect,
  ValueOf,
} from '../index'

describe('ValueOf', () => {
  it('array', () => {
    type T = Array<number | string>
    
    type Test = Expect<Equal<number | string, ValueOf<T>>>
  })

  it('object', () => {
    type T = { foo: number, bar: string };

    type Test = Expect<Equal<number | string, ValueOf<T>>>
  })
})
