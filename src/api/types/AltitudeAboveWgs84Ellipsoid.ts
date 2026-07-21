//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Altitude above the WGS84 defined ellipsoid. Often measured with a GNSS sensor.
 */
export interface AltitudeAboveWgs84Ellipsoid {
    /** The provenance of the measurement. */
    provenance?: Lattice.AltitudeProvenance | undefined;
    /** The altitude value in meters. */
    valueMeters?: number | undefined;
}
