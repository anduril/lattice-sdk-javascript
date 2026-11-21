//  This file was auto-generated from our API Definition.

/**
 * Matches streams by who created them. Set exactly one option. The server rejects
 *  the request with INVALID_ARGUMENT (HTTP 400) if you set none.
 */
export interface CreatorFilter {
    /**
     * Set to true to return only streams you created, or false to return only
     *  streams you didn't create. Requires valid credentials. When you set it,
     *  each stream's `egressIds` lists only your own egress sessions.
     */
    owned?: boolean | undefined;
}
