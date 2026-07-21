//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Altitude as AGL (Above ground level). This is also known as absolute altitude or QFE in aviation terms.
 */
export interface AltitudeAboveGroundLevel {
    /** The provenance of the measurement. */
    provenance?: Lattice.AltitudeProvenance | undefined;
    /** The altitude value in meters. */
    valueMeters?: number | undefined;
}
