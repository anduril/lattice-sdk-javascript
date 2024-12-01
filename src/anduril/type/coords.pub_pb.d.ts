// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/type/coords.pub.proto (package anduril.type, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file anduril/type/coords.pub.proto.
 */
export declare const file_anduril_type_coords_pub: GenFile;

/**
 * Spherical angular coordinates
 *
 * @generated from message anduril.type.ThetaPhi
 */
export declare type ThetaPhi = Message<"anduril.type.ThetaPhi"> & {
  /**
   * Angle clockwise relative to forward in degrees (Azimuth).
   *
   * @generated from field: double theta = 1;
   */
  theta: number;

  /**
   * Angle upward relative to forward in degrees (Elevation).
   *
   * @generated from field: double phi = 2;
   */
  phi: number;
};

/**
 * Describes the message anduril.type.ThetaPhi.
 * Use `create(ThetaPhiSchema)` to create a new message.
 */
export declare const ThetaPhiSchema: GenMessage<ThetaPhi>;

/**
 * @generated from message anduril.type.LLA
 */
export declare type LLA = Message<"anduril.type.LLA"> & {
  /**
   * WGS84 longitude in decimal degrees
   *
   * @generated from field: double lon = 1;
   */
  lon: number;

  /**
   * WGS84 geodetic latitude in decimal degrees
   *
   * @generated from field: double lat = 2;
   */
  lat: number;

  /**
   * altitude in meters above either WGS84 or EGM96 (see altitude_reference)
   *
   * @generated from field: double alt = 3;
   */
  alt: number;

  /**
   * [default=false] indicates that altitude is either unset or so uncertain that it is meaningless
   *
   * @generated from field: bool is2d = 4;
   */
  is2d: boolean;

  /**
   * Meaning of alt.
   * altitude in meters above either WGS84 or EGM96, use altitude_reference to
   * determine what zero means.
   *
   * @generated from field: anduril.type.LLA.AltitudeReference altitude_reference = 5;
   */
  altitudeReference: LLA_AltitudeReference;
};

/**
 * Describes the message anduril.type.LLA.
 * Use `create(LLASchema)` to create a new message.
 */
export declare const LLASchema: GenMessage<LLA>;

/**
 * What altitude of zero refers to.
 *
 * @generated from enum anduril.type.LLA.AltitudeReference
 */
export enum LLA_AltitudeReference {
  /**
   * Depending on the context its possible INVALID just means that it is
   * clear from the context (e.g. this is LLA is named lla_hae).
   * This also might mean AGL which would depend on what height map you are
   * using.
   *
   * @generated from enum value: ALTITUDE_REFERENCE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * commonly called height above ellipsoid (HAE)
   *
   * @generated from enum value: ALTITUDE_REFERENCE_HEIGHT_ABOVE_WGS84 = 1;
   */
  HEIGHT_ABOVE_WGS84 = 1,

  /**
   * commonly called mean sea level (MSL)
   *
   * @generated from enum value: ALTITUDE_REFERENCE_HEIGHT_ABOVE_EGM96 = 2;
   */
  HEIGHT_ABOVE_EGM96 = 2,

  /**
   * Publishing an altitude with an unkown reference
   *
   * @generated from enum value: ALTITUDE_REFERENCE_UNKNOWN = 3;
   */
  UNKNOWN = 3,

  /**
   * ADSB sometimes published barometrically-measured alt
   *
   * @generated from enum value: ALTITUDE_REFERENCE_BAROMETRIC = 4;
   */
  BAROMETRIC = 4,

  /**
   * Positive distance above sea floor (ASF) at a specific lat/lon
   *
   * @generated from enum value: ALTITUDE_REFERENCE_ABOVE_SEA_FLOOR = 5;
   */
  ABOVE_SEA_FLOOR = 5,

  /**
   * Positive distance below surface at a specific lat/lon
   *
   * @generated from enum value: ALTITUDE_REFERENCE_BELOW_SEA_SURFACE = 6;
   */
  BELOW_SEA_SURFACE = 6,
}

/**
 * Describes the enum anduril.type.LLA.AltitudeReference.
 */
export declare const LLA_AltitudeReferenceSchema: GenEnum<LLA_AltitudeReference>;

/**
 * @generated from message anduril.type.ENU
 */
export declare type ENU = Message<"anduril.type.ENU"> & {
  /**
   * @generated from field: double e = 1;
   */
  e: number;

  /**
   * @generated from field: double n = 2;
   */
  n: number;

  /**
   * @generated from field: double u = 3;
   */
  u: number;
};

