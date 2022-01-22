/**
 * Create keyed objects from an array.
 */
export function toKeyedObjects<T, U extends number | string | symbol>(arr: T[], key: U): { [Key in U]: T }[] {
  return arr.map(value => ({ [key]: value } as Record<U, T>))
}
