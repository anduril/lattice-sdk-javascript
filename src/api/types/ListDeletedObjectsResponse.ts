//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface ListDeletedObjectsResponse {
    deleted_objects: Lattice.DeletedObjectEntry[];
    /** Present when more pages are available. Pass back as `pageToken`. */
    next_page_token?: string | undefined;
}
