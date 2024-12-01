// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/target_priority.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file anduril/entitymanager/v1/target_priority.pub.proto.
 */
export declare const file_anduril_entitymanager_v1_target_priority_pub: GenFile;

/**
 * The target prioritization associated with an entity.
 *
 * @generated from message anduril.entitymanager.v1.TargetPriority
 */
export declare type TargetPriority = Message<"anduril.entitymanager.v1.TargetPriority"> & {
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
};

/**
 * Describes the message anduril.entitymanager.v1.TargetPriority.
 * Use `create(TargetPrioritySchema)` to create a new message.
 */
export declare const TargetPrioritySchema: GenMessage<TargetPriority>;

/**
 * Describes whether something is a high value target or not.
 *
 * @generated from message anduril.entitymanager.v1.HighValueTarget
 */
export declare type HighValueTarget = Message<"anduril.entitymanager.v1.HighValueTarget"> & {
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
};

/**
 * Describes the message anduril.entitymanager.v1.HighValueTarget.
 * Use `create(HighValueTargetSchema)` to create a new message.
 */
export declare const HighValueTargetSchema: GenMessage<HighValueTarget>;

/**
 * @generated from message anduril.entitymanager.v1.HighValueTargetMatch
 */
export declare type HighValueTargetMatch = Message<"anduril.entitymanager.v1.HighValueTargetMatch"> & {
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
};

/**
 * Describes the message anduril.entitymanager.v1.HighValueTargetMatch.
 * Use `create(HighValueTargetMatchSchema)` to create a new message.
 */
export declare const HighValueTargetMatchSchema: GenMessage<HighValueTargetMatch>;

/**
 * Describes whether an entity is a threat or not.
 *
 * @generated from message anduril.entitymanager.v1.Threat
 */
export declare type Threat = Message<"anduril.entitymanager.v1.Threat"> & {
  /**
   * Indicates that the entity has been determined to be a threat.
   *
   * @generated from field: bool is_threat = 1;
   */
  isThreat: boolean;
};

/**
 * Describes the message anduril.entitymanager.v1.Threat.
 * Use `create(ThreatSchema)` to create a new message.
 */
export declare const ThreatSchema: GenMessage<Threat>;

