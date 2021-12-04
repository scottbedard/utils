import { BreakWords } from './BreakWords'
import { Join } from './Join'

/**
 * Convert a string to snake case.
 * 
 * @example
 * type Str = SnakeCase<'fooBar'> // 'foo_bar'
 */
export type SnakeCase<T extends string> = Lowercase<Join<BreakWords<T>, '_'>>
