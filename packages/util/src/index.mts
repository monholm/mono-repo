export function isNonNullable<T>(x: T): x is NonNullable<T> {
  return x !== null && x !== undefined;
}
