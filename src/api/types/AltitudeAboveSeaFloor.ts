//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The altitude above the sea floor, generally measured with a sonar.
 */
export interface AltitudeAboveSeaFloor {
    /** The provenance of the measurement. */
    provenance?: Lattice.AltitudeProvenance | undefined;
    /** The altitude value in meters. */
    valueMeters?: number | undefined;
}
