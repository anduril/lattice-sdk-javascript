// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/tasks/v2/shared/isr.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, DoubleValue, FieldList, FloatValue, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Objective, Point } from "../objective.pub_pb.js";
import type { Agent, ControlArea, DurationRange } from "../common.pub_pb.js";

/**
 * Direction of the loiter relative to the front of the vehicle.
 *
 * @generated from enum anduril.tasks.v2.OrbitDirection
 */
export declare enum OrbitDirection {
  /**
   * @generated from enum value: ORBIT_DIRECTION_DIRECTION_INVALID = 0;
   */
  DIRECTION_INVALID = 0,

  /**
   * @generated from enum value: ORBIT_DIRECTION_RIGHT = 1;
   */
  RIGHT = 1,

  /**
   * @generated from enum value: ORBIT_DIRECTION_LEFT = 2;
   */
  LEFT = 2,
}

/**
 * @generated from enum anduril.tasks.v2.OrbitPattern
 */
export declare enum OrbitPattern {
  /**
   * @generated from enum value: ORBIT_PATTERN_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: ORBIT_PATTERN_CIRCLE = 1;
   */
  CIRCLE = 1,

  /**
   * @generated from enum value: ORBIT_PATTERN_RACETRACK = 2;
   */
  RACETRACK = 2,

  /**
   * @generated from enum value: ORBIT_PATTERN_FIGURE_EIGHT = 3;
   */
  FIGURE_EIGHT = 3,
}

/**
 * Maps to BREVITY code INVESTIGATE.
 *
 * @generated from message anduril.tasks.v2.Investigate
 */
export declare class Investigate extends Message<Investigate> {
  /**
   * Indicates where to investigate.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Optional common ISR parameters.
   *
   * @generated from field: anduril.tasks.v2.ISRParameters parameters = 2;
   */
  parameters?: ISRParameters;

  constructor(data?: PartialMessage<Investigate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.Investigate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Investigate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Investigate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Investigate;

  static equals(a: Investigate | PlainMessage<Investigate> | undefined, b: Investigate | PlainMessage<Investigate> | undefined): boolean;
}

/**
 * Maps to BREVITY code ID with type Visual.
 *
 * @generated from message anduril.tasks.v2.VisualId
 */
export declare class VisualId extends Message<VisualId> {
  /**
   * Indicates what to identify.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Optional common ISR parameters.
   *
   * @generated from field: anduril.tasks.v2.ISRParameters parameters = 2;
   */
  parameters?: ISRParameters;

  constructor(data?: PartialMessage<VisualId>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.VisualId";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisualId;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisualId;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisualId;

  static equals(a: VisualId | PlainMessage<VisualId> | undefined, b: VisualId | PlainMessage<VisualId> | undefined): boolean;
}

/**
 * Maps to BREVITY code MAP.
 *
 * @generated from message anduril.tasks.v2.Map
 */
export declare class Map extends Message<Map> {
  /**
   * Indicates where to perform the SAR.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Optional common ISR parameters.
   *
   * @generated from field: anduril.tasks.v2.ISRParameters parameters = 2;
   */
  parameters?: ISRParameters;

  /**
   * minimum desired NIIRS (National Image Interpretability Rating Scales) see https://irp.fas.org/imint/niirs.htm
   *
   * @generated from field: google.protobuf.UInt32Value min_niirs = 3;
   */
  minNiirs?: number;

  constructor(data?: PartialMessage<Map>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.Map";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Map;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Map;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Map;

  static equals(a: Map | PlainMessage<Map> | undefined, b: Map | PlainMessage<Map> | undefined): boolean;
}

/**
 * Maps to the Loiter behavior within the FlightTask type within UCI v2.
 *
 * @generated from message anduril.tasks.v2.Loiter
 */
export declare class Loiter extends Message<Loiter> {
  /**
   * Indicates where to perform the loiter.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Specifies the details of the loiter.
   *
   * @generated from field: anduril.tasks.v2.LoiterType loiter_type = 2;
   */
  loiterType?: LoiterType;

