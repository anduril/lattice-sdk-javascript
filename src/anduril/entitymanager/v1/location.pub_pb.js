// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/entitymanager/v1/location.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DoubleValue, proto3 } from "@bufbuild/protobuf";
import { ENU, Quaternion } from "../../type/coords.pub_pb.js";

/**
 * Available for Entities that have a single or primary Location.
 *
 * @generated from message anduril.entitymanager.v1.Location
 */
export const Location = proto3.makeMessageType(
  "anduril.entitymanager.v1.Location",
  () => [
    { no: 1, name: "position", kind: "message", T: Position },
    { no: 2, name: "velocity_enu", kind: "message", T: ENU },
    { no: 5, name: "speed_mps", kind: "message", T: DoubleValue },
    { no: 4, name: "acceleration", kind: "message", T: ENU },
    { no: 3, name: "attitude_enu", kind: "message", T: Quaternion },
  ],
);

/**
 * WGS84 position.
 *
 * @generated from message anduril.entitymanager.v1.Position
 */
export const Position = proto3.makeMessageType(
  "anduril.entitymanager.v1.Position",
  () => [
    { no: 1, name: "latitude_degrees", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "longitude_degrees", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "altitude_hae_meters", kind: "message", T: DoubleValue },
    { no: 4, name: "altitude_agl_meters", kind: "message", T: DoubleValue },
    { no: 5, name: "altitude_asf_meters", kind: "message", T: DoubleValue },
    { no: 6, name: "pressure_depth_meters", kind: "message", T: DoubleValue },
  ],
);

/**
 * Uncertainty of entity position and velocity, if available.
 *
 * @generated from message anduril.entitymanager.v1.LocationUncertainty
 */
export const LocationUncertainty = proto3.makeMessageType(
  "anduril.entitymanager.v1.LocationUncertainty",
  () => [
    { no: 1, name: "position_enu_cov", kind: "message", T: TMat3 },
    { no: 2, name: "velocity_enu_cov", kind: "message", T: TMat3 },
    { no: 3, name: "position_error_ellipse", kind: "message", T: ErrorEllipse },
  ],
);

/**
 * Indicates ellipse characteristics and probability that an entity lies within the defined ellipse.
 *
 * @generated from message anduril.entitymanager.v1.ErrorEllipse
 */
export const ErrorEllipse = proto3.makeMessageType(
  "anduril.entitymanager.v1.ErrorEllipse",
  () => [
    { no: 1, name: "probability", kind: "message", T: DoubleValue },
    { no: 2, name: "semi_major_axis_m", kind: "message", T: DoubleValue },
    { no: 3, name: "semi_minor_axis_m", kind: "message", T: DoubleValue },
    { no: 4, name: "orientation_d", kind: "message", T: DoubleValue },
  ],
);

/**
 * Overrides anduril.type.Pose.
 *
 * @generated from message anduril.entitymanager.v1.Pose
 */
export const Pose = proto3.makeMessageType(
  "anduril.entitymanager.v1.Pose",
  () => [
    { no: 1, name: "pos", kind: "message", T: Position },
    { no: 2, name: "orientation", kind: "message", T: Quaternion },
  ],
);

/**
 * Symmetric 3d matrix only representing the upper right triangle.
 *
 * @generated from message anduril.entitymanager.v1.TMat3
 */
export const TMat3 = proto3.makeMessageType(
  "anduril.entitymanager.v1.TMat3",
  () => [
    { no: 1, name: "mxx", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 2, name: "mxy", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "mxz", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 4, name: "myy", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "myz", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 6, name: "mzz", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ],
);

