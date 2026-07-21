//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The altitude below sea surface, generally measured with a pressure depth sensor.
 */
export interface AltitudeBelowSeaSurface {
    /** The provenance of the measurement. */
    provenance?: Lattice.AltitudeProvenance | undefined;
    /** The altitude value in meters. */
    valueMeters?: number | undefined;
}
