import { Vec } from './Vec'

/**
 * Describes a straight line between two vectors of length `T`
 */
export type Line<T extends number> = [Vec<T>, Vec<T>]
