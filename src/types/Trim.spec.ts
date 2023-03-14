import {
  Equal,
  Expect,
  Trim,
} from '../index'

describe('Trim<T>', () => {
  it('trims leading and trailing whitespace', () => {
    type T1 = Expect<Equal<'foo', Trim<' foo '>>>
  })
})
