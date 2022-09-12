/**
 * Uniform tuple of length `T`, numeric by default
 */
export type Vector<
  T extends number,
  U = number,
  V extends unknown[] = []
> = V['length'] extends T ? V : Vector<T, U, [U, ...V]>
