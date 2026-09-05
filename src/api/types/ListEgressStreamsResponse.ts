//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface ListEgressStreamsResponse {
    /**
     * The egress streams on this page. Up to `page_size` entries
     *  (defaults to 50, capped at 100). Ordered by egress stream create time.
     */
    egressStreams?: Lattice.EgressStream[] | undefined;
    /**
     * Pass this back as `page_token` to retrieve the next page.
     *  Empty when there are no more pages.
     */
    nextPageToken?: string | undefined;
}
