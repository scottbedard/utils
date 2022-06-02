import { PickType } from './PickType'

/**
 * Methods of an object.
 *
 * @example
 * Methods<{ foo: string, bar(): any }> // 'bar'
 */
export type Methods<T extends Record<string, any>> = keyof PickType<T, (...args: any[]) => any>
