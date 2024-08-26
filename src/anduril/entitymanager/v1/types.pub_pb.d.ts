// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/types.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The type of alternate id.
 *
 * @generated from enum anduril.entitymanager.v1.AltIdType
 */
export declare enum AltIdType {
  /**
   * @generated from enum value: ALT_ID_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * an Anduril trackId_2
   *
   * @generated from enum value: ALT_ID_TYPE_TRACK_ID_2 = 1;
   */
  TRACK_ID_2 = 1,

  /**
   * an Anduril trackId_1
   *
   * @generated from enum value: ALT_ID_TYPE_TRACK_ID_1 = 12;
   */
  TRACK_ID_1 = 12,

  /**
   * an Anduril Sensor Point of Interest ID
   *
   * @generated from enum value: ALT_ID_TYPE_SPI_ID = 2;
   */
  SPI_ID = 2,

  /**
   * NITF file title
   *
   * @generated from enum value: ALT_ID_TYPE_NITF_FILE_TITLE = 3;
   */
  NITF_FILE_TITLE = 3,

  /**
   * Track repo alert ID
   *
   * @generated from enum value: ALT_ID_TYPE_TRACK_REPO_ALERT_ID = 4;
   */
  TRACK_REPO_ALERT_ID = 4,

  /**
   * an Anduril AssetId
   *
   * @generated from enum value: ALT_ID_TYPE_ASSET_ID = 5;
   */
  ASSET_ID = 5,

  /**
   * deprecated, do not use
   *
   * @generated from enum value: ALT_ID_TYPE_LINK16_TRACK_NUMBER = 6 [deprecated = true];
   * @deprecated
   */
  LINK16_TRACK_NUMBER = 6,

  /**
   * a Link 16 track number. This will allow a link 16 asset (STN) or track (RefTN) to be identified.
   *
   * @generated from enum value: ALT_ID_TYPE_LINK16_JU = 7;
   */
  LINK16_JU = 7,

  /**
   * an NCCT message ID
   *
   * @generated from enum value: ALT_ID_TYPE_NCCT_MESSAGE_ID = 8;
   */
  NCCT_MESSAGE_ID = 8,

  /**
   * callsign for the entity. e.g. a TAK callsign or an aircraft callsign
   *
   * @generated from enum value: ALT_ID_TYPE_CALLSIGN = 9;
   */
  CALLSIGN = 9,

  /**
   * the Maritime Mobile Service Identity for a maritime object (vessel, offshore installation, etc.)
   *
   * @generated from enum value: ALT_ID_TYPE_MMSI_ID = 10;
   */
  MMSI_ID = 10,

  /**
   * A VMF URN that uniquely identifies the URN on the VMF network.
   *
   * @generated from enum value: ALT_ID_TYPE_VMF_URN = 11;
   */
  VMF_URN = 11,

  /**
   * the International Maritime Organization number for identifying maritime objects (vessel, offshore installation, etc.)
   *
   * @generated from enum value: ALT_ID_TYPE_IMO_ID = 13;
   */
  IMO_ID = 13,

  /**
   * A VMF target number that uniquely identifies the target on the VMF network
   *
   * @generated from enum value: ALT_ID_TYPE_VMF_TARGET_NUMBER = 14;
   */
  VMF_TARGET_NUMBER = 14,

  /**
   * A serial number that uniquely identifies the entity and is permanently associated with only one entity. This
   * identifier is assigned by some authority and only ever identifies a single thing. Examples include a
   * Vehicle Identification Number (VIN) or ship hull identification number (hull number). This is a generalized
   * component and should not be used if a more specific registration type is already defined (i.e., ALT_ID_TYPE_VMF_URN).
   *
   * @generated from enum value: ALT_ID_TYPE_SERIAL_NUMBER = 15;
   */
  SERIAL_NUMBER = 15,

