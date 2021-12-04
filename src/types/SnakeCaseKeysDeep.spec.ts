import {
  SnakeCaseKeysDeep,
  Equal,
  Expect,
} from '../index'

describe('SnakeCaseKeysDeep', () => {
  it('deep', () => {
    type Actual = SnakeCaseKeysDeep<{
      aB: {
        cD: Array<{ eF: any }>
      }
    }>

    type Expected = {
      a_b: {
        c_d: Array<{ e_f: any }>
      }
    }

    type Test = Expect<Equal<Actual, Expected>>
  })
})
