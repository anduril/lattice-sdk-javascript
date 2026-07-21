//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The calibrated pressure altitude reading measured above MSL. This is known as QNH or true altitude in aviation
 *  terms. This is separated from AltitudeAboveMeanSeaLevelEGM96, as the two values are not guaranteed to be the
 *  same due to temperature fluctuations.
 */
export interface AltitudeAboveMeanSeaLevelPressure {
    /** The provenance of the measurement. */
    provenance?: Lattice.AltitudeProvenance | undefined;
    /** The altitude value in meters. */
    valueMeters?: number | undefined;
}
