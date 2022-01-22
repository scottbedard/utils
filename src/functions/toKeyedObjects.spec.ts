import { Expect, Equal, toKeyedObjects } from '../index'

describe('toKeyedObjects', () => {
  it('creates objects with key', () => {
    const output = toKeyedObjects([1, 2, 3], 'foo')

    expect(output).toEqual([
      { foo: 1 },
      { foo: 2 },
      { foo: 3 },
    ])
  })

  it('returns a strongly typed array of keyed objects', () => {
    const output = toKeyedObjects([1, 2, 3], 'foo')

    type Test = Expect<Equal<typeof output, { foo: number }[]>>
  })
})