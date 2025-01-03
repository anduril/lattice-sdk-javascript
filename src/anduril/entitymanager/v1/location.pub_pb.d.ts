// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/location.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { ENU, Quaternion } from "../../type/coords.pub_pb.js";

/**
 * Describes the file anduril/entitymanager/v1/location.pub.proto.
 */
export declare const file_anduril_entitymanager_v1_location_pub: GenFile;

/**
 * Available for Entities that have a single or primary Location.
 *
 * @generated from message anduril.entitymanager.v1.Location
 */
export declare type Location = Message<"anduril.entitymanager.v1.Location"> & {
  /**
   * see Position definition for details.
   *
   * @generated from field: anduril.entitymanager.v1.Position position = 1;
   */
  position?: Position;

  /**
   * Velocity in an ENU reference frame centered on the corresponding position. All units are meters per second.
   *
   * @generated from field: anduril.type.ENU velocity_enu = 2;
   */
  velocityEnu?: ENU;

  /**
   * Speed is the magnitude of velocity_enu vector [sqrt(e^2 + n^2 + u^2)] when present, measured in m/s.
   *
   * @generated from field: google.protobuf.DoubleValue speed_mps = 5;
   */
  speedMps?: number;

  /**
   * The entity's acceleration in meters/s^2.
   *
   * @generated from field: anduril.type.ENU acceleration = 4;
   */
  acceleration?: ENU;

  /**
   * quaternion to translate from entity body frame to it's ENU frame
   *
   * @generated from field: anduril.type.Quaternion attitude_enu = 3;
   */
  attitudeEnu?: Quaternion;
};

/**
 * Describes the message anduril.entitymanager.v1.Location.
 * Use `create(LocationSchema)` to create a new message.
 */
export declare const LocationSchema: GenMessage<Location>;

/**
 * WGS84 position. Position includes four altitude references.
 * The data model does not currently support Mean Sea Level (MSL) references,
 * such as the Earth Gravitational Model 1996 (EGM-96) and the Earth Gravitational Model 2008 (EGM-08).
 * If the only altitude reference available to your integration is MSL, convert it to
 * Height Above Ellipsoid (HAE) and populate the altitude_hae_meters field.
 *
 * @generated from message anduril.entitymanager.v1.Position
 */
export declare type Position = Message<"anduril.entitymanager.v1.Position"> & {
  /**
   * WGS84 geodetic latitude in decimal degrees.
   *
   * @generated from field: double latitude_degrees = 1;
   */
  latitudeDegrees: number;

  /**
   * WGS84 longitude in decimal degrees.
   *
   * @generated from field: double longitude_degrees = 2;
   */
  longitudeDegrees: number;

  /**
   * altitude as height above ellipsoid (WGS84) in meters. DoubleValue wrapper is used to distinguish optional from
   * default 0.
   *
   * @generated from field: google.protobuf.DoubleValue altitude_hae_meters = 3;
   */
  altitudeHaeMeters?: number;

  /**
   * Altitude as AGL (Above Ground Level) if the upstream data source has this value set. This value represents the
   * entity's height above the terrain. This is typically measured with a radar altimeter or by using a terrain tile
   * set lookup. If the value is not set from the upstream, this value is not set.
   *
   * @generated from field: google.protobuf.DoubleValue altitude_agl_meters = 4;
   */
  altitudeAglMeters?: number;

  /**
   * Altitude as ASF (Above Sea Floor) if the upstream data source has this value set. If the value is not set from the upstream, this value is
   * not set.
   *
   * @generated from field: google.protobuf.DoubleValue altitude_asf_meters = 5;
   */
  altitudeAsfMeters?: number;

  /**
   * The depth of the entity from the surface of the water through sensor measurements based on differential pressure
   * between the interior and exterior of the vessel. If the value is not set from the upstream, this value is not set.
   *
   * @generated from field: google.protobuf.DoubleValue pressure_depth_meters = 6;
   */
  pressureDepthMeters?: number;
};

/**
 * Describes the message anduril.entitymanager.v1.Position.
 * Use `create(PositionSchema)` to create a new message.
 */
export declare const PositionSchema: GenMessage<Position>;

/**
 * Uncertainty of entity position and velocity, if available.
 *
 * @generated from message anduril.entitymanager.v1.LocationUncertainty
 */
