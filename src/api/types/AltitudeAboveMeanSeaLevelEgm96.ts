//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The altitude relative to mean sea level represented by the EGM96 geoid. This is often calculated using a terrain
 *  conversion of from a GNSS device.
 */
export interface AltitudeAboveMeanSeaLevelEgm96 {
    /** The provenance of the measurement. */
    provenance?: Lattice.AltitudeProvenance | undefined;
    /** The altitude value in meters. */
    valueMeters?: number | undefined;
}
