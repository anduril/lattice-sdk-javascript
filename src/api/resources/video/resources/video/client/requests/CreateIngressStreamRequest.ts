//  This file was auto-generated from our API Definition.

import type * as Lattice from "../../../../../../index.js";

/**
 * @example
 *     {}
 */
export interface CreateIngressStreamRequest {
    /**
     * Caller-supplied identifier for the new stream. If omitted, the service generates a GUID.
     *  If supplied, a consistent and recognizable pattern is recommended. A common convention
     *  is a group prefix (organization, platform, or asset) followed by a specific identifier
     *  using underscore or dot as a separator, for example, `drone_1`, `vessel_2`, or
     *  `teamalpha.drone1`.
     *
     *  When supplied, an ingress_id must be between 4 and 36 characters long and use only
     *  printable ASCII characters with no spaces; the 36-character ceiling leaves room for a
     *  full GUID. A value outside that length range, or one containing spaces, control
     *  characters, or non-ASCII characters, is rejected, as is an ingress_id that another
     *  ingress stream is already using.
     */
    ingressId?: string;
    /**
     * Human-readable title for the stream. A title is required: surrounding whitespace is
     *  trimmed before it is stored, and what remains must be non-empty, valid UTF-8, and no
     *  longer than 64 characters. Otherwise the request is rejected.
     */
    title?: string;
    /**
     * Receive an MPEG-TS push from the producer. The service allocates a UDP port and
     *  returns the URL the producer must push to in CreateIngressStreamResponse.
     *
     *  MPEG-TS ingress may be disabled per deployment. When it is disabled, a request
     *  that selects mpeg_ts is rejected with a gRPC error rather than accepted, so
     *  callers should be prepared to fall back to another protocol.
     */
    mpegTs?: Lattice.video.MpegTsSettings;
    /** Pull from a caller-supplied RTSP URL. */
    rtsp?: Lattice.video.RtspSettings;
    /**
     * Receive an SRT push from the producer. The service returns a URL and session_id
     *  in CreateIngressStreamResponse.
     */
    srt?: Lattice.video.SrtSettings;
}
