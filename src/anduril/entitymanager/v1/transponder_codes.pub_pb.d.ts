// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/transponder_codes.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Indicates the interrogation status of a target.
 *
 * @generated from enum anduril.entitymanager.v1.InterrogationResponse
 */
export declare enum InterrogationResponse {
  /**
   * Note that INTERROGATION_INVALID indicates that the target has not been interrogated.
   *
   * @generated from enum value: INTERROGATION_RESPONSE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: INTERROGATION_RESPONSE_CORRECT = 1;
   */
  CORRECT = 1,

  /**
   * @generated from enum value: INTERROGATION_RESPONSE_INCORRECT = 2;
   */
  INCORRECT = 2,

  /**
   * @generated from enum value: INTERROGATION_RESPONSE_NO_RESPONSE = 3;
   */
  NO_RESPONSE = 3,
}

/**
 * A message describing any transponder codes associated with Mode 1, 2, 3, 4, 5, S interrogations.
 *
 * @generated from message anduril.entitymanager.v1.TransponderCodes
 */
export declare class TransponderCodes extends Message<TransponderCodes> {
  /**
   * The mode 1 code assigned to military assets. Mode 1 is a 5-bit decimal (1-31) value. Note that Mode 1 codes are
   * NOT unique. A zero mode code indicates No Statement.
   *
   * @generated from field: uint32 mode1 = 1;
   */
  mode1: number;

  /**
   * The Mode 2 code assigned to military assets. Mode 2 is a 12-bit decimal (1-4095) value. If displaying to a user,
   * convert to 4 digit octal 0001-7777. Note that Mode 2 codes are NOT unique. A zero mode code indicates No Statement.
   *
   * @generated from field: uint32 mode2 = 2;
   */
  mode2: number;

  /**
   * The Mode 3 code assigned by ATC to the asset. Mode 3 is a 12-bit decimal (1-4095) value. If displaying to a user,
   * convert to 4 digit octal 0001-7777. Note that Mode 3 codes are NOT unique. A zero mode code indicates No Statement.
   *
   * @generated from field: uint32 mode3 = 3;
   */
  mode3: number;

  /**
   * The validity of the response from the Mode 4 interrogation.
   *
   * @generated from field: anduril.entitymanager.v1.InterrogationResponse mode4_interrogation_response = 4;
   */
  mode4InterrogationResponse: InterrogationResponse;

  /**
   * The Mode 5 transponder codes.
   *
   * @generated from field: anduril.entitymanager.v1.Mode5 mode5 = 5;
   */
  mode5?: Mode5;

  /**
   * The Mode S transponder codes.
   *
   * @generated from field: anduril.entitymanager.v1.ModeS mode_s = 6;
   */
  modeS?: ModeS;

  constructor(data?: PartialMessage<TransponderCodes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.TransponderCodes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransponderCodes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransponderCodes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransponderCodes;

  static equals(a: TransponderCodes | PlainMessage<TransponderCodes> | undefined, b: TransponderCodes | PlainMessage<TransponderCodes> | undefined): boolean;
}

/**
 * Describes the Mode 5 transponder interrogation status and codes.
 *
 * @generated from message anduril.entitymanager.v1.Mode5
 */
export declare class Mode5 extends Message<Mode5> {
  /**
   * The validity of the response from the Mode 5 interrogation.
   *
   * @generated from field: anduril.entitymanager.v1.InterrogationResponse mode5_interrogation_response = 1;
   */
  mode5InterrogationResponse: InterrogationResponse;

  /**
   * The Mode 5 code assigned to military assets. Mode 5 is a 12-bit decimal (1-4095) value. If displaying to a user,
   * convert to 4 digit octal 0001-7777. Note that Mode 5 codes are NOT unique by themselves, but should be used in
   * conjunction with the Mode 5 platform ID & nationality to provide unique identification.
   * A zero mode code indicates No Statement.
   *
   * @generated from field: uint32 mode5 = 2;
   */
  mode5: number;

  /**
   * The Mode 5 platform identification code. Expected values are between 1 and 16383. Used in conjunction with the
   * Nationality it provides IFF/SIF capabilities.
   * A zero platform id indicates No Statement.
   *
   * @generated from field: uint32 mode5_platform_id = 3;
   */
  mode5PlatformId: number;

  constructor(data?: PartialMessage<Mode5>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Mode5";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Mode5;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Mode5;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Mode5;

  static equals(a: Mode5 | PlainMessage<Mode5> | undefined, b: Mode5 | PlainMessage<Mode5> | undefined): boolean;
}

/**
 * Describes the Mode S codes.
 *
 * @generated from message anduril.entitymanager.v1.ModeS
 */
export declare class ModeS extends Message<ModeS> {
  /**
   * Mode S identifier which comprises of 8 alphanumeric characters.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The Mode S ICAO aircraft address. Expected values are between 1 and 16777214 decimal. The Mode S address is
   * considered unique.
   *
   * @generated from field: uint32 address = 2;
   */
  address: number;

  constructor(data?: PartialMessage<ModeS>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.ModeS";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModeS;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModeS;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModeS;

  static equals(a: ModeS | PlainMessage<ModeS> | undefined, b: ModeS | PlainMessage<ModeS> | undefined): boolean;
}
