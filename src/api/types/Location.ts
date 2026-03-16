//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Available for Entities that have a single or primary Location.
 */
export interface Location {
    /** see Position definition for details. */
    position?: Lattice.Position | undefined;
    /** Velocity in an ENU reference frame centered on the corresponding position. All units are meters per second. */
    velocityEnu?: Lattice.Enu | undefined;
    /** Speed is the magnitude of velocity_enu vector [sqrt(e^2 + n^2 + u^2)] when present, measured in m/s. */
    speedMps?: number | undefined;
    /** The entity's acceleration in meters/s^2. */
    acceleration?: Lattice.Enu | undefined;
    /** quaternion to translate from entity body frame to it's ENU frame */
    attitudeEnu?: Lattice.Quaternion | undefined;
}