  /**
   * Optional common ISR parameters.
   * The loiter radius and bearing should be inferred from the standoff_distance and standoff_angle respectively.
   *
   * @generated from field: anduril.tasks.v2.ISRParameters parameters = 3;
   */
  parameters?: ISRParameters;

  constructor(data?: PartialMessage<Loiter>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.Loiter";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Loiter;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Loiter;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Loiter;

  static equals(a: Loiter | PlainMessage<Loiter> | undefined, b: Loiter | PlainMessage<Loiter> | undefined): boolean;
}

/**
 * Represents intent to search an area. Maps to the Area Search Team Task within the Mission Autonomy Task Model.
 *
 * @generated from message anduril.tasks.v2.AreaSearch
 */
export declare class AreaSearch extends Message<AreaSearch> {
  /**
   * Indicates where to perform the area search.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Priors that can be used to inform this AreaSearch.
   *
   * @generated from field: repeated anduril.tasks.v2.Prior priors = 2;
   */
  priors: Prior[];

  /**
   * Agents participating in this AreaSearch.
   *
   * @generated from field: repeated anduril.tasks.v2.Agent participants = 3;
   */
  participants: Agent[];

  /**
   * Control Area for this AreaSearch.
   *
   * TODO: populate remaining fields here as we iterate on the AreaSearch integration.
   *
   * @generated from field: repeated anduril.tasks.v2.ControlArea control_areas = 4;
   */
  controlAreas: ControlArea[];

  constructor(data?: PartialMessage<AreaSearch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.AreaSearch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AreaSearch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AreaSearch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AreaSearch;

  static equals(a: AreaSearch | PlainMessage<AreaSearch> | undefined, b: AreaSearch | PlainMessage<AreaSearch> | undefined): boolean;
}

/**
 * Represents intent to search a volume. Maps to the Volume Search Team Task within the Mission Autonomy Task Model.
 *
 * @generated from message anduril.tasks.v2.VolumeSearch
 */
export declare class VolumeSearch extends Message<VolumeSearch> {
  /**
   * Indicates where to perform the volume search.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Priors that can be used to inform this VolumeSearch.
   *
   * @generated from field: repeated anduril.tasks.v2.Prior priors = 2;
   */
  priors: Prior[];

  /**
   * Agents participating in this VolumeSearch.
   *
   * @generated from field: repeated anduril.tasks.v2.Agent participants = 3;
   */
  participants: Agent[];

  /**
   * Control Area for this VolumeSearch.
   *
   * TODO: populate remaining fields here as we iterate on the VolumeSearch integration.
   *
   * @generated from field: repeated anduril.tasks.v2.ControlArea control_areas = 4;
   */
  controlAreas: ControlArea[];

  constructor(data?: PartialMessage<VolumeSearch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.VolumeSearch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeSearch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeSearch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeSearch;

  static equals(a: VolumeSearch | PlainMessage<VolumeSearch> | undefined, b: VolumeSearch | PlainMessage<VolumeSearch> | undefined): boolean;
}

/**
 * Task to improve the quality of a track. Maps to the Improve Track Task within the Mission Autonomy Task Model.
 *
 * @generated from message anduril.tasks.v2.ImproveTrackQuality
 */
export declare class ImproveTrackQuality extends Message<ImproveTrackQuality> {
  /**
   * Indicates the target track that is having its quality improved.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Task will complete when the requested track reaches a TQ >= the termination_track_quality.
   *
   * @generated from field: uint32 termination_track_quality = 2;
   */
  terminationTrackQuality: number;

  constructor(data?: PartialMessage<ImproveTrackQuality>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.ImproveTrackQuality";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImproveTrackQuality;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImproveTrackQuality;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImproveTrackQuality;

  static equals(a: ImproveTrackQuality | PlainMessage<ImproveTrackQuality> | undefined, b: ImproveTrackQuality | PlainMessage<ImproveTrackQuality> | undefined): boolean;
}

/**
 * Indicates intent to follow an Objective. Maps to Brevity code SHADOW.
 *
 * @generated from message anduril.tasks.v2.Shadow
 */
export declare class Shadow extends Message<Shadow> {
  /**
   * Indicates what to follow.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Optional common ISR parameters.
   *
   * @generated from field: anduril.tasks.v2.ISRParameters parameters = 2;
   */
  parameters?: ISRParameters;

