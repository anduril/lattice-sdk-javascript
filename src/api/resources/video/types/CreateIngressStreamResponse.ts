//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../index.js";

export interface CreateIngressStreamResponse {
    /**
     * Identifier of the newly created ingress stream. Echoes the caller-supplied
     *  `ingress_id` if one was provided, otherwise a service-generated GUID.
     */
    ingressId?: string | undefined;
    /**
     * Connection details for an MPEG-TS push. Only returned when MPEG-TS ingress is
     *  enabled for the deployment and the request selected mpeg_ts.
     */
    mpegTs?: Lattice.video.MpegTsIngress | undefined;
    srt?: Lattice.video.SrtIngress | undefined;
}
