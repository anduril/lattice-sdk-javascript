// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/communicationsmanager/v1/integration.pub.proto (package anduril.communicationsmanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EntityIntegrationDetails } from "./entity.pub_pb.js";
import type { BlobsIntegrationDetails } from "./blobs.pub_pb.js";
import type { EventType } from "./common.pub_pb.js";

/**
 * @generated from enum anduril.communicationsmanager.v1.IntegrationHealthStatus
 */
export declare enum IntegrationHealthStatus {
  /**
   * @generated from enum value: INTEGRATION_HEALTH_STATUS_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: INTEGRATION_HEALTH_STATUS_UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * @generated from enum value: INTEGRATION_HEALTH_STATUS_HEALTHY = 2;
   */
  HEALTHY = 2,

  /**
   * @generated from enum value: INTEGRATION_HEALTH_STATUS_UNHEALTHY = 3;
   */
  UNHEALTHY = 3,
}

/**
 * @generated from message anduril.communicationsmanager.v1.RegisterIntegrationRequest
 */
export declare class RegisterIntegrationRequest extends Message<RegisterIntegrationRequest> {
  /**
   * Identifying name for the integration. This must be unique on the local node.
   *
   * @generated from field: string integration_name = 1;
   */
  integrationName: string;

  /**
   * Specifies the registered data_types and health for the integration.
   *
   * @generated from field: anduril.communicationsmanager.v1.IntegrationDetails details = 2;
   */
  details?: IntegrationDetails;

