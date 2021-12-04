/**
 * Remove the last element of `T`.
 * 
 * @example
 * type Items = Pop<['foo', 'bar', 'baz']> // ['foo', 'bar']
 */
export type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : []
