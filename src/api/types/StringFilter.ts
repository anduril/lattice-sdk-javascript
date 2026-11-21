//  This file was auto-generated from our API Definition.

/**
 * Matches text, treating upper and lower case as different. Set exactly one of
 *  `exact`, `prefix`, or `contains`, and give it a non-empty value. The server
 *  rejects the request with INVALID_ARGUMENT (HTTP 400) if you set none, more than
 *  one, or an empty value.
 */
export interface StringFilter {
    /**
     * Matches text that is exactly this value. Can't be combined with `prefix` or
     *  `contains`.
     */
    exact?: string | undefined;
    /**
     * Matches text that starts with this value. Can't be combined with `exact` or
     *  `contains`.
     */
    prefix?: string | undefined;
    /**
     * Matches text that includes this value anywhere. Can't be combined with
     *  `exact` or `prefix`.
     */
    contains?: string | undefined;
}