  constructor(data?: PartialMessage<RegisterIntegrationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.RegisterIntegrationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterIntegrationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterIntegrationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterIntegrationRequest;

  static equals(a: RegisterIntegrationRequest | PlainMessage<RegisterIntegrationRequest> | undefined, b: RegisterIntegrationRequest | PlainMessage<RegisterIntegrationRequest> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.RegisteredIntegration
 */
export declare class RegisteredIntegration extends Message<RegisteredIntegration> {
  /**
   * Identifies the integration. Must be unique for the node, meaning integration_name + node_id is globally unique.
   *
   * @generated from field: string integration_name = 1;
   */
  integrationName: string;

  /**
   * The id of the node that owns this integration.
   *
   * @generated from field: string node_id = 2;
   */
  nodeId: string;

  /**
   * The version of this registered integration. Set internally by CM, not to be used externally.
   *
   * @generated from field: int64 version_num = 4;
   */
  versionNum: bigint;

  /**
   * Specifies the registered data_types and health for the integration.
   *
   * @generated from field: anduril.communicationsmanager.v1.IntegrationDetails integration_details = 3;
   */
  integrationDetails?: IntegrationDetails;

  /**
   * Health of this integration
   *
   * @generated from field: anduril.communicationsmanager.v1.IntegrationHealthState health_state = 5;
   */
  healthState?: IntegrationHealthState;

  constructor(data?: PartialMessage<RegisteredIntegration>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.RegisteredIntegration";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisteredIntegration;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisteredIntegration;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisteredIntegration;

  static equals(a: RegisteredIntegration | PlainMessage<RegisteredIntegration> | undefined, b: RegisteredIntegration | PlainMessage<RegisteredIntegration> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.IntegrationDetails
 */
export declare class IntegrationDetails extends Message<IntegrationDetails> {
  /**
   * @generated from field: anduril.communicationsmanager.v1.EntityIntegrationDetails entity_details = 1;
   */
  entityDetails?: EntityIntegrationDetails;

  /**
   * @generated from field: anduril.communicationsmanager.v1.BlobsIntegrationDetails blob_details = 2;
   */
  blobDetails?: BlobsIntegrationDetails;

  constructor(data?: PartialMessage<IntegrationDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.IntegrationDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntegrationDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntegrationDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntegrationDetails;

  static equals(a: IntegrationDetails | PlainMessage<IntegrationDetails> | undefined, b: IntegrationDetails | PlainMessage<IntegrationDetails> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.DeregisterIntegrationRequest
 */
export declare class DeregisterIntegrationRequest extends Message<DeregisterIntegrationRequest> {
  /**
   * Identifier for the integration. The integration_name + node_id is globally unique.
   *
   * @generated from field: string integration_name = 1;
   */
  integrationName: string;

  /**
   * Unique identifier for the node that the integration is registered under.
   *
   * @generated from field: string node_id = 2;
   */
  nodeId: string;

  constructor(data?: PartialMessage<DeregisterIntegrationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.DeregisterIntegrationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeregisterIntegrationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeregisterIntegrationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeregisterIntegrationRequest;

  static equals(a: DeregisterIntegrationRequest | PlainMessage<DeregisterIntegrationRequest> | undefined, b: DeregisterIntegrationRequest | PlainMessage<DeregisterIntegrationRequest> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.DeregisterIntegrationResponse
 */
export declare class DeregisterIntegrationResponse extends Message<DeregisterIntegrationResponse> {
  constructor(data?: PartialMessage<DeregisterIntegrationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.DeregisterIntegrationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeregisterIntegrationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeregisterIntegrationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeregisterIntegrationResponse;

  static equals(a: DeregisterIntegrationResponse | PlainMessage<DeregisterIntegrationResponse> | undefined, b: DeregisterIntegrationResponse | PlainMessage<DeregisterIntegrationResponse> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.GetIntegrationsRequest
 */
export declare class GetIntegrationsRequest extends Message<GetIntegrationsRequest> {
  /**
   * String of node ids. If no nodes are specified, integrations for all nodes are returned.
   *
   * @generated from field: repeated string nodes = 1;
   */
  nodes: string[];

  constructor(data?: PartialMessage<GetIntegrationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.GetIntegrationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetIntegrationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetIntegrationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetIntegrationsRequest;

  static equals(a: GetIntegrationsRequest | PlainMessage<GetIntegrationsRequest> | undefined, b: GetIntegrationsRequest | PlainMessage<GetIntegrationsRequest> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.GetIntegrationsResponse
 */
export declare class GetIntegrationsResponse extends Message<GetIntegrationsResponse> {
  /**
   * Contains the registered integration data
   *
   * @generated from field: repeated anduril.communicationsmanager.v1.RegisteredIntegration integration = 1;
   */
  integration: RegisteredIntegration[];

  constructor(data?: PartialMessage<GetIntegrationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.GetIntegrationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetIntegrationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetIntegrationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetIntegrationsResponse;

  static equals(a: GetIntegrationsResponse | PlainMessage<GetIntegrationsResponse> | undefined, b: GetIntegrationsResponse | PlainMessage<GetIntegrationsResponse> | undefined): boolean;
}

/**
 * Return all integrations registered with the system, regardless of which node they
 * are registered with.
 *
 * @generated from message anduril.communicationsmanager.v1.AllNodes
 */
export declare class AllNodes extends Message<AllNodes> {
  constructor(data?: PartialMessage<AllNodes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.AllNodes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllNodes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllNodes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllNodes;

  static equals(a: AllNodes | PlainMessage<AllNodes> | undefined, b: AllNodes | PlainMessage<AllNodes> | undefined): boolean;
}

/**
 * Return all integrations registered to the local communications-manager instance.
 *
 * @generated from message anduril.communicationsmanager.v1.LocalNode
 */
export declare class LocalNode extends Message<LocalNode> {
  constructor(data?: PartialMessage<LocalNode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.LocalNode";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocalNode;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocalNode;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocalNode;

  static equals(a: LocalNode | PlainMessage<LocalNode> | undefined, b: LocalNode | PlainMessage<LocalNode> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.StreamIntegrationsRequest
 */
export declare class StreamIntegrationsRequest extends Message<StreamIntegrationsRequest> {
  /**
   * Determines which integrations to stream according to their owner and the
   * requested specification.
   *
   * @generated from oneof anduril.communicationsmanager.v1.StreamIntegrationsRequest.owner_filter
   */
  ownerFilter: {
    /**
     * @generated from field: anduril.communicationsmanager.v1.AllNodes all_nodes = 1;
     */
    value: AllNodes;
    case: "allNodes";
  } | {
    /**
     * @generated from field: anduril.communicationsmanager.v1.LocalNode local_node = 2;
     */
    value: LocalNode;
    case: "localNode";
  } | { case: undefined; value?: undefined };

  /**
   * Close the stream after sending all currently existing integrations. Set this
   * to false to have a long-lived stream.
   *
   * @generated from field: bool preexisting_only = 3;
   */
  preexistingOnly: boolean;

  constructor(data?: PartialMessage<StreamIntegrationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.StreamIntegrationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamIntegrationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamIntegrationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamIntegrationsRequest;

  static equals(a: StreamIntegrationsRequest | PlainMessage<StreamIntegrationsRequest> | undefined, b: StreamIntegrationsRequest | PlainMessage<StreamIntegrationsRequest> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.IntegrationEvent
 */
export declare class IntegrationEvent extends Message<IntegrationEvent> {
  /**
   * @generated from field: anduril.communicationsmanager.v1.EventType event_type = 1;
   */
  eventType: EventType;

  /**
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: Timestamp;

  /**
   * @generated from field: anduril.communicationsmanager.v1.RegisteredIntegration integration = 3;
   */
  integration?: RegisteredIntegration;

  constructor(data?: PartialMessage<IntegrationEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.IntegrationEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntegrationEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntegrationEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntegrationEvent;

  static equals(a: IntegrationEvent | PlainMessage<IntegrationEvent> | undefined, b: IntegrationEvent | PlainMessage<IntegrationEvent> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.StreamIntegrationsResponse
 */
export declare class StreamIntegrationsResponse extends Message<StreamIntegrationsResponse> {
  /**
   * @generated from field: anduril.communicationsmanager.v1.IntegrationEvent integration_event = 1;
   */
  integrationEvent?: IntegrationEvent;

  constructor(data?: PartialMessage<StreamIntegrationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.StreamIntegrationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamIntegrationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamIntegrationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamIntegrationsResponse;

  static equals(a: StreamIntegrationsResponse | PlainMessage<StreamIntegrationsResponse> | undefined, b: StreamIntegrationsResponse | PlainMessage<StreamIntegrationsResponse> | undefined): boolean;
}

/**
 * IntegrationHealth
 *
 * @generated from message anduril.communicationsmanager.v1.IntegrationHealthUpdateRequest
 */
export declare class IntegrationHealthUpdateRequest extends Message<IntegrationHealthUpdateRequest> {
  /**
   * name of the integration reporting its health
   *
   * @generated from field: string integration_name = 1;
   */
  integrationName: string;

  /**
   * the health of the integration
   *
   * @generated from field: anduril.communicationsmanager.v1.IntegrationHealthState health_state = 2;
   */
  healthState?: IntegrationHealthState;

  constructor(data?: PartialMessage<IntegrationHealthUpdateRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.IntegrationHealthUpdateRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntegrationHealthUpdateRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntegrationHealthUpdateRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntegrationHealthUpdateRequest;

  static equals(a: IntegrationHealthUpdateRequest | PlainMessage<IntegrationHealthUpdateRequest> | undefined, b: IntegrationHealthUpdateRequest | PlainMessage<IntegrationHealthUpdateRequest> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.IntegrationHealthUpdateResponse
 */
export declare class IntegrationHealthUpdateResponse extends Message<IntegrationHealthUpdateResponse> {
  constructor(data?: PartialMessage<IntegrationHealthUpdateResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.IntegrationHealthUpdateResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntegrationHealthUpdateResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntegrationHealthUpdateResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntegrationHealthUpdateResponse;

  static equals(a: IntegrationHealthUpdateResponse | PlainMessage<IntegrationHealthUpdateResponse> | undefined, b: IntegrationHealthUpdateResponse | PlainMessage<IntegrationHealthUpdateResponse> | undefined): boolean;
}

/**
 * @generated from message anduril.communicationsmanager.v1.IntegrationHealthState
 */
export declare class IntegrationHealthState extends Message<IntegrationHealthState> {
  /**
   * @generated from field: anduril.communicationsmanager.v1.IntegrationHealthStatus health_status = 1;
   */
  healthStatus: IntegrationHealthStatus;

  /**
   * @generated from field: string description = 2;
   */
  description: string;

  constructor(data?: PartialMessage<IntegrationHealthState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.communicationsmanager.v1.IntegrationHealthState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntegrationHealthState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntegrationHealthState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntegrationHealthState;

  static equals(a: IntegrationHealthState | PlainMessage<IntegrationHealthState> | undefined, b: IntegrationHealthState | PlainMessage<IntegrationHealthState> | undefined): boolean;
}

