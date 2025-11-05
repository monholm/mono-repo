export function isNonNullable<T>(x: T): x is NonNullable<T> {
  return x !== null && x !== undefined;
}

export function isObject(x: unknown): x is Record<PropertyKey, unknown> {
  return x !== null && typeof x === 'object';
}

/**
 * Returns the first key in an object with the given value.
 *
 * **Note: Compares by reference for non-primitive values.**
 */
export function getObjectKeyByValue<T extends object>(
  object: T,
  value: unknown,
): keyof T | undefined {
  for (const [key, val] of Object.entries(object)) {
    if (val === value) {
      return key as keyof T;
    }
  }
  return undefined;
}

/**
 * Asserts that the given value is an unknown array.
 * Use this instead of Array.isArray to avoid the unsafe any type.
 */
export function isArray(x: unknown): x is unknown[] {
  return Array.isArray(x);
}

/**
 * Parse a string as JSON
 * Use this instead of JSON.parse to avoid the unsafe any type.
 */
export function jsonParse(x: string): unknown {
  return JSON.parse(x);
}
