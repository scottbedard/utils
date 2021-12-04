
import {
  CamelCaseKeysDeep,
  Equal,
  Expect,
} from '../index'

describe('CamelCaseKeys', () => {
  it('deep', () => {
    type Actual = CamelCaseKeysDeep<{
      a_b: {
        c_d: Array<{ e_f: any }>
      }
    }>

    type Expected = {
      aB: {
        cD: Array<{ eF: any }>
      }
    }

    type Test = Expect<Equal<Actual, Expected>>
  })
})