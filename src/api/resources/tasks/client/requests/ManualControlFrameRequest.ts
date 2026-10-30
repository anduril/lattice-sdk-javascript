//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../../index.js";

/**
 * @example
 *     {
 *         taskId: "taskId",
 *         sessionEpochMicros: "sessionEpochMicros"
 *     }
 */
export interface ManualControlFrameRequest {
    /** The ID of the manual control task to send the frame for. */
    taskId: string;
    /**
     * Unix timestamp in microseconds identifying the control session. The client generates this
     * value when it begins a control session, and includes the same value in every request for
     * that session. Higher values replace previous sessions. Lower values are rejected as stale.
     */
    sessionEpochMicros: string;
    /**
     * The sequence number of this frame within the current session. The client must increase it
     * with each frame so that agents can detect out-of-order delivery. Reset it to 1 when starting a
     * new session.
     */
    sequence?: string;
    /**
     * The control instructions for this frame. The format is specific to the task, and is passed
     * through to the agent without being inspected by Lattice.
     */
    specification?: Lattice.GoogleProtobufAny;
}
