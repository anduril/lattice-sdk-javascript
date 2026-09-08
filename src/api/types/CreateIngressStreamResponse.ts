//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface CreateIngressStreamResponse {
    /**
     * Identifier of the newly created ingress stream. Echoes the caller-supplied
     *  `ingress_id` if one was provided, otherwise a service-generated GUID.
     */
    ingressId?: string | undefined;
    /**
     * Connection details for an MPEG-TS push. Only returned when the request selected
     *  mpeg_ts and MPEG-TS ingress is enabled for the deployment. MPEG-TS ingress is
     *  supported only at the edge, in closed networks; in a cloud environment reached over
     *  the public internet it may be disabled per deployment, in which case the create
     *  request is rejected and this field is never populated.
     */
    mpegTs?: Lattice.MpegTsIngress | undefined;
    srt?: Lattice.SrtIngress | undefined;
}
