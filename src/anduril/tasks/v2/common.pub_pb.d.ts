// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/tasks/v2/common.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Duration } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/tasks/v2/common.pub.proto.
 */
export declare const file_anduril_tasks_v2_common_pub: GenFile;

/**
 * Maps to the UCI DurationRangeType.
 *
 * @generated from message anduril.tasks.v2.DurationRange
 */
export declare type DurationRange = Message<"anduril.tasks.v2.DurationRange"> & {
  /**
   * @generated from field: google.protobuf.Duration min = 1;
   */
  min?: Duration;

  /**
   * @generated from field: google.protobuf.Duration max = 2;
   */
  max?: Duration;
};

/**
 * Describes the message anduril.tasks.v2.DurationRange.
 * Use `create(DurationRangeSchema)` to create a new message.
 */
export declare const DurationRangeSchema: GenMessage<DurationRange>;

/**
 * Maps to the UCI AnglePair.
 *
 * @generated from message anduril.tasks.v2.AnglePair
 */
export declare type AnglePair = Message<"anduril.tasks.v2.AnglePair"> & {
  /**
   * Angle lower bound in radians.
   *
   * @generated from field: double min = 1;
   */
  min: number;

  /**
   * Angle lower bound in radians.
   *
   * @generated from field: double max = 2;
   */
  max: number;
};

/**
 * Describes the message anduril.tasks.v2.AnglePair.
 * Use `create(AnglePairSchema)` to create a new message.
 */
export declare const AnglePairSchema: GenMessage<AnglePair>;

/**
 * Maps to UCI AreaConstraints.
 *
 * @generated from message anduril.tasks.v2.AreaConstraints
 */
export declare type AreaConstraints = Message<"anduril.tasks.v2.AreaConstraints"> & {
  /**
   * @generated from field: anduril.tasks.v2.AltitudeConstraint altitude_constraint = 1;
   */
  altitudeConstraint?: AltitudeConstraint;
};

/**
 * Describes the message anduril.tasks.v2.AreaConstraints.
 * Use `create(AreaConstraintsSchema)` to create a new message.
 */
export declare const AreaConstraintsSchema: GenMessage<AreaConstraints>;

/**
 * @generated from message anduril.tasks.v2.AltitudeConstraint
 */
export declare type AltitudeConstraint = Message<"anduril.tasks.v2.AltitudeConstraint"> & {
  /**
   * Minimum altitude (AGL) in meters.
   *
   * @generated from field: double min = 1;
   */
  min: number;

  /**
   * Maximum altitude (AGL) in meters.
   *
   * @generated from field: double max = 2;
   */
  max: number;
};

/**
 * Describes the message anduril.tasks.v2.AltitudeConstraint.
 * Use `create(AltitudeConstraintSchema)` to create a new message.
 */
export declare const AltitudeConstraintSchema: GenMessage<AltitudeConstraint>;

/**
 * Includes information about an Agent.
 *
 * @generated from message anduril.tasks.v2.Agent
 */
export declare type Agent = Message<"anduril.tasks.v2.Agent"> & {
  /**
   * @generated from field: string entity_id = 2;
   */
  entityId: string;
};

/**
 * Describes the message anduril.tasks.v2.Agent.
 * Use `create(AgentSchema)` to create a new message.
 */
export declare const AgentSchema: GenMessage<Agent>;

/**
 * Models a Control Area within which Agents must operate.
 *
 * @generated from message anduril.tasks.v2.ControlArea
 */
export declare type ControlArea = Message<"anduril.tasks.v2.ControlArea"> & {
  /**
   * Reference to GeoPolygon GeoEntity representing the ControlArea.
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * Type of ControlArea.
   *
   * @generated from field: anduril.tasks.v2.ControlAreaType control_area_type = 2;
   */
  controlAreaType: ControlAreaType;
};

/**
 * Describes the message anduril.tasks.v2.ControlArea.
 * Use `create(ControlAreaSchema)` to create a new message.
 */
export declare const ControlAreaSchema: GenMessage<ControlArea>;

/**
 * @generated from enum anduril.tasks.v2.ControlAreaType
 */
export enum ControlAreaType {
  /**
   * @generated from enum value: CONTROL_AREA_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: CONTROL_AREA_TYPE_KEEP_IN_ZONE = 1;
   */
  KEEP_IN_ZONE = 1,

  /**
   * @generated from enum value: CONTROL_AREA_TYPE_KEEP_OUT_ZONE = 2;
   */
  KEEP_OUT_ZONE = 2,

  /**
   * Zone for an autonomous asset to nose-dive into
   * when its assignment has been concluded
   *
   * @generated from enum value: CONTROL_AREA_TYPE_DITCH_ZONE = 3;
   */
  DITCH_ZONE = 3,
}

/**
 * Describes the enum anduril.tasks.v2.ControlAreaType.
 */
export declare const ControlAreaTypeSchema: GenEnum<ControlAreaType>;

