//  This file was auto-generated from our API Definition.

/**
 * System Principal representing some autonomous system.
 */
export interface System {
    /** Name of the service associated with this System. */
    serviceName?: string | undefined;
    /** The Entity ID of the System. */
    entityId?: string | undefined;
    /**
     * Whether the System Principal (for example, an Asset) can own scheduling.
     *  This means we bypass manager-owned scheduling and defer to the system
     *  Principal to handle scheduling and give us status updates for the task.
     *  Regardless of the value defined by the client, the Task Manager will
     *  determine and set this value appropriately.
     */
    managesOwnScheduling?: boolean | undefined;
}
