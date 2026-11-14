//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Response for QueryIngressStreams.
 */
export interface QueryIngressStreamsResponse {
    /**
     * Up to `pageSize` streams, newest first. Streams created through this API come
     *  first, then streams discovered on the mesh, and each group starts with its
     *  newest stream.
     */
    ingressStreams?: Lattice.IngressStream[] | undefined;
    /**
     * Pass this back as `pageToken` to get the next page. Empty when there are no
     *  more pages.
     */
    nextPageToken?: string | undefined;
}
