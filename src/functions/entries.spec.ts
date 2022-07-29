import { entries, Expect, Equal } from '../index'

describe('entries', () => {
  it('returns typed object entries', () => {
    const obj = { foo: 1, bar: 2 }
    const output = entries(obj)

    expect(output).toEqual(Object.entries(obj))

    type Test = Expect<Equal<['foo' | 'bar', number][], typeof output>>
  })
})
