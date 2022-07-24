import { tag } from '../utils'

/**
 * Unwrap an opaque type
 */
export type UnwrapOpaque<T> = T extends { [tag]: [infer U, any] } ? U : never
