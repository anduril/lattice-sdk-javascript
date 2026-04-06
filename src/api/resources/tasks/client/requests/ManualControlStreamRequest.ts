//  This file was auto-generated from our API Definition.

/**
 * @example
 *     {
 *         taskId: "taskId"
 *     }
 */
export interface ManualControlStreamRequest {
    /** The ID of the manual control task to receive frames for. */
    taskId: string;
    /** The time interval, in milliseconds, that determines the frequency at which to send heartbeat events. Defaults to 30000 (30 seconds). */
    heartbeatIntervalMs?: number;
}
