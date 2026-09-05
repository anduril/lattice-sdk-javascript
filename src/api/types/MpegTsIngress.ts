//  This file was auto-generated from our API Definition.

/**
 * MPEG-TS ingress connection details.
 *
 *  MPEG-TS ingress is supported only at the edge, in closed networks; in a cloud
 *  environment reached over the public internet it may be disabled per deployment. These
 *  details are populated only when a stream was successfully created with mpeg_ts. An
 *  MPEG-TS stream created at the edge can still be listed and inspected on the
 *  IngressStream read model even when cloud ingress is disabled.
 */
export interface MpegTsIngress {
    /** The URL that the producer should push the MPEG-TS stream to. */
    url?: string | undefined;
}
