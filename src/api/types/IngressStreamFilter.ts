//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Chooses which streams QueryIngressStreams returns.
 *
 *  A stream must match every field you set. For a field that takes a list, the
 *  stream only needs to match one value in it. Fields you leave out don't limit
 *  the results. The server rejects unrecognized values, so a typo never quietly
 *  returns more streams than you asked for. The filter only works within the
 *  streams you already have permission to see.
 */
export interface IngressStreamFilter {
    /**
     * Returns only streams that match by who created them. Leave it out to include
     *  every creator.
     */
    creator?: Lattice.CreatorFilter | undefined;
    /**
     * Returns only streams whose ingress ID matches. Compares against the part of
     *  `ingress_id` before any `#`. For a stream you created, that's the ID you chose.
     */
    ingressId?: Lattice.StringFilter | undefined;
    /** Returns only streams whose title matches. */
    title?: Lattice.StringFilter | undefined;
    /** Returns only streams in one of these statuses. */
    statuses?: IngressStreamFilter.Statuses.Item[] | undefined;
}

export namespace IngressStreamFilter {
    export type Statuses = Statuses.Item[];

    export namespace Statuses {
        export const Item = {
            StreamStatusUnspecified: "STREAM_STATUS_UNSPECIFIED",
            StreamStatusLive: "STREAM_STATUS_LIVE",
            StreamStatusInactive: "STREAM_STATUS_INACTIVE",
            StreamStatusUnavailable: "STREAM_STATUS_UNAVAILABLE",
            StreamStatusArchived: "STREAM_STATUS_ARCHIVED",
        } as const;
        export type Item = (typeof Item)[keyof typeof Item];
    }
}