/**
 * Describes the message anduril.type.ENU.
 * Use `create(ENUSchema)` to create a new message.
 */
export declare const ENUSchema: GenMessage<ENU>;

/**
 * Holds ECI (Earth-Centered Inertial, https://en.wikipedia.org/wiki/Earth-centered_inertial)
 * coordinates.
 *
 * @generated from message anduril.type.ECI
 */
export declare type ECI = Message<"anduril.type.ECI"> & {
  /**
   * Holds the x-coordinate of ECI.
   *
   * @generated from field: double x = 1;
   */
  x: number;

  /**
   * Holds the y-coordinate of ECI.
   *
   * @generated from field: double y = 2;
   */
  y: number;

  /**
   * Holds the z-coordinate of ECI.
   *
   * @generated from field: double z = 3;
   */
  z: number;
};

/**
 * Describes the message anduril.type.ECI.
 * Use `create(ECISchema)` to create a new message.
 */
export declare const ECISchema: GenMessage<ECI>;

/**
 * @generated from message anduril.type.Vec2
 */
export declare type Vec2 = Message<"anduril.type.Vec2"> & {
  /**
   * @generated from field: double x = 1;
   */
  x: number;

  /**
   * @generated from field: double y = 2;
   */
  y: number;
};

/**
 * Describes the message anduril.type.Vec2.
 * Use `create(Vec2Schema)` to create a new message.
 */
export declare const Vec2Schema: GenMessage<Vec2>;

/**
 * @generated from message anduril.type.Vec2f
 */
export declare type Vec2f = Message<"anduril.type.Vec2f"> & {
  /**
   * @generated from field: float x = 1;
   */
  x: number;

  /**
   * @generated from field: float y = 2;
   */
  y: number;
};

/**
 * Describes the message anduril.type.Vec2f.
 * Use `create(Vec2fSchema)` to create a new message.
 */
export declare const Vec2fSchema: GenMessage<Vec2f>;

/**
 * @generated from message anduril.type.Vec3
 */
export declare type Vec3 = Message<"anduril.type.Vec3"> & {
  /**
   * @generated from field: double x = 1;
   */
  x: number;

  /**
   * @generated from field: double y = 2;
   */
  y: number;

  /**
   * @generated from field: double z = 3;
   */
  z: number;
};

/**
 * Describes the message anduril.type.Vec3.
 * Use `create(Vec3Schema)` to create a new message.
 */
export declare const Vec3Schema: GenMessage<Vec3>;

/**
 * @generated from message anduril.type.Vec3f
 */
export declare type Vec3f = Message<"anduril.type.Vec3f"> & {
  /**
   * @generated from field: float x = 1;
   */
  x: number;

  /**
   * @generated from field: float y = 2;
   */
  y: number;

  /**
   * @generated from field: float z = 3;
   */
  z: number;
};

/**
 * Describes the message anduril.type.Vec3f.
 * Use `create(Vec3fSchema)` to create a new message.
 */
export declare const Vec3fSchema: GenMessage<Vec3f>;

/**
 * @generated from message anduril.type.Quaternion
 */
export declare type Quaternion = Message<"anduril.type.Quaternion"> & {
  /**
   * x, y, z are vector portion, w is scalar
   *
   * @generated from field: double x = 1;
   */
  x: number;

  /**
   * @generated from field: double y = 2;
   */
  y: number;

  /**
   * @generated from field: double z = 3;
   */
  z: number;

  /**
   * @generated from field: double w = 4;
   */
  w: number;
};

/**
 * Describes the message anduril.type.Quaternion.
 * Use `create(QuaternionSchema)` to create a new message.
 */
export declare const QuaternionSchema: GenMessage<Quaternion>;

/**
 * Yaw-Pitch in radians
 *
 * @generated from message anduril.type.YawPitch
 */
export declare type YawPitch = Message<"anduril.type.YawPitch"> & {
  /**
   * @generated from field: double yaw = 1;
   */
  yaw: number;

  /**
   * @generated from field: double pitch = 2;
   */
  pitch: number;
};

/**
 * Describes the message anduril.type.YawPitch.
 * Use `create(YawPitchSchema)` to create a new message.
 */
export declare const YawPitchSchema: GenMessage<YawPitch>;

/**
 * Yaw-Pitch-Roll in degrees.
 *
 * @generated from message anduril.type.YPR
 */
