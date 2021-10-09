import { deepEqual } from '..'

describe('deepEqual', () => {
  it('primitives', () => {
    expect(deepEqual('foo', 'foo')).toBe(true)
    expect(deepEqual(1, 1)).toBe(true)
    expect(deepEqual(true, true)).toBe(true)
    expect(deepEqual(null, null)).toBe(true)
  })

  it('arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false)
  })

  it('nested arrays', () => {
    expect(deepEqual([[[1]]], [[[1]]])).toBe(true)
  })

  it('objects', () => {
    expect(deepEqual({ foo: 1, bar: { baz: 2 }}, { foo: 1, bar: { baz: 2 }})).toBe(true)
    expect(deepEqual({ foo: 1, bar: { baz: 2 }}, { foo: 1, bar: { baz: 3 }})).toBe(false)
  })

  it('objects with additional properties', () => {
    expect(deepEqual({ foo: 1, bar: 2 }, { foo: 1 })).toBe(false)
  })

  it('mixed objects and arrays', () => {
    expect(deepEqual({ foo: [{ bar: 1 }] }, { foo: [{ bar: 1 }] })).toBe(true)
    expect(deepEqual({ foo: [{ bar: 1 }] }, { foo: [{ bar: 2 }] })).toBe(false)
  })
})
