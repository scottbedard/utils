import { tag } from '../utils'

/**
 * Unwrap an opaque type
 */
export type UnwrapOpaque<T> = T extends { [tag]: any; opaque: infer V } ? V : never
