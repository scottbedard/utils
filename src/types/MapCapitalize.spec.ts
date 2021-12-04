import {
  Equal,
  Expect,
  MapCapitalize,
} from '../index'

describe('MapCapitalize', () => {
  it('capitalizes each string', () => {
    type Test = Expect<Equal<['Foo', 'Bar'], MapCapitalize<['foo', 'bar']>>>
  })
})
