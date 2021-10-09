/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Deep object comparison.
 */
export function deepEqual(a: any, b: any): boolean {
  if (a === b) {
    return true
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false
    }

    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) {
        return false
      }
    }

    return true
  }

  if ((typeof a === 'object' && a !== null) && (typeof b === 'object' && b !== null)) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }

    for (const prop in a) {
      if (Object.prototype.hasOwnProperty.call(b, prop)) {
        if (!deepEqual(a[prop], b[prop])) {
          return false
        }
      } else {
        return false
      }
    }
    
    return true
  }
  
  return false
}
