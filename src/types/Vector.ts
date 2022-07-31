/**
 * Numeric tuple of size `T`
 */
export type Vector<
  T extends number,
  U extends unknown[] = []
> = U['length'] extends T ? U : Vector<T, [number, ...U]>
