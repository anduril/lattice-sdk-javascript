//  This file was auto-generated from our API Definition.

/**
 * SRT egress connection details.
 */
export interface SrtEgress {
    /** The URL on which Lattice listens. The downstream consumer pulls from this URL. */
    url?: string | undefined;
    /** Unique session identifier the consumer must supply on the SRT connection. */
    sessionId?: string | undefined;
}
