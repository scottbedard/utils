import { keys, Expect, Equal } from '../index'

describe('keys', () => {
  it('returns typed object keys', () => {
    const obj = { foo: 1, bar: 2 }

    const output = keys(obj)

    expect(output).toEqual(Object.keys(obj))

    type Test = Expect<Equal<('foo' | 'bar')[], typeof output>>
  })
})
