import {
  BreakWords,
  Equal,
  Expect,
} from '../index'

describe('BreakWords', () => {
  it('explodes a string into parts', () => {
    type Test = Expect<
      Equal<
        ['one', 'two', 'three', 'four', 'Five', 'SIX', 'SEVEN'],
        BreakWords<'one two-three_fourFiveSIX_SEVEN'>
      >
    >
  })
})