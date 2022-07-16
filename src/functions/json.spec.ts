import {
  Equal,
  Expect,
  parse,
  stringify,
} from '../index'

describe('json', () => {
  it('parse', () => {
    const str = '{"foo":"bar"}'

    expect(parse(str)).toEqual(JSON.parse(str))
  })

  it('stringify', () => {
    const obj = { foo: 'bar' }

    expect(stringify(obj)).toEqual(JSON.stringify(obj))
  })

  it('uses json types to maintain type safety', () => {
    const json = stringify({ foo: 'bar' })

    const obj = parse(json)

    type Test = Expect<Equal<typeof obj, { foo: string }>>
  })
})
