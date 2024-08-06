// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/payloads.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Environment } from "../../ontology/v1/type.pub_pb.js";

/**
 * Describes the current operational state of a payload configuration.
 *
 * @generated from enum anduril.entitymanager.v1.PayloadOperationalState
 */
export declare enum PayloadOperationalState {
  /**
   * @generated from enum value: PAYLOAD_OPERATIONAL_STATE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: PAYLOAD_OPERATIONAL_STATE_OFF = 1;
   */
  OFF = 1,

  /**
   * @generated from enum value: PAYLOAD_OPERATIONAL_STATE_NON_OPERATIONAL = 2;
   */
  NON_OPERATIONAL = 2,

  /**
   * @generated from enum value: PAYLOAD_OPERATIONAL_STATE_DEGRADED = 3;
   */
  DEGRADED = 3,

  /**
   * @generated from enum value: PAYLOAD_OPERATIONAL_STATE_OPERATIONAL = 4;
   */
  OPERATIONAL = 4,

  /**
   * @generated from enum value: PAYLOAD_OPERATIONAL_STATE_OUT_OF_SERVICE = 5;
   */
  OUT_OF_SERVICE = 5,

  /**
   * @generated from enum value: PAYLOAD_OPERATIONAL_STATE_UNKNOWN = 6;
   */
  UNKNOWN = 6,
}

/**
 * List of payloads available for an entity. i.e a weapon.
 *
 * @generated from message anduril.entitymanager.v1.Payloads
 */
export declare class Payloads extends Message<Payloads> {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.Payload payload_configurations = 1;
   */
  payloadConfigurations: Payload[];

  constructor(data?: PartialMessage<Payloads>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Payloads";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Payloads;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Payloads;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Payloads;

  static equals(a: Payloads | PlainMessage<Payloads> | undefined, b: Payloads | PlainMessage<Payloads> | undefined): boolean;
}

/**
 * Individual payload configuration.
 *
 * @generated from message anduril.entitymanager.v1.Payload
 */
export declare class Payload extends Message<Payload> {
  /**
   * @generated from field: anduril.entitymanager.v1.PayloadConfiguration config = 1;
   */
  config?: PayloadConfiguration;

  constructor(data?: PartialMessage<Payload>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Payload";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Payload;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Payload;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Payload;

  static equals(a: Payload | PlainMessage<Payload> | undefined, b: Payload | PlainMessage<Payload> | undefined): boolean;
}

/**
 * The configuration for this capability, published on the CAPABILITY_TOPIC_PAYLOAD_CONFIGURATION topic id.
 *
 * @generated from message anduril.entitymanager.v1.PayloadConfiguration
 */
export declare class PayloadConfiguration extends Message<PayloadConfiguration> {
  /**
   * Identifying ID for the capability.
   * This ID may be used multiple times to represent payloads that are the same capability but have different operational states
   *
   * @generated from field: string capability_id = 1;
   */
  capabilityId: string;

  /**
   * The number of payloads currently available in the configuration.
   *
   * @generated from field: uint32 quantity = 4;
   */
  quantity: number;

  /**
   * The target environments the configuration is effective against.
   *
   * @generated from field: repeated anduril.ontology.v1.Environment effective_environment = 5;
   */
  effectiveEnvironment: Environment[];

  /**
   * The operational state of this payload.
   *
   * @generated from field: anduril.entitymanager.v1.PayloadOperationalState payload_operational_state = 6;
   */
  payloadOperationalState: PayloadOperationalState;

  /**
   * A human readable description of the payload
   *
   * @generated from field: string payload_description = 7;
   */
  payloadDescription: string;

  constructor(data?: PartialMessage<PayloadConfiguration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.PayloadConfiguration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayloadConfiguration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayloadConfiguration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayloadConfiguration;

  static equals(a: PayloadConfiguration | PlainMessage<PayloadConfiguration> | undefined, b: PayloadConfiguration | PlainMessage<PayloadConfiguration> | undefined): boolean;
}
