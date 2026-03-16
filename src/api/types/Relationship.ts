//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The relationship component indicates a relationship to another entity.
 */
export interface Relationship {
    /** The entity ID to which this entity is related. */
    relatedEntityId?: string | undefined;
    /** A unique identifier for this relationship. Allows removing or updating relationships. */
    relationshipId?: string | undefined;
    /** The relationship type */
    relationshipType?: Lattice.RelationshipType | undefined;
}