  constructor(data?: PartialMessage<Shadow>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.Shadow";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Shadow;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Shadow;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Shadow;

  static equals(a: Shadow | PlainMessage<Shadow> | undefined, b: Shadow | PlainMessage<Shadow> | undefined): boolean;
}

/**
 * Maps to UCI v2 LoiterType.
 *
 * @generated from message anduril.tasks.v2.LoiterType
 */
export declare class LoiterType extends Message<LoiterType> {
  /**
   * @generated from oneof anduril.tasks.v2.LoiterType.loiter_type
   */
  loiterType: {
    /**
     * @generated from field: anduril.tasks.v2.OrbitType orbit_type = 1;
     */
    value: OrbitType;
    case: "orbitType";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<LoiterType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.LoiterType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LoiterType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LoiterType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LoiterType;

  static equals(a: LoiterType | PlainMessage<LoiterType> | undefined, b: LoiterType | PlainMessage<LoiterType> | undefined): boolean;
}

/**
 * @generated from message anduril.tasks.v2.OrbitType
 */
export declare class OrbitType extends Message<OrbitType> {
  /**
   * Indicates the direction in which to perform the loiter.
   *
   * @generated from field: anduril.tasks.v2.OrbitDirection direction = 1;
   */
  direction: OrbitDirection;

  /**
   * Indicates the loiter pattern to perform.
   *
   * @generated from field: anduril.tasks.v2.OrbitPattern pattern = 2;
   */
  pattern: OrbitPattern;

  /**
   * Indicates the amount of time to be spent in loiter.
   *
   * @generated from field: anduril.tasks.v2.OrbitDuration duration = 3;
   */
  duration?: OrbitDuration;

  constructor(data?: PartialMessage<OrbitType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.OrbitType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrbitType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrbitType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrbitType;

  static equals(a: OrbitType | PlainMessage<OrbitType> | undefined, b: OrbitType | PlainMessage<OrbitType> | undefined): boolean;
}

/**
 * @generated from message anduril.tasks.v2.OrbitDuration
 */
export declare class OrbitDuration extends Message<OrbitDuration> {
  /**
   * @generated from oneof anduril.tasks.v2.OrbitDuration.duration
   */
  duration: {
    /**
     * @generated from field: anduril.tasks.v2.DurationRange duration_range = 1;
     */
    value: DurationRange;
    case: "durationRange";
  } | {
    /**
     * @generated from field: uint64 num_of_orbits = 2;
     */
    value: bigint;
    case: "numOfOrbits";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<OrbitDuration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.OrbitDuration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrbitDuration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrbitDuration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrbitDuration;

  static equals(a: OrbitDuration | PlainMessage<OrbitDuration> | undefined, b: OrbitDuration | PlainMessage<OrbitDuration> | undefined): boolean;
}

/**
 * A Prior that can be used to inform an ISR Task.
 *
 * @generated from message anduril.tasks.v2.Prior
 */
export declare class Prior extends Message<Prior> {
  /**
   * @generated from oneof anduril.tasks.v2.Prior.prior
   */
  prior: {
    /**
     * Prefer Entity priors whenever the prior is in fact an entity. In other words, don't take position/point
     * out of an entity and pass it as a simple point.
     *
     * @generated from field: string entity_id = 1;
     */
    value: string;
    case: "entityId";
  } | {
    /**
     * Point priors for simple reference points that are not geo entities.
     *
     * @generated from field: anduril.tasks.v2.Point point = 5;
     */
    value: Point;
    case: "point";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Prior>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.Prior";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Prior;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Prior;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Prior;

  static equals(a: Prior | PlainMessage<Prior> | undefined, b: Prior | PlainMessage<Prior> | undefined): boolean;
}

/**
 * Common parameters for ISR Tasks.
 *
 * @generated from message anduril.tasks.v2.ISRParameters
 */
export declare class ISRParameters extends Message<ISRParameters> {
  /**
   * Indicates the target speed of the asset. DEPRECATION NOTE: deprecated in favor
   * of speed_ms since we might have legacy integrations not conforming to the meters per second units.
   *
   * @generated from field: google.protobuf.FloatValue speed = 1 [deprecated = true];
   * @deprecated
   */
  speed?: number;

