import { BreakWords } from './BreakWords'
import { Join } from './Join'
import { MapCapitalize } from './MapCapitalize'
import { MapLowercase } from './MapLowercase'

/**
 * Convert a string to pascal case.
 * 
 * @example
 * type Str = PascalCase<'foo-bar'> // 'FooBar'
 */
export type PascalCase<T extends string> = Join<MapCapitalize<MapLowercase<BreakWords<T>>>>
