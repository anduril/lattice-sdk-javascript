//  This file was auto-generated from our API Definition.

/**
 * Contains status of entities.
 */
export interface Status {
    /**
     * A string that describes the activity that the entity is performing.
     *  Examples include "RECONNAISSANCE", "INTERDICTION", "RETURN TO BASE (RTB)", "PREPARING FOR LAUNCH".
     */
    platformActivity?: string | undefined;
    /** A human-readable string that describes the role the entity is currently performing. E.g. "Team Member", "Commander". */
    role?: string | undefined;
}