  /**
   * Indicates the target speed of the asset. Units are meters per second.
   *
   * @generated from field: google.protobuf.FloatValue speed_m_s = 2;
   */
  speedMS?: number;

  /**
   * Indicates the standoff distance from the objective. The units are in meters.
   *
   * @generated from field: google.protobuf.FloatValue standoff_distance_m = 3;
   */
  standoffDistanceM?: number;

  /**
   * Indicates the standoff distance from the objective. DEPRECATION NOTE: deprecated in favor of standoff_distance_m
   *  since we might have legacy integrations not conforming to the meters unit.
   *
   * @generated from field: google.protobuf.FloatValue standoff_distance = 4 [deprecated = true];
   * @deprecated
   */
  standoffDistance?: number;

  /**
   * Indicates the standoff angle relative to the objective's bearing orientation (defaults to north).
   * In particular, the asset should approach target from this angle. Units in degrees.
   *
   * @generated from field: google.protobuf.FloatValue standoff_angle = 5;
   */
  standoffAngle?: number;

  /**
   * Indicates the amount of time in milliseconds to execute an ISR task before expiring. 0 value indicates no
   * expiration.
   *
   * @generated from field: google.protobuf.UInt64Value expiration_time_ms = 6;
   */
  expirationTimeMs?: bigint;

  constructor(data?: PartialMessage<ISRParameters>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.ISRParameters";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ISRParameters;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ISRParameters;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ISRParameters;

  static equals(a: ISRParameters | PlainMessage<ISRParameters> | undefined, b: ISRParameters | PlainMessage<ISRParameters> | undefined): boolean;
}

/**
 * Gimbal pointing command.
 *
 * @generated from message anduril.tasks.v2.GimbalPoint
 */
export declare class GimbalPoint extends Message<GimbalPoint> {
  /**
   * @generated from oneof anduril.tasks.v2.GimbalPoint.point_type
   */
  pointType: {
    /**
     * Point the gimbal at and lock on, continuing to look at a specific objective even as the platform moves.
     *
     * @generated from field: anduril.tasks.v2.Objective look_at = 1;
     */
    value: Objective;
    case: "lookAt";
  } | {
    /**
     * Point the gimbal at a fixed azimuth/elevation with respect to the platform frame.
     *
     * @generated from field: anduril.tasks.v2.AzimuthElevationPoint celestial_location = 2;
     */
    value: AzimuthElevationPoint;
    case: "celestialLocation";
  } | {
    /**
     * Point gimbal to an [x, y] location in the video feed.
     *
     * @generated from field: anduril.tasks.v2.FramePoint frame_location = 4;
     */
    value: FramePoint;
    case: "frameLocation";
  } | { case: undefined; value?: undefined };

  /**
   * Optional common ISR parameters.
   *
   * @generated from field: anduril.tasks.v2.ISRParameters parameters = 3;
   */
  parameters?: ISRParameters;

  constructor(data?: PartialMessage<GimbalPoint>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.GimbalPoint";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GimbalPoint;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GimbalPoint;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GimbalPoint;

  static equals(a: GimbalPoint | PlainMessage<GimbalPoint> | undefined, b: GimbalPoint | PlainMessage<GimbalPoint> | undefined): boolean;
}

/**
 * Celestial location with respect to a platform frame.
 *
 * @generated from message anduril.tasks.v2.AzimuthElevationPoint
 */
export declare class AzimuthElevationPoint extends Message<AzimuthElevationPoint> {
  /**
   * @generated from field: double azimuth = 1;
   */
  azimuth: number;

  /**
   * @generated from field: double elevation = 2;
   */
  elevation: number;

