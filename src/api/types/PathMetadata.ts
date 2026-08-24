//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface PathMetadata {
    content_identifier: Lattice.ContentIdentifier;
    size_bytes: number;
    /**
     * When this object arrived on the node that holds it, according to that node's clock. Because an object is never modified in place, this is effectively the time the object was created on that node.
     *
     * The value is local to the node holding the object and may differ when the same object is held on multiple nodes. It is not propagated from the node where the object originated.
     */
    last_updated_at: string;
    expiry_time?: string | undefined;
}
