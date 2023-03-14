import { Byte } from './Byte'
import { Split } from './Split'
import { Trim } from './Trim'

/**
 * RGB color string
 */
export type RgbColor<T> =
  T extends `${'R'|'r'}${'G'|'g'}${'B'|'b'}(${infer RGB})`
    ? Split<RGB, ','> extends [infer R, infer G, infer B]
      ? Trim<R extends string ? R : never> extends `${Byte}`
        ? Trim<G extends string ? G : never> extends `${Byte}`
          ? Trim<B extends string ? B : never> extends `${Byte}`
            ? T
            : never
          : never
        : never
      : never
    : never