export declare type YPR = Message<"anduril.type.YPR"> & {
  /**
   * @generated from field: double yaw = 1;
   */
  yaw: number;

  /**
   * @generated from field: double pitch = 2;
   */
  pitch: number;

  /**
   * @generated from field: double roll = 3;
   */
  roll: number;
};

/**
 * Describes the message anduril.type.YPR.
 * Use `create(YPRSchema)` to create a new message.
 */
export declare const YPRSchema: GenMessage<YPR>;

/**
 * @generated from message anduril.type.Pose
 */
export declare type Pose = Message<"anduril.type.Pose"> & {
  /**
   * Geospatial location defined by this Pose.
   *
   * @generated from field: anduril.type.LLA pos = 1;
   */
  pos?: LLA;

  /**
   * The quaternion to transform a point in the Pose frame to the ENU frame. The Pose frame could be Body, Turret,
   * etc and is determined by the context in which this Pose is used.
   * The normal convention for defining orientation is to list the frames of transformation, for example
   * att_gimbal_to_enu is the quaternion which transforms a point in the gimbal frame to the body frame, but
   * in this case we truncate to att_enu because the Pose frame isn't defined. A potentially better name for this
   * field would have been att_pose_to_enu.
   *
   * Implementations of this quaternion should left multiply this quaternion to transform a point from the Pose frame
   * to the enu frame. Following the geometry-cpp rotation convention, the following example would be valid:
   * (https://ghe.anduril.dev/autonomy/geometry-cpp/blob/master/src/Rotation.h#L90)
   *
   * Point<Pose\> posePt{1,0,0};
   * Rotation<Enu, Pose\> attPoseToEnu{};
   * Point<Enu\> = attPoseToEnu*posePt;
   *
   * This transformed point represents some vector in ENU space that is aligned with the x axis of the attPoseToEnu
   * matrix.
   *
   * An alternative matrix expression is as follows:
   * ptEnu = M x ptPose
   *
   * @generated from field: anduril.type.Quaternion att_enu = 2;
   */
  attEnu?: Quaternion;
};

/**
 * Describes the message anduril.type.Pose.
 * Use `create(PoseSchema)` to create a new message.
 */
export declare const PoseSchema: GenMessage<Pose>;

/**
 * @generated from message anduril.type.LLAPolygon
 */
export declare type LLAPolygon = Message<"anduril.type.LLAPolygon"> & {
  /**
   * standard is that points are defined in a counter-clockwise order. this
   * is only the exterior ring of a polygon, no holes are supported.
   *
   * @generated from field: repeated anduril.type.LLA points = 1;
   */
  points: LLA[];
};

/**
 * Describes the message anduril.type.LLAPolygon.
 * Use `create(LLAPolygonSchema)` to create a new message.
 */
export declare const LLAPolygonSchema: GenMessage<LLAPolygon>;

/**
 * @generated from message anduril.type.AERPolygon
 */
export declare type AERPolygon = Message<"anduril.type.AERPolygon"> & {
  /**
   * Azimuth-Range-Elevation
   *
   * @generated from field: repeated anduril.type.Spherical points = 1;
   */
  points: Spherical[];
};

/**
 * Describes the message anduril.type.AERPolygon.
 * Use `create(AERPolygonSchema)` to create a new message.
 */
export declare const AERPolygonSchema: GenMessage<AERPolygon>;

/**
 * @generated from message anduril.type.LLAPath
 */
export declare type LLAPath = Message<"anduril.type.LLAPath"> & {
  /**
   * Ordered list of points on the path.
   *
   * @generated from field: repeated anduril.type.LLA points = 1;
   */
  points: LLA[];

  /**
   * True if the last point on the path connects to the first in a closed
   * loop
   *
   * @generated from field: bool loop = 2;
   */
  loop: boolean;
};

/**
 * Describes the message anduril.type.LLAPath.
 * Use `create(LLAPathSchema)` to create a new message.
 */
export declare const LLAPathSchema: GenMessage<LLAPath>;

/**
 * @generated from message anduril.type.Spherical
 */
export declare type Spherical = Message<"anduril.type.Spherical"> & {
  /**
   * azimuth angle in radians
   *
   * @generated from field: double az = 1;
   */
  az: number;

  /**
   * elevation angle in radians, we'll use 0 = XY plane
   *
   * @generated from field: double el = 2;
   */
  el: number;

  /**
   * range in meters
   *
   * @generated from field: double range = 3;
   */
  range: number;
};

/**
 * Describes the message anduril.type.Spherical.
 * Use `create(SphericalSchema)` to create a new message.
 */
export declare const SphericalSchema: GenMessage<Spherical>;

