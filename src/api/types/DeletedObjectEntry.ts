//  This file was auto-generated from our API Definition.

export interface DeletedObjectEntry {
    /**
     * Object path that was deleted on this node.
     * A valid path must not contain the following:
     * - Spaces or Tabs
     * - Special characters other than underscore (_), dash (-), period (.) and slash (/)
     * - Non-ASCII characters such as accents or symbols
     * Paths must not start with a leading space.
     */
    path: string;
    /** The SHA-256 checksum of this object. */
    checksum: string;
    /** Wall-clock time at which the deletion was initiated on this node. */
    deleted_at: string;
}
