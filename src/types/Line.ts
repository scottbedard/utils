import { Vector } from './Vector'

/**
 * Describes a straight line between two vectors of length `T`
 */
export type Line<T extends number> = [Vector<T>, Vector<T>]
