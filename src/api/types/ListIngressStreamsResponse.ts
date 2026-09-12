//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface ListIngressStreamsResponse {
    /**
     * The ingress streams on this page. Up to `pageSize` entries
     *  (defaults to 50, capped at 100). Ordered by ingress stream create time.
     */
    ingressStreams?: Lattice.IngressStream[] | undefined;
    /**
     * Pass this back as `pageToken` to retrieve the next page.
     *  Empty when there are no more pages.
     */
    nextPageToken?: string | undefined;
}
