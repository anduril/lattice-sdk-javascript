//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {}
 */
export interface ListObjectsRequest {
    /** Filters the objects based on the specified prefix path. If no path is specified, all objects are returned. */
    prefix?: string;
    /**
     * Filters out objects whose `last_updated_at` is earlier than this timestamp.
     *
     * `last_updated_at` records when an object arrived on the node that holds it, so this filter selects objects that arrived since the given time. It is not the time the object was authored: a copy that reaches a node later carries the later arrival time.
     */
    sinceTimestamp?: string;
    /** Opaque cursor for continuing the same list request. Start a new listing without the previous cursor if any query parameter or listing scope changes. */
    pageToken?: string;
    /** Lists objects across all environment nodes in a Lattice Mesh. When false or unset, only objects held by the local node are returned. */
    allObjectsInMesh?: boolean;
    /** Sets the maximum number of items that should be returned on a single page. */
    maxPageSize?: number;
}
