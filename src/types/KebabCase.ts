
import { BreakWords } from './BreakWords'
import { Join } from './Join'
import { MapLowercase } from './MapLowercase'

/**
 * Convert a string to kebab case.
 * 
 * @example
 * type Str = KebabCase<'fooBar'> // 'foo-bar'
 */
export type KebabCase<T extends string> = Join<MapLowercase<BreakWords<T>>, '-'>