  /**
   * A registration identifier assigned by a local or national authority. This identifier is not permanently fixed
   * to one specific entity and may be reassigned on change of ownership, destruction, or other conditions set
   * forth by the authority. Examples include a vehicle license plate or aircraft tail number. This is a generalized
   * component and should not be used if a more specific registration type is already defined (i.e., ALT_ID_TYPE_IMO_ID).
   *
   * @generated from enum value: ALT_ID_TYPE_REGISTRATION_ID = 16;
   */
  REGISTRATION_ID = 16,

  /**
   * Integrated Broadcast Service Common Message Format Global Identifier
   *
   * @generated from enum value: ALT_ID_TYPE_IBS_GID = 17;
   */
  IBS_GID = 17,

  /**
   * Department of Defense Activity Address Code uniquely identifies a unit, activity, or organization with the DoDAAD. A single unit could have multiple DoDAACs
   *
   * @generated from enum value: ALT_ID_TYPE_DODAAC = 18;
   */
  DODAAC = 18,

  /**
   * Unit Identification Code uniquely identifies each US Department of Defense entity
   *
   * @generated from enum value: ALT_ID_TYPE_UIC = 19;
   */
  UIC = 19,

  /**
   * A NORAD Satellite Catalog Number, a 9-digit number uniquely representing orbital objects around Earth. This is
   * the standard ID used for satellites by the DOD.
   * Note that there is ongoing work to replace the 9-digit number with a 9-digit alphanumeric sequence to accommodate
   * ever-increasing numbers of satellites (and space debris). Treat the accompanied ID field as alphanumeric instead
   * of strictly numeric.
   *
   * @generated from enum value: ALT_ID_TYPE_NORAD_CAT_ID = 20;
   */
  NORAD_CAT_ID = 20,

  /**
   * Space object name. If populated, use names from the UN Office
   * of Outer Space Affairs designator index, otherwise set field to UNKNOWN.
   *
   * @generated from enum value: ALT_ID_TYPE_UNOOSA_NAME = 23;
   */
  UNOOSA_NAME = 23,

  /**
   * Space object identifier. If populated, use the international spacecraft designator
   * as published in the UN Office of Outer Space Affairs designator index, otherwise set to UNKNOWN.
   * Recommended values have the format YYYYNNNP{PP}, where:
   *  YYYY = Year of launch.
   *  NNN = Three-digit serial number of launch
   *  in year YYYY (with leading zeros).
   *  P{PP} = At least one capital letter for the
   *  identification of the part brought
   *  into space by the launch.
   *
   * @generated from enum value: ALT_ID_TYPE_UNOOSA_ID = 24;
   */
  UNOOSA_ID = 24,
}

/**
 * Set of possible templates used when creating an entity.
 * This impacts minimum required component sets and can be used by edge systems that need to distinguish.
 *
 * @generated from enum anduril.entitymanager.v1.Template
 */
export declare enum Template {
  /**
   * @generated from enum value: TEMPLATE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * additional track required components:
   *   * location
   *   * mil_view
   *
   * @generated from enum value: TEMPLATE_TRACK = 1;
   */
  TRACK = 1,

  /**
   * additional SPI required components:
   *   * location
   *   * mil_view
   *   * produced_by
   *
   * @generated from enum value: TEMPLATE_SENSOR_POINT_OF_INTEREST = 2;
   */
  SENSOR_POINT_OF_INTEREST = 2,

  /**
   * additional asset required components:
   *   * location
   *   * mil_view
   *   * ontology
   *
   * @generated from enum value: TEMPLATE_ASSET = 3;
   */
  ASSET = 3,

  /**
   * additional geo required components:
   *   * geo_shape
   *   * geo_details
   *
   * @generated from enum value: TEMPLATE_GEO = 4;
   */
  GEO = 4,

  /**
   * additional SOI required components:
   *   * signal
   *   * location field should be populated if there is a fix.
   *   * mil_view
   *   * ontology
   *
   * @generated from enum value: TEMPLATE_SIGNAL_OF_INTEREST = 5;
   */
  SIGNAL_OF_INTEREST = 5,
}

