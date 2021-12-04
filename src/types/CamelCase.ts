import { BreakWords } from './BreakWords'
import { Join } from './Join'
import { MapCapitalize } from './MapCapitalize'
import { MapLowercase } from './MapLowercase'

/**
 * Convert a string to camel case.
 * 
 * @example
 * type Str = CamelCase<'foo-bar'> // 'fooBar'
 */
export type CamelCase<T extends string> = Uncapitalize<Join<MapCapitalize<MapLowercase<BreakWords<T>>>>>