/**
 * @generated from message anduril.type.DoubleRange
 */
export declare type DoubleRange = Message<"anduril.type.DoubleRange"> & {
  /**
   * @generated from field: double min = 1;
   */
  min: number;

  /**
   * @generated from field: double max = 2;
   */
  max: number;
};

/**
 * Describes the message anduril.type.DoubleRange.
 * Use `create(DoubleRangeSchema)` to create a new message.
 */
export declare const DoubleRangeSchema: GenMessage<DoubleRange>;

/**
 * @generated from message anduril.type.Uint64Range
 */
export declare type Uint64Range = Message<"anduril.type.Uint64Range"> & {
  /**
   * @generated from field: uint64 min = 1;
   */
  min: bigint;

  /**
   * @generated from field: uint64 max = 2;
   */
  max: bigint;
};

/**
 * Describes the message anduril.type.Uint64Range.
 * Use `create(Uint64RangeSchema)` to create a new message.
 */
export declare const Uint64RangeSchema: GenMessage<Uint64Range>;

/**
 * A symmetric 4D matrix only representing the upper right triangle, useful for covariance matrices.
 *
 * @generated from message anduril.type.TMat4f
 */
export declare type TMat4f = Message<"anduril.type.TMat4f"> & {
  /**
   * @generated from field: float m00 = 1;
   */
  m00: number;

  /**
   * @generated from field: float m01 = 2;
   */
  m01: number;

  /**
   * @generated from field: float m02 = 3;
   */
  m02: number;

  /**
   * @generated from field: float m03 = 4;
   */
  m03: number;

  /**
   * @generated from field: float m11 = 5;
   */
  m11: number;

  /**
   * @generated from field: float m12 = 6;
   */
  m12: number;

  /**
   * @generated from field: float m13 = 7;
   */
  m13: number;

  /**
   * @generated from field: float m22 = 8;
   */
  m22: number;

  /**
   * @generated from field: float m23 = 9;
   */
  m23: number;

  /**
   * @generated from field: float m33 = 10;
   */
  m33: number;
};

/**
 * Describes the message anduril.type.TMat4f.
 * Use `create(TMat4fSchema)` to create a new message.
 */
export declare const TMat4fSchema: GenMessage<TMat4f>;

/**
 * A symmetric 3D matrix only representing the upper right triangle, useful for covariance matrices.
 *
 * @generated from message anduril.type.TMat3
 */
export declare type TMat3 = Message<"anduril.type.TMat3"> & {
  /**
   * @generated from field: double mxx = 1;
   */
  mxx: number;

  /**
   * @generated from field: double mxy = 2;
   */
  mxy: number;

  /**
   * @generated from field: double mxz = 3;
   */
  mxz: number;

  /**
   * @generated from field: double myy = 4;
   */
  myy: number;

  /**
   * @generated from field: double myz = 5;
   */
  myz: number;

  /**
   * @generated from field: double mzz = 6;
   */
  mzz: number;
};

/**
 * Describes the message anduril.type.TMat3.
 * Use `create(TMat3Schema)` to create a new message.
 */
export declare const TMat3Schema: GenMessage<TMat3>;

/**
 * symmetric 2d matrix only representing the upper right triangle, useful for
 * covariance matrices
 *
 * @generated from message anduril.type.TMat2
 */
export declare type TMat2 = Message<"anduril.type.TMat2"> & {
  /**
   * @generated from field: double mxx = 1;
   */
  mxx: number;

  /**
   * @generated from field: double mxy = 2;
   */
  mxy: number;

  /**
   * @generated from field: double myy = 3;
   */
  myy: number;
};

/**
 * Describes the message anduril.type.TMat2.
 * Use `create(TMat2Schema)` to create a new message.
 */
export declare const TMat2Schema: GenMessage<TMat2>;

/**
 * Rx + t, Technically this is a duplicate of AffineTransform
 * but Affine Transform isn't really an affine transform (since it doesn't allow
 * skewing and stretching).
 *
 * @generated from message anduril.type.RigidTransform
 */
export declare type RigidTransform = Message<"anduril.type.RigidTransform"> & {
  /**
   * @generated from field: anduril.type.Quaternion rotation = 3;
   */
  rotation?: Quaternion;

  /**
   * @generated from field: anduril.type.Vec3 translation = 4;
   */
  translation?: Vec3;
};

/**
 * Describes the message anduril.type.RigidTransform.
 * Use `create(RigidTransformSchema)` to create a new message.
 */
export declare const RigidTransformSchema: GenMessage<RigidTransform>;

