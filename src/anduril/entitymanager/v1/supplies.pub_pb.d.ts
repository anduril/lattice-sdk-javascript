// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/supplies.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Classification } from "./classification.pub_pb.js";

/**
 * DOD Condition Codes as documented: DLM 4000.25, Volume 2, April 09, 2022 Change 14. located at https://www.dla.mil/Defense-Data-Standards/Publications/Appendices/
 * Please refer to the DLM reference for more details about each condition code
 *
 * @generated from enum anduril.entitymanager.v1.DODConditionCode
 */
export declare enum DODConditionCode {
  /**
   * @generated from enum value: DOD_CONDITION_CODE_INVALID = 0;
   */
  DOD_CONDITION_CODE_INVALID = 0,

  /**
   * Serviceable issuable without qualification (i.e., ready for use)
   *
   * @generated from enum value: DOD_CONDITION_CODE_A = 1;
   */
  DOD_CONDITION_CODE_A = 1,

  /**
   * Serviceable issuable with qualification  (e.g., limited shelf life)
   *
   * @generated from enum value: DOD_CONDITION_CODE_B = 2;
   */
  DOD_CONDITION_CODE_B = 2,

  /**
   * Serviceable priority issue (i.e., use before A or B)
   *
   * @generated from enum value: DOD_CONDITION_CODE_C = 3;
   */
  DOD_CONDITION_CODE_C = 3,

  /**
   * Serviceable (requires test or modification)
   *
   * @generated from enum value: DOD_CONDITION_CODE_D = 4;
   */
  DOD_CONDITION_CODE_D = 4,

  /**
   * Unserviceable but limited restoration required
   *
   * @generated from enum value: DOD_CONDITION_CODE_E = 5;
   */
  DOD_CONDITION_CODE_E = 5,

  /**
   * Unserviceable Repairable (i.e., requires repair before ready for use)
   *
   * @generated from enum value: DOD_CONDITION_CODE_F = 6;
   */
  DOD_CONDITION_CODE_F = 6,

  /**
   * Unserviceable Incomplete (needs add't parts)
   *
   * @generated from enum value: DOD_CONDITION_CODE_G = 7;
   */
  DOD_CONDITION_CODE_G = 7,

  /**
   * Unserviceable (Condemned; requires classification or analysis)
   *
   * @generated from enum value: DOD_CONDITION_CODE_H = 8;
   */
  DOD_CONDITION_CODE_H = 8,

  /**
   * Suspended (Product Deficiency)
   *
   * @generated from enum value: DOD_CONDITION_CODE_Q = 9;
   */
  DOD_CONDITION_CODE_Q = 9,

  /**
   * Scrap. Materiel that has no value except for its basic materiel content
   *
   * @generated from enum value: DOD_CONDITION_CODE_S = 10;
   */
  DOD_CONDITION_CODE_S = 10,

  /**
   * Suspended (In Stock; requires classification or analysis)
   *
   * @generated from enum value: DOD_CONDITION_CODE_J = 11;
   */
  DOD_CONDITION_CODE_J = 11,

  /**
   * Suspended (Returns)
   *
   * @generated from enum value: DOD_CONDITION_CODE_K = 12;
   */
  DOD_CONDITION_CODE_K = 12,

  /**
   * Suspended (Litigation)
   *
   * @generated from enum value: DOD_CONDITION_CODE_L = 13;
   */
  DOD_CONDITION_CODE_L = 13,

  /**
   * Suspended (In work; undergoing maintenance)
   *
   * @generated from enum value: DOD_CONDITION_CODE_M = 14;
   */
  DOD_CONDITION_CODE_M = 14,

  /**
   * Suspended (Ammunition Suitable for Emergency Combat Use Only)
   *
   * @generated from enum value: DOD_CONDITION_CODE_N = 15;
   */
  DOD_CONDITION_CODE_N = 15,

  /**
   * Unserviceable (Contains parts that could be reclaimed)
   *
   * @generated from enum value: DOD_CONDITION_CODE_P = 16;
   */
  DOD_CONDITION_CODE_P = 16,

  /**
   * Suspended (Reclaimed items, awaiting condition determination)
   *
   * @generated from enum value: DOD_CONDITION_CODE_R = 17;
   */
  DOD_CONDITION_CODE_R = 17,

  /**
   * Serviceable (Ammunition Suitable for Training Use Only)
   *
   * @generated from enum value: DOD_CONDITION_CODE_T = 18;
   */
  DOD_CONDITION_CODE_T = 18,

  /**
   * Unserviceable (waste military munitions)
   *
   * @generated from enum value: DOD_CONDITION_CODE_V = 19;
   */
  DOD_CONDITION_CODE_V = 19,

