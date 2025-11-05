/**
 * Base64Url according to [RFC 4648 section 5](https://datatracker.ietf.org/doc/html/rfc4648#section-5)
 *
 * This is essentially the same as standard base64, but with the following changes:
 * - `+` is replaced with `-`
 * - `/` is replaced with `_`
 * - `=` padding is omitted
 *
 * which makes it safe to use in URLs.
 *
 * **Note: The regexp doesn't ensure that the string decodes to anything meaningful.
 * It only checks that only valid Base64Url characters are present.
 */
export const base64UrlRegExp = /^[a-zA-Z0-9_-]+$/;
