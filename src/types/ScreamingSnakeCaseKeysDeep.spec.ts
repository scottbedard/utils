import {
  Equal,
  Expect,
  ScreamingSnakeCaseKeysDeep,
} from '../index'

describe('ScreamingSnakeCaseKeysDeep', () => {
  it('deep', () => {
    type Actual = ScreamingSnakeCaseKeysDeep<{
      a_b: {
        c_d: Array<{ e_f: any }>
      }
    }>

    type Expected = {
      A_B: {
        C_D: Array<{ E_F: any }>
      }
    }

    type Test = Expect<Equal<Actual, Expected>>
  })
})
