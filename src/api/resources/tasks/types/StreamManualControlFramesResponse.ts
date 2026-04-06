//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../index.js";

/**
 * The stream event response.
 */
export type StreamManualControlFramesResponse =
    | Lattice.StreamManualControlFramesResponse.Heartbeat
    | Lattice.StreamManualControlFramesResponse.ManualControlFrame;

export namespace StreamManualControlFramesResponse {
    export interface Heartbeat extends Lattice.StreamHeartbeat {
        event: "heartbeat";
    }

    export interface ManualControlFrame extends Lattice.ManualControlFrameEvent {
        event: "manual_control_frame";
    }
}