export declare type LocationUncertainty = Message<"anduril.entitymanager.v1.LocationUncertainty"> & {
  /**
   * Positional covariance represented by the upper triangle of the covariance matrix. It is valid to populate
   * only the diagonal of the matrix if the full covariance matrix is unknown.
   *
   * @generated from field: anduril.entitymanager.v1.TMat3 position_enu_cov = 1;
   */
  positionEnuCov?: TMat3;

  /**
   * Velocity covariance represented by the upper triangle of the covariance matrix. It is valid to populate
   * only the diagonal of the matrix if the full covariance matrix is unknown.
   *
   * @generated from field: anduril.entitymanager.v1.TMat3 velocity_enu_cov = 2;
   */
  velocityEnuCov?: TMat3;

  /**
   * An ellipse that describes the certainty probability and error boundary for a given geolocation.
   *
   * @generated from field: anduril.entitymanager.v1.ErrorEllipse position_error_ellipse = 3;
   */
  positionErrorEllipse?: ErrorEllipse;
};

/**
 * Describes the message anduril.entitymanager.v1.LocationUncertainty.
 * Use `create(LocationUncertaintySchema)` to create a new message.
 */
export declare const LocationUncertaintySchema: GenMessage<LocationUncertainty>;

/**
 * Indicates ellipse characteristics and probability that an entity lies within the defined ellipse.
 *
 * @generated from message anduril.entitymanager.v1.ErrorEllipse
 */
export declare type ErrorEllipse = Message<"anduril.entitymanager.v1.ErrorEllipse"> & {
  /**
   * Defines the probability in percentage that an entity lies within the given ellipse: 0-1.
   *
   * @generated from field: google.protobuf.DoubleValue probability = 1;
   */
  probability?: number;

  /**
   * Defines the distance from the center point of the ellipse to the furthest distance on the perimeter in meters.
   *
   * @generated from field: google.protobuf.DoubleValue semi_major_axis_m = 2;
   */
  semiMajorAxisM?: number;

  /**
   * Defines the distance from the center point of the ellipse to the shortest distance on the perimeter in meters.
   *
   * @generated from field: google.protobuf.DoubleValue semi_minor_axis_m = 3;
   */
  semiMinorAxisM?: number;

  /**
   * The orientation of the semi-major relative to true north in degrees from clockwise: 0-180 due to symmetry across the semi-minor axis.
   *
   * @generated from field: google.protobuf.DoubleValue orientation_d = 4;
   */
  orientationD?: number;
};

/**
 * Describes the message anduril.entitymanager.v1.ErrorEllipse.
 * Use `create(ErrorEllipseSchema)` to create a new message.
 */
export declare const ErrorEllipseSchema: GenMessage<ErrorEllipse>;

/**
 * @generated from message anduril.entitymanager.v1.Pose
 */
export declare type Pose = Message<"anduril.entitymanager.v1.Pose"> & {
  /**
   * Geospatial location defined by this Pose.
   *
   * @generated from field: anduril.entitymanager.v1.Position pos = 1;
   */
  pos?: Position;

  /**
   * The quaternion to transform a point in the Pose frame to the ENU frame. The Pose frame could be Body, Turret,
   * etc and is determined by the context in which this Pose is used.
   * The normal convention for defining orientation is to list the frames of transformation, for example
   * att_gimbal_to_enu is the quaternion which transforms a point in the gimbal frame to the body frame, but
   * in this case we truncate to att_enu because the Pose frame isn't defined. A potentially better name for this
   * field would have been att_pose_to_enu.
   *
   * Implementations of this quaternion should left multiply this quaternion to transform a point from the Pose frame
   * to the enu frame.
   *
   * @generated from field: anduril.type.Quaternion orientation = 2;
   */
  orientation?: Quaternion;
};

/**
 * Describes the message anduril.entitymanager.v1.Pose.
 * Use `create(PoseSchema)` to create a new message.
 */
export declare const PoseSchema: GenMessage<Pose>;

/**
 * Symmetric 3d matrix only representing the upper right triangle.
 *
 * @generated from message anduril.entitymanager.v1.TMat3
 */
export declare type TMat3 = Message<"anduril.entitymanager.v1.TMat3"> & {
  /**
   * @generated from field: float mxx = 1;
   */
  mxx: number;

  /**
   * @generated from field: float mxy = 2;
   */
  mxy: number;

  /**
   * @generated from field: float mxz = 3;
   */
  mxz: number;

  /**
   * @generated from field: float myy = 4;
   */
  myy: number;

  /**
   * @generated from field: float myz = 5;
   */
  myz: number;

  /**
   * @generated from field: float mzz = 6;
   */
  mzz: number;
};

/**
 * Describes the message anduril.entitymanager.v1.TMat3.
 * Use `create(TMat3Schema)` to create a new message.
 */
export declare const TMat3Schema: GenMessage<TMat3>;

