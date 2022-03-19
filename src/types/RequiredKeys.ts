/**
 * Get required keys from `T`, or make keys `U` of `T` required
 */
export type RequiredKeys<
  T extends Record<string, unknown>,
  U extends keyof T | void = void
> = U extends keyof T
  ? Omit<T, U> & Required<Pick<T, U>>
  : {
    [K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? never : K
  }[keyof T];
