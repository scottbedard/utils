import { Json } from '../types/Json'
import { Shift } from '../types/Shift'

/**
 * A type-safe wrapper around JSON.parse().
 *
 * Converts a JavaScript Object Notation (JSON) string into an object.
 *
 * @param text — A valid JSON string.
 * @param reviver
 *
 * A function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
export const parse = <T>(text: T, ...args: Shift<Parameters<typeof JSON.parse>>):
 T extends Json<infer U>
   ? U
   // @ts-ignore, JSON.parse() expects a `string`, but works with `any`
   : T => JSON.parse(text, ...args)

/**
 * A type-safe wrapper around JSON.stringify().
 *
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @param value — A JavaScript value, usually an object or array, to be converted.
 * @param replacer — An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
 * @param space — Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 */
export const stringify = <T>(value: T, ...args: Shift<Parameters<typeof JSON.stringify>>): Json<T> => JSON.stringify(value, ...args) as Json<T>
