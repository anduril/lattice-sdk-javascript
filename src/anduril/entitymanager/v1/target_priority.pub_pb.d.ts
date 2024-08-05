// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/entitymanager/v1/target_priority.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The target prioritization associated with an entity.
 *
 * @generated from message anduril.entitymanager.v1.TargetPriority
 */
export declare class TargetPriority extends Message<TargetPriority> {
  /**
   * Describes the target priority in relation to high value target lists.
   *
   * @generated from field: anduril.entitymanager.v1.HighValueTarget high_value_target = 1;
   */
  highValueTarget?: HighValueTarget;

  /**
   * Describes whether the entity should be treated as a threat
   *
   * @generated from field: anduril.entitymanager.v1.Threat threat = 2;
   */
  threat?: Threat;

  constructor(data?: PartialMessage<TargetPriority>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.TargetPriority";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TargetPriority;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TargetPriority;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TargetPriority;

  static equals(a: TargetPriority | PlainMessage<TargetPriority> | undefined, b: TargetPriority | PlainMessage<TargetPriority> | undefined): boolean;
}

/**
 * Describes whether something is a high value target or not.
 *
 * @generated from message anduril.entitymanager.v1.HighValueTarget
 */
export declare class HighValueTarget extends Message<HighValueTarget> {
  /**
   * Indicates whether the target matches any description from a high value target list.
   *
   * @generated from field: bool is_high_value_target = 1;
   */
  isHighValueTarget: boolean;

  /**
   * The priority associated with the target. If the target's description appears on multiple high value target lists,
   * the priority will be a reflection of the highest priority of all of those list's target description.
   *
   * A lower value indicates the target is of a higher priority, with 1 being the highest possible priority. A value of
   * 0 indicates there is no priority associated with this target.
   *
   * @generated from field: uint32 target_priority = 2;
   */
  targetPriority: number;

  /**
   * All of the high value target descriptions that the target matches against.
   *
   * @generated from field: repeated anduril.entitymanager.v1.HighValueTargetMatch target_matches = 3;
   */
  targetMatches: HighValueTargetMatch[];

  /**
   * Indicates whether the target is a 'High Payoff Target'. Targets can be one or both of high value and high payoff.
   * Semantically a High Value Target characterizes the target's importance to Red, whereas a High Payoff Target
   * indicates prosecuting the target furthers Blue's specific objectives.
   *
   * @generated from field: bool is_high_payoff_target = 4;
   */
  isHighPayoffTarget: boolean;

  constructor(data?: PartialMessage<HighValueTarget>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.HighValueTarget";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HighValueTarget;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HighValueTarget;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HighValueTarget;

  static equals(a: HighValueTarget | PlainMessage<HighValueTarget> | undefined, b: HighValueTarget | PlainMessage<HighValueTarget> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.HighValueTargetMatch
 */
export declare class HighValueTargetMatch extends Message<HighValueTargetMatch> {
  /**
   * The ID of the high value target list that matches the target description.
   *
   * @generated from field: string high_value_target_list_id = 1;
   */
  highValueTargetListId: string;

  /**
   * The ID of the specific high value target description within a high value target list that was matched against.
   * The ID is considered to be a globally unique identifier across all high value target IDs.
   *
   * @generated from field: string high_value_target_description_id = 2;
   */
  highValueTargetDescriptionId: string;

  constructor(data?: PartialMessage<HighValueTargetMatch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.HighValueTargetMatch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HighValueTargetMatch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HighValueTargetMatch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HighValueTargetMatch;

  static equals(a: HighValueTargetMatch | PlainMessage<HighValueTargetMatch> | undefined, b: HighValueTargetMatch | PlainMessage<HighValueTargetMatch> | undefined): boolean;
}

/**
 * Describes whether an entity is a threat or not.
 *
 * @generated from message anduril.entitymanager.v1.Threat
 */
export declare class Threat extends Message<Threat> {
  /**
   * Indicates that the entity has been determined to be a threat.
   *
   * @generated from field: bool is_threat = 1;
   */
  isThreat: boolean;

  constructor(data?: PartialMessage<Threat>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Threat";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Threat;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Threat;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Threat;

  static equals(a: Threat | PlainMessage<Threat> | undefined, b: Threat | PlainMessage<Threat> | undefined): boolean;
}

