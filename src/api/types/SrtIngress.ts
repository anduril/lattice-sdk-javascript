//  This file was auto-generated from our API Definition.

/**
 * SRT ingress connection details. Returned to the producer so it knows where to
 *  push the stream.
 */
export interface SrtIngress {
    /** The URL the producer should push the SRT stream to. */
    url?: string | undefined;
    /**
     * Unique session identifier the producer must include on the SRT connection. See
     *  SrtSettings for context.
     */
    sessionId?: string | undefined;
}
