import {
  PascalCaseKeysDeep,
  Equal,
  Expect,
} from '../index'

describe('PascalCaseKeysDeep', () => {
  it('deep', () => {
    type Actual = PascalCaseKeysDeep<{
      a_b: {
        c_d: Array<{ e_f: any }>
      }
    }>

    type Expected = {
      AB: {
        CD: Array<{ EF: any }>
      }
    }

    type Test = Expect<Equal<Actual, Expected>>
  })
})