  constructor(data?: PartialMessage<AzimuthElevationPoint>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.AzimuthElevationPoint";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AzimuthElevationPoint;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AzimuthElevationPoint;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AzimuthElevationPoint;

  static equals(a: AzimuthElevationPoint | PlainMessage<AzimuthElevationPoint> | undefined, b: AzimuthElevationPoint | PlainMessage<AzimuthElevationPoint> | undefined): boolean;
}

/**
 * Point clicked in the frame of the video feed.
 *
 * @generated from message anduril.tasks.v2.FramePoint
 */
export declare class FramePoint extends Message<FramePoint> {
  /**
   * Frame-normalized location in frame on the x-axis, range (0, 1).
   * For example, x = 0.3 implies a pixel location of 0.3 * image_width.
   *
   * @generated from field: float x = 1;
   */
  x: number;

  /**
   * Frame-normalized location in frame on the y-axis, range (0, 1).
   * For example, y = 0.3 implies a pixel location of 0.3 * image_height.
   *
   * @generated from field: float y = 2;
   */
  y: number;

  /**
   * Timestamp of frame
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<FramePoint>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.FramePoint";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FramePoint;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FramePoint;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FramePoint;

  static equals(a: FramePoint | PlainMessage<FramePoint> | undefined, b: FramePoint | PlainMessage<FramePoint> | undefined): boolean;
}

/**
 * Command for setting gimbal zoom levels.
 *
 * @generated from message anduril.tasks.v2.GimbalZoom
 */
export declare class GimbalZoom extends Message<GimbalZoom> {
  /**
   * @generated from oneof anduril.tasks.v2.GimbalZoom.mode
   */
  mode: {
    /**
     * Set the zoom level to the provided horizontal field of view in degrees.
     *
     * @generated from field: google.protobuf.DoubleValue set_horizontal_fov = 1;
     */
    value: DoubleValue;
    case: "setHorizontalFov";
  } | {
    /**
     * Set the zoom level to the provided zoom level.
     *
     * @generated from field: google.protobuf.FloatValue set_magnification = 2;
     */
    value: FloatValue;
    case: "setMagnification";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<GimbalZoom>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.GimbalZoom";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GimbalZoom;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GimbalZoom;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GimbalZoom;

  static equals(a: GimbalZoom | PlainMessage<GimbalZoom> | undefined, b: GimbalZoom | PlainMessage<GimbalZoom> | undefined): boolean;
}

/**
 * Maps to BREVITY code ID with type MONITOR. To task assets to maintain sensor awareness
 * on a given objective.
 *
 * @generated from message anduril.tasks.v2.Monitor
 */
export declare class Monitor extends Message<Monitor> {
  /**
   * Indicates objective to monitor.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  constructor(data?: PartialMessage<Monitor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.Monitor";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Monitor;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Monitor;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Monitor;

  static equals(a: Monitor | PlainMessage<Monitor> | undefined, b: Monitor | PlainMessage<Monitor> | undefined): boolean;
}

/**
 * Maps to BREVITY code ID with type SCAN. To task assets to find and report any tracks in a geographic area.
 *
 * @generated from message anduril.tasks.v2.Scan
 */
export declare class Scan extends Message<Scan> {
  /**
   * Indicates where to scan.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Optional common ISR parameters.
   *
   * @generated from field: anduril.tasks.v2.ISRParameters parameters = 2;
   */
  parameters?: ISRParameters;

  constructor(data?: PartialMessage<Scan>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.Scan";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Scan;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Scan;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Scan;

  static equals(a: Scan | PlainMessage<Scan> | undefined, b: Scan | PlainMessage<Scan> | undefined): boolean;
}

/**
 * Performs a Battle Damage Assessment (BDA). Does not map to any Task in either UCI or BREVITY.
 *
 * @generated from message anduril.tasks.v2.BattleDamageAssessment
 */
export declare class BattleDamageAssessment extends Message<BattleDamageAssessment> {
  /**
   * Objective to perform BDA on.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Optional common ISR parameters.
   *
   * @generated from field: anduril.tasks.v2.ISRParameters parameters = 2;
   */
  parameters?: ISRParameters;

  constructor(data?: PartialMessage<BattleDamageAssessment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.BattleDamageAssessment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BattleDamageAssessment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BattleDamageAssessment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BattleDamageAssessment;

  static equals(a: BattleDamageAssessment | PlainMessage<BattleDamageAssessment> | undefined, b: BattleDamageAssessment | PlainMessage<BattleDamageAssessment> | undefined): boolean;
}

