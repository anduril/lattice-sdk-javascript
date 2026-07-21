//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The altitude reading measured above the standard datum plane (29.92 inHg or 1013.2 hPA). This is also known as
 *  pressure altitude or QNE in aviation terms. This altitude should be used when flying at high altitudes and
 *  above the transition level (18,000 in the USA and Canada), ensuring the use of a common reference altitude.
 */
export interface AltitudeAboveStandardDatumPlanePressure {
    /** The provenance of the measurement. */
    provenance?: Lattice.AltitudeProvenance | undefined;
    /** The altitude value in meters. */
    valueMeters?: number | undefined;
}
