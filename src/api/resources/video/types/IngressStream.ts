//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../index.js";

/**
 * An ingress stream represents a single source feeding frames into Lattice.
 *  Ingress streams are replicated across Lattice and visible anywhere in the deployment.
 */
export interface IngressStream {
    /** Unique identifier for the ingress stream. */
    ingressId?: string | undefined;
    /** Human-readable title supplied at creation time. */
    title?: string | undefined;
    /** Current lifecycle status of the stream. See StreamStatus for the full state machine. */
    status?: IngressStream.Status | undefined;
    mpegTs?: Lattice.video.MpegTsIngress | undefined;
    rtsp?: Lattice.video.RtspIngress | undefined;
    srt?: Lattice.video.SrtIngress | undefined;
    /** Wall-clock time the stream was created. */
    createdAt?: string | undefined;
    /**
     * Wall-clock time the stream's status (STREAM_STATUS) was changed. The status can change based on the activity or
     *  the deletion of the stream.
     */
    updatedAt?: string | undefined;
    /** Identifiers of the egress streams currently consuming this ingress stream. */
    egressIds?: string[] | undefined;
}

export namespace IngressStream {
    /** Current lifecycle status of the stream. See StreamStatus for the full state machine. */
    export const Status = {
        StreamStatusUnspecified: "STREAM_STATUS_UNSPECIFIED",
        StreamStatusLive: "STREAM_STATUS_LIVE",
        StreamStatusInactive: "STREAM_STATUS_INACTIVE",
        StreamStatusUnavailable: "STREAM_STATUS_UNAVAILABLE",
        StreamStatusArchived: "STREAM_STATUS_ARCHIVED",
    } as const;
    export type Status = (typeof Status)[keyof typeof Status];
}
