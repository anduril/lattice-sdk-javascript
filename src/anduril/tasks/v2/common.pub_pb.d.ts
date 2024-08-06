// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/tasks/v2/common.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum anduril.tasks.v2.ControlAreaType
 */
export declare enum ControlAreaType {
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
 * Maps to the UCI DurationRangeType.
 *
 * @generated from message anduril.tasks.v2.DurationRange
 */
export declare class DurationRange extends Message<DurationRange> {
  /**
   * @generated from field: google.protobuf.Duration min = 1;
   */
  min?: Duration;

  /**
   * @generated from field: google.protobuf.Duration max = 2;
   */
  max?: Duration;

  constructor(data?: PartialMessage<DurationRange>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.DurationRange";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DurationRange;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DurationRange;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DurationRange;

  static equals(a: DurationRange | PlainMessage<DurationRange> | undefined, b: DurationRange | PlainMessage<DurationRange> | undefined): boolean;
}

/**
 * Maps to the UCI AnglePair.
 *
 * @generated from message anduril.tasks.v2.AnglePair
 */
export declare class AnglePair extends Message<AnglePair> {
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

  constructor(data?: PartialMessage<AnglePair>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.AnglePair";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnglePair;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnglePair;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnglePair;

  static equals(a: AnglePair | PlainMessage<AnglePair> | undefined, b: AnglePair | PlainMessage<AnglePair> | undefined): boolean;
}

/**
 * Maps to UCI AreaConstraints.
 *
 * @generated from message anduril.tasks.v2.AreaConstraints
 */
export declare class AreaConstraints extends Message<AreaConstraints> {
  /**
   * @generated from field: anduril.tasks.v2.AltitudeConstraint altitude_constraint = 1;
   */
  altitudeConstraint?: AltitudeConstraint;

  constructor(data?: PartialMessage<AreaConstraints>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.AreaConstraints";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AreaConstraints;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AreaConstraints;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AreaConstraints;

  static equals(a: AreaConstraints | PlainMessage<AreaConstraints> | undefined, b: AreaConstraints | PlainMessage<AreaConstraints> | undefined): boolean;
}

/**
 * @generated from message anduril.tasks.v2.AltitudeConstraint
 */
export declare class AltitudeConstraint extends Message<AltitudeConstraint> {
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

  constructor(data?: PartialMessage<AltitudeConstraint>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.AltitudeConstraint";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AltitudeConstraint;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AltitudeConstraint;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AltitudeConstraint;

  static equals(a: AltitudeConstraint | PlainMessage<AltitudeConstraint> | undefined, b: AltitudeConstraint | PlainMessage<AltitudeConstraint> | undefined): boolean;
}

/**
 * Includes information about an Agent.
 *
 * @generated from message anduril.tasks.v2.Agent
 */
export declare class Agent extends Message<Agent> {
  /**
   * @generated from field: string asset_id = 1;
   */
  assetId: string;

  /**
   * @generated from field: string entity_id = 2;
   */
  entityId: string;

  constructor(data?: PartialMessage<Agent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.Agent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Agent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Agent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Agent;

  static equals(a: Agent | PlainMessage<Agent> | undefined, b: Agent | PlainMessage<Agent> | undefined): boolean;
}

/**
 * Models a Control Area within which Agents must operate.
 *
 * @generated from message anduril.tasks.v2.ControlArea
 */
export declare class ControlArea extends Message<ControlArea> {
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

  constructor(data?: PartialMessage<ControlArea>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.tasks.v2.ControlArea";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ControlArea;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ControlArea;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ControlArea;

  static equals(a: ControlArea | PlainMessage<ControlArea> | undefined, b: ControlArea | PlainMessage<ControlArea> | undefined): boolean;
}

