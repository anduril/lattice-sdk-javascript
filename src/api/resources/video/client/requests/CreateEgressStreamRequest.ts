//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface CreateEgressStreamRequest {
    /** Identifier of the live ingress stream to re-publish as an egress stream. */
    ingressId?: string;
    rtsp?: Lattice.video.RtspSettings;
    srt?: Lattice.video.SrtSettings;
}
