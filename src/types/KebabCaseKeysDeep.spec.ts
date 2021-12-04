import {
  KebabCaseKeysDeep,
  Equal,
  Expect,
} from '../index'

describe('KebabCaseKeys', () => {
  it('deep', () => {
    type Actual = KebabCaseKeysDeep<{
      a_b: {
        c_d: Array<{ e_f: any }>
      }
    }>

    type Expected = {
      'a-b': {
        'c-d': Array<{ 'e-f': any }>
      }
    }

    type Test = Expect<Equal<Actual, Expected>>
  })
})
