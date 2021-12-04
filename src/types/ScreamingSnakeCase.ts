import { BreakWords } from './BreakWords'
import { Join } from './Join'

/**
 * Convert a string to screaming snake case.
 * 
 * @example
 * type Str = ScreamingSnakeCase<'fooBar'> // 'FOO_BAR'
 */
export type ScreamingSnakeCase<T extends string> = Uppercase<Join<BreakWords<T>, '_'>>
