//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface QueryIngressStreamsRequest {
    /**
     * How many streams to return per page. Defaults to 50, and values above 100
     *  count as 100. A page can contain fewer streams than you asked for.
     */
    pageSize?: number;
    /**
     * To get the next page, pass the `nextPageToken` from the previous response.
     *  Leave it empty for the first page. Send the same filter on every page: the
     *  server rejects a token if the filter changed, or if the token came from
     *  ListIngressStreams.
     */
    pageToken?: string;
    /** Which streams to return. Leave it out to return every stream you can see. */
    filter?: Lattice.IngressStreamFilter;
}
