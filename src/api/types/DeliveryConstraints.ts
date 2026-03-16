//  This file was auto-generated from our API Definition.

/**
 * DeliveryConstraints defines when Lattice should deliver the task to the agent.
 */
export interface DeliveryConstraints {
    /** Optional earliest time the task can attempt to be delivered. */
    deliverAfter?: string | undefined;
    /**
     * The latest time by which the task should be delivered.
     *  If this deadline passes without successful delivery of the task, then the task will time
     *  out with DELIVERY_ERROR_CODE_TIMEOUT.
     *  This field is only required for tasks with retry strategies.
     */
    deliverBefore?: string | undefined;
}
