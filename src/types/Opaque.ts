import { tag } from '../utils'

/**
 * Opaque type `T` that encodes `Token`.
 */
export type Opaque<T, Token> = T & { [tag]: Token }
