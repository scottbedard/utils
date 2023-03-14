import { Hex } from './Hex'

/**
 * Hexadecimal color string
 */
export type HexColor<T> =
  T extends `#${Hex}${infer R1}`
    ? R1 extends `${Hex}${infer R2}`
      ? R2 extends `${Hex}${infer R3}`
        ? R3 extends ''
          ? T
          : R3 extends `${Hex}${infer R4}`
            ? R4 extends `${Hex}${infer R5}`
              ? R5 extends Hex
                ? T
                : never
              : never
            : never
        : never
      : never
    : never
