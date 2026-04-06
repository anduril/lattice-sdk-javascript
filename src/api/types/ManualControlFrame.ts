//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * A single frame of manual control input forwarded by Lattice to an agent.
 *
 *  When an operator sends manual control input, for example, joystick movements using
 *  `SendManualControlFrames`, Lattice packages each input into a `ManualControlFrame`
 *  and forwards it to the executing agent via the `ListenForManualControlFrames`
 *  streaming RPC.
 *
 *  Each frame carries sequencing metadata to support concurrent control sessions,
 *  detect stale frames, and ensure proper ordering.
 */
export interface ManualControlFrame {
    /** The ID of the manual control task this frame belongs to. */
    taskId?: string | undefined;
    /**
     * Unix timestamp in microseconds identifying the control session.
     *  Increments each time a client opens a new stream for this task.
     *  Agents should ignore frames with a lower epoch to handle stale streams
     *  or operator handoffs.
     */
    epochMicros?: string | undefined;
    /**
     * The sequence number for a stream, incremented for each frame.
     *  Agents can use this to detect out-of-order delivery within the same epoch.
     */
    sequence?: string | undefined;
    /**
     * The time at which this frame was created.
     *  Agents can use this to detect stale frame data.
     */
    creationTime?: string | undefined;
    /**
     * The control instructions for this frame, passed through from the client.
     *  The format of each task is specific to the task, and not visible to Lattice.
     */
    specification?: Lattice.GoogleProtobufAny | undefined;
}
