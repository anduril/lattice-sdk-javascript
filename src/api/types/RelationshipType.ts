//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Determines the type of relationship between this entity and another.
 */
export interface RelationshipType {
    trackedBy?: Lattice.TrackedBy | undefined;
    groupChild?: Lattice.GroupChild | undefined;
    groupParent?: Lattice.GroupParent | undefined;
    mergedFrom?: Lattice.MergedFrom | undefined;
    activeTarget?: Lattice.ActiveTarget | undefined;
}
