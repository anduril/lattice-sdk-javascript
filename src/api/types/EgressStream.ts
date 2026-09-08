//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * An egress stream publishes a single stream to a downstream consumer over a chosen
 *  transport.
 */
export interface EgressStream {
    /** Service-generated identifier for the egress stream. */
    egressId?: string | undefined;
    /** Identifier of the ingress stream this egress stream publishes. */
    ingressId?: string | undefined;
    rtsp?: Lattice.RtspEgress | undefined;
    srt?: Lattice.SrtEgress | undefined;
}
