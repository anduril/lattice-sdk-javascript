//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface KinematicsGeocentric {
    /** The location of the entity, measured in the ECEF reference frame. */
    location?: Lattice.LocationGeocentricEcef | undefined;
    /** Location uncertainty of this measurement, measured in the ECEF frame. */
    locationUncertaintyEcef?: Lattice.TMat3 | undefined;
    /** Velocity in the ECEF frame, measured in meters per second. */
    velocityEcefMPerS?: Lattice.Vec3 | undefined;
    /** A 3x3 covariance matrix representing the uncertainty of the velocity measurement. */
    velocityUncertaintyEcef?: Lattice.TMat3 | undefined;
    /** The entity's acceleration in meters per second squared. */
    accelerationMPerS2?: Lattice.Vec3 | undefined;
    /**
     * Quaternion that rotates the X unit vector in the entity's body frame (assumed to be front-left-up) [1,0,0]
     *  to the entity's orientation unit vector in the ECEF frame at the entity's location.
     */
    attitudeEcef?: Lattice.Quaternion | undefined;
    /**
     * The time when these kinematics were measured by the sensor. For tracks, this represents when the sensor made
     *  the observation that produced these kinematics. For asset pose data, this represents the system time when the
     *  pose was captured.
     */
    measurementTime?: string | undefined;
}
