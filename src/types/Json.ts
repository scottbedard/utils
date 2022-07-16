import { Opaque } from './Opaque'

/**
 * JSON string with encoded type information
 *
 * @example
 * type UserJson = Json<{ email: string }> // string
 * type User = UnrapJson<UserJson> // { email: string }
 */
export type Json<T> = Opaque<string, ['Json', T]>

/**
 * Unwrapped JSON data
 *
 * @example
 * type UserJson = Json<{ email: string }> // string
 * type User = UnrapJson<UserJson> // { email: string }
 */
export type UnwrapJson<T extends Json<any>> = T extends Json<infer U> ? U : never
