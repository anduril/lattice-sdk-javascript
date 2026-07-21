//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * Kinematics of the entity, including its location, location uncertainty, motion, attitude, and the time the
 *  kinematics were measured.
 *
 *  Only one of the fields on this message is expected to be set when publishing an entity.
 */
export interface Kinematics {
    /** Kinematics measured in a geodetic (WGS84 latitude/longitude/altitude and ENU) reference frame. */
    kinematicsGeodetic?: Lattice.KinematicsGeodetic | undefined;
    /** Kinematics measured in a geocentric (ECEF) reference frame. */
    kinematicsGeocentric?: Lattice.KinematicsGeocentric | undefined;
}
