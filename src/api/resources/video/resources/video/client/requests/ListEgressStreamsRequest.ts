//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {}
 */
export interface ListEgressStreamsRequest {
    /**
     * Desired number of egress streams per page. Defaults to 50 if left blank,
     *  and capped at 100. The response may contain fewer than max page size.
     */
    pageSize?: number;
    /**
     * To retrieve the next page, pass the `next_page_token` from the previous
     *  response. Leave empty for the first page.
     *
     *  Keep the rest of the request identical between pages, otherwise the
     *  server may reject it.
     */
    pageToken?: string;
}
