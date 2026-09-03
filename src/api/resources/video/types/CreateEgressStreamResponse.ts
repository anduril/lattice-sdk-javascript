//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../index.js";

export interface CreateEgressStreamResponse {
    /**
     * Service-generated identifier for the new egress stream. Use it for subsequent
     *  `GetEgressStream` and `DeleteEgressStream` calls.
     */
    egressId?: string | undefined;
    rtsp?: Lattice.video.RtspEgress | undefined;
    srt?: Lattice.video.SrtEgress | undefined;
}
