//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Geodetic location measurement in reference to the WGS84 ellipsoid. This also optionally
 *  provides other altitude reference frames.
 */
export interface LocationGeodetic {
    /** WGS84 latitude in decimal degrees. */
    latitudeDegrees?: number | undefined;
    /** WGS84 longitude in decimal degrees. */
    longitudeDegrees?: number | undefined;
    /**
     * Altitude measurement in reference to the WGS84 defined ellipsoid. This is expected to
     *  always be set if an altitude measurement is available and should be derived from the
     *  most accurate altitude measurement available. If this is a 2D measurement, then this
     *  message should not be set. If you are unable to calculate this value, then this
     *  message should also not be set.
     */
    universalAltitudeHae?: Lattice.AltitudeAboveWgs84Ellipsoid | undefined;
    /**
     * This allows for multiple additional altitudes to be conveyed.
     *  e.g. Barometric Pressure and Radar Altimeter readings
     *  for an aircraft
     */
    additionalAltitudes?: Lattice.Altitude[] | undefined;
}
