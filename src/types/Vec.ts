/**
 * Uniform tuple of length `T`, numeric by default
 */
export type Vec<
  T extends number,
  U = number,
  V extends unknown[] = []
> = V['length'] extends T ? V : Vec<T, U, [U, ...V]>