/**
 * The source (provenance) of data.
 *
 * @generated from enum anduril.entitymanager.v1.Source
 */
export declare enum Source {
  /**
   * @generated from enum value: SOURCE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: SOURCE_ANDURIL = 1;
   */
  ANDURIL = 1,

  /**
   * @generated from enum value: SOURCE_LINK_16 = 2;
   */
  LINK_16 = 2,

  /**
   * @generated from enum value: SOURCE_VMF = 3;
   */
  VMF = 3,

  /**
   * @generated from enum value: SOURCE_ADSB = 4;
   */
  ADSB = 4,

  /**
   * @generated from enum value: SOURCE_CURSOR_ON_TARGET = 5;
   */
  CURSOR_ON_TARGET = 5,

  /**
   * @generated from enum value: SOURCE_MAXAR = 6;
   */
  MAXAR = 6,

  /**
   * @generated from enum value: SOURCE_MARTAC = 7;
   */
  MARTAC = 7,

  /**
   * @generated from enum value: SOURCE_SAILDRONE = 8;
   */
  SAILDRONE = 8,

  /**
   * @generated from enum value: SOURCE_HE_360 = 9;
   */
  HE_360 = 9,

  /**
   * @generated from enum value: SOURCE_OFX = 10;
   */
  OFX = 10,

  /**
   * @generated from enum value: SOURCE_BAS_T = 11;
   */
  BAS_T = 11,

  /**
   * @generated from enum value: SOURCE_KINETICA = 12;
   */
  KINETICA = 12,

  /**
   * @generated from enum value: SOURCE_USER = 13;
   */
  USER = 13,

  /**
   * @generated from enum value: SOURCE_NCCT = 14;
   */
  NCCT = 14,

  /**
   * @generated from enum value: SOURCE_AIS = 15;
   */
  AIS = 15,

  /**
   * @generated from enum value: SOURCE_KLV = 16;
   */
  KLV = 16,

  /**
   * @generated from enum value: SOURCE_NITF = 17;
   */
  NITF = 17,

  /**
   * @generated from enum value: SOURCE_TAK = 18;
   */
  TAK = 18,

  /**
   * @generated from enum value: SOURCE_SPIRE_AIS = 19;
   */
  SPIRE_AIS = 19,

  /**
   * @generated from enum value: SOURCE_SEFI = 20;
   */
  SEFI = 20,

  /**
   * @generated from enum value: SOURCE_ADSB_EXCHANGE = 21;
   */
  ADSB_EXCHANGE = 21,

  /**
   * @generated from enum value: SOURCE_LIVE_UA_MAP = 22;
   */
  LIVE_UA_MAP = 22,

  /**
   * @generated from enum value: SOURCE_CRUCIBLE = 23;
   */
  CRUCIBLE = 23,

  /**
   * @generated from enum value: SOURCE_IBS = 24;
   */
  IBS = 24,

  /**
   * @generated from enum value: SOURCE_ADVANA = 25;
   */
  ADVANA = 25,

  /**
   * @generated from enum value: SOURCE_THRESHER = 26;
   */
  THRESHER = 26,

  /**
   * @generated from enum value: SOURCE_SEATRACKS = 27;
   */
  SEATRACKS = 27,

  /**
   * @generated from enum value: SOURCE_TASS = 28;
   */
  TASS = 28,

  /**
   * @generated from enum value: SOURCE_SMART_SENSOR = 30;
   */
  SMART_SENSOR = 30,

  /**
   * @generated from enum value: SOURCE_STRIVEWORKS = 31;
   */
  STRIVEWORKS = 31,

  /**
   * @generated from enum value: SOURCE_L3H_THEIA = 32;
   */
  L3H_THEIA = 32,

  /**
   * @generated from enum value: SOURCE_TALON_POWDERHORN = 33;
   */
  TALON_POWDERHORN = 33,

