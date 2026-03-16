//  This file was auto-generated from our API Definition.

/**
 * Indicators to describe entity to consumers.
 */
export interface Indicators {
    simulated?: boolean | undefined;
    exercise?: boolean | undefined;
    emergency?: boolean | undefined;
    c2?: boolean | undefined;
    /**
     * Indicates the Entity should be egressed to external sources.
     *  Integrations choose how the egressing happens (e.g. if an Entity needs fuzzing).
     */
    egressable?: boolean | undefined;
    /** A signal of arbitrary importance such that the entity should be globally marked for all users */
    starred?: boolean | undefined;
}
