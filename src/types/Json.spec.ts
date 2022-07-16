import {
  Equal,
  Expect,
  Json,
  UnwrapJson,
} from '../index'

describe('Json / UnwrapJson', () => {
  it('encodes and decodes json data', () => {
    type User = { email: string }

    type UserJson = Json<User>

    type Test1 = Expect<UserJson extends string ? true : false>

    type Test2 = Expect<Equal<User, UnwrapJson<UserJson>>>
  })

  it('creates a type error for invalid strings', () => {
    // @ts-expect-error
    type Test = UnwrapJson<'non json string'>
  })
})
