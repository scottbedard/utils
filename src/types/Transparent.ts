import { tag } from '../utils'

/**
 * Transparent type `T` that does not encode additional information.
 */
export type Transparent<T> = T & { [tag]?: never }
