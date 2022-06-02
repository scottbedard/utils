import { OmitType } from './OmitType'

/**
 * Properties of an object.
 *
 * @example
 * Properties<{ foo: string, bar(): any }> // 'foo'
 */
export type Properties<T extends Record<string, any>> = keyof OmitType<T, (...args: any[]) => any>
