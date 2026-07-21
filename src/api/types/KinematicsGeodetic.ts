//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface KinematicsGeodetic {
    /** The location of this entity. */
    location?: Lattice.LocationGeodetic | undefined;
    /**
     * Location uncertainty of this measurement, measured in the ENU frame. When there are multiple altitude
     *  measurements, this represents the most certain.
     */
    locationUncertaintyEnu?: Lattice.TMat3 | undefined;
    /** Velocity in the ENU frame, measured in meters per second. */
    velocityEnuMPerS?: Lattice.Vec3 | undefined;
    /** A 3x3 covariance matrix representing the uncertainty of the velocity measurement. */
    velocityUncertaintyEnu?: Lattice.TMat3 | undefined;
    /** The entity's acceleration in meters per second squared. */
    accelerationMPerS2?: Lattice.Vec3 | undefined;
    /**
     * Quaternion that rotates the X unit vector in the entity's body frame (assumed to be front-left-up) [1,0,0]
     *  to the entity's orientation unit vector in the ENU frame at the entity's location.
     */
    attitudeEnu?: Lattice.Quaternion | undefined;
    /**
     * The time when these kinematics were measured by the sensor. For tracks, this represents when the sensor made
     *  the observation that produced these kinematics. For asset pose data, this represents the system time when the
     *  pose was captured.
     */
    measurementTime?: string | undefined;
}