  /**
   * Suspended (repair decision delayed)
   *
   * @generated from enum value: DOD_CONDITION_CODE_X = 20;
   */
  DOD_CONDITION_CODE_X = 20,
}

/**
 * Represents the state of supplies associated with an entity (available but not in condition to use immediately)
 *
 * @generated from message anduril.entitymanager.v1.Supplies
 */
export declare class Supplies extends Message<Supplies> {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.Munition munitions = 1;
   */
  munitions: Munition[];

  /**
   * @generated from field: repeated anduril.entitymanager.v1.Fuel fuel = 2;
   */
  fuel: Fuel[];

  constructor(data?: PartialMessage<Supplies>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Supplies";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Supplies;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Supplies;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Supplies;

  static equals(a: Supplies | PlainMessage<Supplies> | undefined, b: Supplies | PlainMessage<Supplies> | undefined): boolean;
}

/**
 * Munition describes an entity's munitions stores of a similar condition, classification, and quantity
 *
 * @generated from message anduril.entitymanager.v1.Munition
 */
export declare class Munition extends Message<Munition> {
  /**
   * unique munition identifier (for the DoD would be called a munition code. e.g., AGM-114 for the AGM-114 Hellfire missile)
   * no "componentIdentifier" field option included. It may be possible munitions with the same identifier (e.g., AGM-114)
   * but different condition codes or quantities (e.g., qty 4 in condition A but qty 2 in condition F) are included in the
   * repeated munitions field of the supplies message.
   *
   * @generated from field: string munition_id = 1;
   */
  munitionId: string;

  /**
   * long form name of the munition (e.g., AGM-114 Hellfire)
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * condition of the munitions (maintained as a "oneof" condition to accommodate future non-DoD specific condition identifiers)
   *
   * @generated from oneof anduril.entitymanager.v1.Munition.condition
   */
  condition: {
    /**
     * status of the munition (U.S. DoD Specific)
     *
     * @generated from field: anduril.entitymanager.v1.DODConditionCode dod_condition_code = 3;
     */
    value: DODConditionCode;
    case: "dodConditionCode";
  } | { case: undefined; value?: undefined };

  /**
   * number of units
   *
   * @generated from field: uint32 quantity_units = 4;
   */
  quantityUnits: number;

  /**
   * munitions in a single asset may have different levels of classification
   * use case: nukes on ballistic missile submarine may be TS/SCI while torpedoes may be SECRET
   *
   * @generated from field: anduril.entitymanager.v1.Classification data_classification = 5;
   */
  dataClassification?: Classification;

  /**
   * source of information
   *
   * @generated from field: string data_source = 6;
   */
  dataSource: string;

  constructor(data?: PartialMessage<Munition>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Munition";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Munition;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Munition;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Munition;

  static equals(a: Munition | PlainMessage<Munition> | undefined, b: Munition | PlainMessage<Munition> | undefined): boolean;
}

/**
 * Fuel describes an entity's repository of fuels stores including current amount, operational requirements, and maximum authorized capacity
 *
 * @generated from message anduril.entitymanager.v1.Fuel
 */
export declare class Fuel extends Message<Fuel> {
  /**
   * unique munition identifier (for the DoD would be called a munition code. e.g., AGM-114 for the AGM-114 Hellfire missile)
   *
   * @generated from field: string fuel_id = 1;
   */
  fuelId: string;

  /**
   * long form name of the munition (e.g., AGM-114 Hellfire)
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * timestamp the information was reported
   *
   * @generated from field: google.protobuf.Timestamp reported_date = 3;
   */
  reportedDate?: Timestamp;

  /**
   * amount on hand of the unit of measure
   *
   * @generated from field: uint32 amount_gallons = 4;
   */
  amountGallons: number;

  /**
   * how much the asset is allowed to have available (in gallons)
   *
   * @generated from field: uint32 max_authorized_capacity_gallons = 5;
   */
  maxAuthorizedCapacityGallons: number;

  /**
   * minimum required for operations (in gallons)
   *
   * @generated from field: uint32 operational_requirement_gallons = 6;
   */
  operationalRequirementGallons: number;

  /**
   * fuel in a single asset may have different levels of classification
   * use case: fuel for a SECRET asset while diesel fuel may be UNCLASSIFIED
   *
   * @generated from field: anduril.entitymanager.v1.Classification data_classification = 7;
   */
  dataClassification?: Classification;

  /**
   * source of information
   *
   * @generated from field: string data_source = 8;
   */
  dataSource: string;

  constructor(data?: PartialMessage<Fuel>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Fuel";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fuel;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fuel;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fuel;

  static equals(a: Fuel | PlainMessage<Fuel> | undefined, b: Fuel | PlainMessage<Fuel> | undefined): boolean;
}
