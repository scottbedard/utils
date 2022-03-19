/**
 * Get optional keys from `T`, or make keys `U` of `T` optional
 */
export type OptionalKeys<
  T extends Record<string, unknown>,
  U extends (keyof T) | void = void
> = U extends keyof T
  ? Omit<T, U> & Partial<Pick<T, U>>
  : {
    [K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? K : never
  }[keyof T];