  /**
   * @generated from enum value: SOURCE_IDT_VIRTUAL_TWIN = 34;
   */
  IDT_VIRTUAL_TWIN = 34,

  /**
   * @generated from enum value: SOURCE_MISSION_AUTONOMY = 35;
   */
  MISSION_AUTONOMY = 35,

  /**
   * @generated from enum value: SOURCE_GCCS = 36;
   */
  GCCS = 36,

  /**
   * @generated from enum value: SOURCE_FOUNDRY = 37;
   */
  FOUNDRY = 37,

  /**
   * @generated from enum value: SOURCE_MIDB = 38;
   */
  MIDB = 38,

  /**
   * @generated from enum value: SOURCE_FOM = 39;
   */
  FOM = 39,

  /**
   * @generated from enum value: SOURCE_GALE = 40;
   */
  GALE = 40,
}

/**
 * The state of an override.
 *
 * @generated from enum anduril.entitymanager.v1.OverrideStatus
 */
export declare enum OverrideStatus {
  /**
   * @generated from enum value: OVERRIDE_STATUS_INVALID = 0;
   */
  INVALID = 0,

  /**
   * the override was applied to the entity.
   *
   * @generated from enum value: OVERRIDE_STATUS_APPLIED = 1;
   */
  APPLIED = 1,

  /**
   * the override is pending action.
   *
   * @generated from enum value: OVERRIDE_STATUS_PENDING = 2;
   */
  PENDING = 2,

  /**
   * the override has been timed out.
   *
   * @generated from enum value: OVERRIDE_STATUS_TIMEOUT = 3;
   */
  TIMEOUT = 3,

  /**
   * the override has been rejected
   *
   * @generated from enum value: OVERRIDE_STATUS_REJECTED = 4;
   */
  REJECTED = 4,

  /**
   * The override is pending deletion.
   *
   * @generated from enum value: OVERRIDE_STATUS_DELETION_PENDING = 5;
   */
  DELETION_PENDING = 5,
}

/**
 * @generated from enum anduril.entitymanager.v1.OverrideType
 */
export declare enum OverrideType {
  /**
   * The override type value was not set. This value is interpreted as OVERRIDE_TYPE_LIVE for backward compatibility.
   *
   * @generated from enum value: OVERRIDE_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * Override was requested when the entity was live according to the Entity Manager instance that handled the request.
   *
   * @generated from enum value: OVERRIDE_TYPE_LIVE = 1;
   */
  LIVE = 1,

  /**
   * Override was requested after the entity expired according to the Entity Manager instance that handled the request.
   *
   * @generated from enum value: OVERRIDE_TYPE_POST_EXPIRY = 2;
   */
  POST_EXPIRY = 2,
}

/**
 * @generated from message anduril.entitymanager.v1.UInt32Range
 */
export declare class UInt32Range extends Message<UInt32Range> {
  /**
   * @generated from field: uint32 lower_bound = 1;
   */
  lowerBound: number;

  /**
   * @generated from field: uint32 upper_bound = 2;
   */
  upperBound: number;

  constructor(data?: PartialMessage<UInt32Range>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.UInt32Range";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UInt32Range;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UInt32Range;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UInt32Range;

  static equals(a: UInt32Range | PlainMessage<UInt32Range> | undefined, b: UInt32Range | PlainMessage<UInt32Range> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.FloatRange
 */
export declare class FloatRange extends Message<FloatRange> {
  /**
   * @generated from field: float lower_bound = 1;
   */
  lowerBound: number;

  /**
   * @generated from field: float upper_bound = 2;
   */
  upperBound: number;

  constructor(data?: PartialMessage<FloatRange>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.FloatRange";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FloatRange;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FloatRange;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FloatRange;

  static equals(a: FloatRange | PlainMessage<FloatRange> | undefined, b: FloatRange | PlainMessage<FloatRange> | undefined): boolean;
}

