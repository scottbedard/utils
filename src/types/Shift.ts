/**
 * Remove the first element of `T`.
 * 
 * @example
 * type Tail = Shift<['foo', 'bar', 'baz']> // ['bar', 'baz']
 */
export type Shift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : []
