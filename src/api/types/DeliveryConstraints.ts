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
    /**
     * Requires the agent to acknowledge the request before Lattice considers it delivered.
     *  Without this, a request sent over a streaming agent connection is marked delivered as soon
     *  as the send returns, which only proves it reached a local buffer and not that the agent
     *  received it. With this set, the task is not marked delivered until the agent reports a
     *  status confirming receipt; Lattice re-sends until it does, and eventually fails delivery
     *  with DELIVERY_ERROR_CODE_NOT_ACKNOWLEDGED. Requires deliver_before, which bounds that
     *  retrying.
     */
    requireAcknowledgement?: boolean | undefined;
}
