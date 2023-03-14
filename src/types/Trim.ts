/**
 * Trim leading and trailing whitespace
 */
export type Trim<T extends string> = T extends ` ${infer U}`
  ? Trim<U>
  : T extends `${infer V} `
    ? Trim<V>
    : T
