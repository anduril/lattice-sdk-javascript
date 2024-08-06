// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/entity_manager_api.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Entity, Provenance } from "./entity.pub_pb.js";
import type { Statement } from "./filter.pub_pb.js";
import type { RateLimit } from "./rate_limit.pub_pb.js";
import type { OverrideStatus } from "./types.pub_pb.js";

/**
 * The type of entity event.
 *
 * @generated from enum anduril.entitymanager.v1.EventType
 */
export declare enum EventType {
  /**
   * @generated from enum value: EVENT_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * entity was created.
   *
   * @generated from enum value: EVENT_TYPE_CREATED = 1;
   */
  CREATED = 1,

  /**
   * entity was updated.
   *
   * @generated from enum value: EVENT_TYPE_UPDATE = 2;
   */
  UPDATE = 2,

  /**
   * entity was deleted.
   *
   * @generated from enum value: EVENT_TYPE_DELETED = 3;
   */
  DELETED = 3,

  /**
   * entity already existed, but sent on a new stream connection.
   *
   * @generated from enum value: EVENT_TYPE_PREEXISTING = 4;
   */
  PREEXISTING = 4,

  /**
   * entity override was set after the entity expiration.
   *
   * @generated from enum value: EVENT_TYPE_POST_EXPIRY_OVERRIDE = 5;
   */
  POST_EXPIRY_OVERRIDE = 5,
}

/**
 * @generated from message anduril.entitymanager.v1.GetEntityRequest
 */
export declare class GetEntityRequest extends Message<GetEntityRequest> {
  /**
   * the GUID of this entity to query
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  constructor(data?: PartialMessage<GetEntityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.GetEntityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEntityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEntityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEntityRequest;

  static equals(a: GetEntityRequest | PlainMessage<GetEntityRequest> | undefined, b: GetEntityRequest | PlainMessage<GetEntityRequest> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.GetEntityResponse
 */
export declare class GetEntityResponse extends Message<GetEntityResponse> {
  /**
   * an Entity object that corresponds with the requested entityId
   *
   * @generated from field: anduril.entitymanager.v1.Entity entity = 1;
   */
  entity?: Entity;

  constructor(data?: PartialMessage<GetEntityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.GetEntityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEntityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEntityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEntityResponse;

  static equals(a: GetEntityResponse | PlainMessage<GetEntityResponse> | undefined, b: GetEntityResponse | PlainMessage<GetEntityResponse> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.StreamEntityComponentsRequest
 */
export declare class StreamEntityComponentsRequest extends Message<StreamEntityComponentsRequest> {
  /**
   * lower_snake_cased component names to include in response events, e.g. location. Only included components will
   * populate.
   *
   * @generated from field: repeated string components_to_include = 1;
   */
  componentsToInclude: string[];

  /**
   * subscribe to all components. This should only be used in cases where you want all components (e.g. latticectl) and
   * if you're using it for other services please reach out first. Setting both components_to_include and
   * include_all_components is invalid and will be rejected.
   *
   * @generated from field: bool include_all_components = 2;
   */
  includeAllComponents: boolean;

  /**
   * The root node of a statement filter "tree".
   * If provided, only entities matching the filter criteria will be streamed. The filter is applied dynamically so if a
   * new entity matches, it will be included, and if an entity updates to no longer match, it will be excluded.
   *
   * @generated from field: anduril.entitymanager.v1.Statement filter = 3;
   */
  filter?: Statement;

  /**
   * optional rate-limiting / down-sampling parameters, see RateLimit message for details.
   *
   * @generated from field: anduril.entitymanager.v1.RateLimit rate_limit = 4;
   */
  rateLimit?: RateLimit;

  /**
   * The period (in milliseconds) at which a Heartbeat message will be sent on the
   * message stream. If this field is set to 0 then no Heartbeat messages are sent.
   *
   * @generated from field: uint32 heartbeat_period_millis = 5;
   */
  heartbeatPeriodMillis: number;

  /**
   * subscribe to a finite stream of preexisting events which closes when there are no additional pre-existing events to
   * process. Respects the filter specified on the StreamEntityComponentsRequest.
   *
   * @generated from field: bool preexisting_only = 6;
   */
  preexistingOnly: boolean;

  constructor(data?: PartialMessage<StreamEntityComponentsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.StreamEntityComponentsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamEntityComponentsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamEntityComponentsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamEntityComponentsRequest;

  static equals(a: StreamEntityComponentsRequest | PlainMessage<StreamEntityComponentsRequest> | undefined, b: StreamEntityComponentsRequest | PlainMessage<StreamEntityComponentsRequest> | undefined): boolean;
}

/**
 * response stream will be fed all matching pre-existing live entities as CREATED, plus any new events ongoing.
 *
 * @generated from message anduril.entitymanager.v1.StreamEntityComponentsResponse
 */
export declare class StreamEntityComponentsResponse extends Message<StreamEntityComponentsResponse> {
  /**
   * @generated from field: anduril.entitymanager.v1.EntityEvent entity_event = 1;
   */
  entityEvent?: EntityEvent;

  /**
   * @generated from field: anduril.entitymanager.v1.Heartbeat heartbeat = 2;
   */
  heartbeat?: Heartbeat;

  constructor(data?: PartialMessage<StreamEntityComponentsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.StreamEntityComponentsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreamEntityComponentsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreamEntityComponentsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreamEntityComponentsResponse;

  static equals(a: StreamEntityComponentsResponse | PlainMessage<StreamEntityComponentsResponse> | undefined, b: StreamEntityComponentsResponse | PlainMessage<StreamEntityComponentsResponse> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.PutEntityRequest
 */
export declare class PutEntityRequest extends Message<PutEntityRequest> {
  /**
   * The entity to put.
   * Required fields:
   *   * expiry_time - must be in the future, but less than 30 days from now
   *   * provenance.data_type
   *   * provenance.source_update_time (can be earlier than rpc call if data entered is older)
   *   * aliases.name
   *   * ontology.template
   * any additional required fields will be determined by template, see com.anduril.entitymanager.v1.Template
   * if an entity_id is provided, will treat as update, otherwise create
   *
   * @generated from field: anduril.entitymanager.v1.Entity entity = 1;
   */
  entity?: Entity;

  /**
   * An optional unique identifier for this entity supplied by integration.
   * If provided, EntityId will be determined via consistent hash with provenance.data_type + unique_id
   *
   * @generated from field: string unique_id = 2;
   */
  uniqueId: string;

  constructor(data?: PartialMessage<PutEntityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.PutEntityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PutEntityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PutEntityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PutEntityRequest;

  static equals(a: PutEntityRequest | PlainMessage<PutEntityRequest> | undefined, b: PutEntityRequest | PlainMessage<PutEntityRequest> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.PutEntityResponse
 */
export declare class PutEntityResponse extends Message<PutEntityResponse> {
  /**
   * The updated entity.
   * Automatically updated fields:
   *   * is_live - always reset to true
   *   * entity_id - new GUID on create
   *   * created_time - set on create
   *
   * @generated from field: anduril.entitymanager.v1.Entity entity = 1;
   */
  entity?: Entity;

  constructor(data?: PartialMessage<PutEntityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.PutEntityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PutEntityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PutEntityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PutEntityResponse;

  static equals(a: PutEntityResponse | PlainMessage<PutEntityResponse> | undefined, b: PutEntityResponse | PlainMessage<PutEntityResponse> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.PublishEntitiesRequest
 */
export declare class PublishEntitiesRequest extends Message<PublishEntitiesRequest> {
  /**
   * Stream of fully formed entities to publish
   * Required fields per entity:
   *   * expiry_time - must be in the future, but less than 30 days from now
   *   * provenance.data_type
   *   * provenance.source_update_time (can be earlier than rpc call if data entered is older)
   *   * aliases.name
   *   * ontology.template
   * any additional required fields will be determined by template, see com.anduril.entitymanager.v1.Template
   * if an entity_id is provided, will treat as update, otherwise create
   *
   * @generated from field: anduril.entitymanager.v1.Entity entity = 1;
   */
  entity?: Entity;

  constructor(data?: PartialMessage<PublishEntitiesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.PublishEntitiesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishEntitiesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishEntitiesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishEntitiesRequest;

  static equals(a: PublishEntitiesRequest | PlainMessage<PublishEntitiesRequest> | undefined, b: PublishEntitiesRequest | PlainMessage<PublishEntitiesRequest> | undefined): boolean;
}

/**
 * After the stream is closed the server will return an empty message indicating success. If any streamed message
 * caused an error then the stream is immediately terminated and an error code is returned.
 *
 * @generated from message anduril.entitymanager.v1.PublishEntitiesResponse
 */
export declare class PublishEntitiesResponse extends Message<PublishEntitiesResponse> {
  constructor(data?: PartialMessage<PublishEntitiesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.PublishEntitiesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublishEntitiesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublishEntitiesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublishEntitiesResponse;

  static equals(a: PublishEntitiesResponse | PlainMessage<PublishEntitiesResponse> | undefined, b: PublishEntitiesResponse | PlainMessage<PublishEntitiesResponse> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.OverrideEntityRequest
 */
export declare class OverrideEntityRequest extends Message<OverrideEntityRequest> {
  /**
   * The entity containing the overwritten fields. The service will extract the overridable fields from the entity
   * object and ignore any other fields.
   *
   * @generated from field: anduril.entitymanager.v1.Entity entity = 1;
   */
  entity?: Entity;

  /**
   * The field paths that will be extracted from the Entity and saved as an override. Only fields marked overridable can
   * be overriden.
   *
   * @generated from field: repeated string field_path = 2;
   */
  fieldPath: string[];

  /**
   * Additional information about the source of the override
   *
   * @generated from field: anduril.entitymanager.v1.Provenance provenance = 3;
   */
  provenance?: Provenance;

  constructor(data?: PartialMessage<OverrideEntityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.OverrideEntityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OverrideEntityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OverrideEntityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OverrideEntityRequest;

  static equals(a: OverrideEntityRequest | PlainMessage<OverrideEntityRequest> | undefined, b: OverrideEntityRequest | PlainMessage<OverrideEntityRequest> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.OverrideEntityResponse
 */
export declare class OverrideEntityResponse extends Message<OverrideEntityResponse> {
  /**
   * The status of the override request.
   *
   * @generated from field: anduril.entitymanager.v1.OverrideStatus status = 1;
   */
  status: OverrideStatus;

  constructor(data?: PartialMessage<OverrideEntityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.OverrideEntityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OverrideEntityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OverrideEntityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OverrideEntityResponse;

  static equals(a: OverrideEntityResponse | PlainMessage<OverrideEntityResponse> | undefined, b: OverrideEntityResponse | PlainMessage<OverrideEntityResponse> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.RemoveEntityOverrideRequest
 */
export declare class RemoveEntityOverrideRequest extends Message<RemoveEntityOverrideRequest> {
  /**
   * The entity ID that the override will be removed from
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * The field paths to remove from the override store for the provided entityId.
   *
   * @generated from field: repeated string field_path = 2;
   */
  fieldPath: string[];

  constructor(data?: PartialMessage<RemoveEntityOverrideRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.RemoveEntityOverrideRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveEntityOverrideRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveEntityOverrideRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveEntityOverrideRequest;

  static equals(a: RemoveEntityOverrideRequest | PlainMessage<RemoveEntityOverrideRequest> | undefined, b: RemoveEntityOverrideRequest | PlainMessage<RemoveEntityOverrideRequest> | undefined): boolean;
}

/**
 * void response but with placeholder for future optional fields.
 *
 * @generated from message anduril.entitymanager.v1.RemoveEntityOverrideResponse
 */
export declare class RemoveEntityOverrideResponse extends Message<RemoveEntityOverrideResponse> {
  constructor(data?: PartialMessage<RemoveEntityOverrideResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.RemoveEntityOverrideResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveEntityOverrideResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveEntityOverrideResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveEntityOverrideResponse;

  static equals(a: RemoveEntityOverrideResponse | PlainMessage<RemoveEntityOverrideResponse> | undefined, b: RemoveEntityOverrideResponse | PlainMessage<RemoveEntityOverrideResponse> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.DeleteEntityRequest
 */
export declare class DeleteEntityRequest extends Message<DeleteEntityRequest> {
  /**
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  constructor(data?: PartialMessage<DeleteEntityRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.DeleteEntityRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEntityRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEntityRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEntityRequest;

  static equals(a: DeleteEntityRequest | PlainMessage<DeleteEntityRequest> | undefined, b: DeleteEntityRequest | PlainMessage<DeleteEntityRequest> | undefined): boolean;
}

/**
 * void response but with placeholder for future optional fields.
 *
 * @generated from message anduril.entitymanager.v1.DeleteEntityResponse
 */
export declare class DeleteEntityResponse extends Message<DeleteEntityResponse> {
  constructor(data?: PartialMessage<DeleteEntityResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.DeleteEntityResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEntityResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEntityResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEntityResponse;

  static equals(a: DeleteEntityResponse | PlainMessage<DeleteEntityResponse> | undefined, b: DeleteEntityResponse | PlainMessage<DeleteEntityResponse> | undefined): boolean;
}

/**
 * Event representing some type of entity change.
 *
 * @generated from message anduril.entitymanager.v1.EntityEvent
 */
export declare class EntityEvent extends Message<EntityEvent> {
  /**
   * @generated from field: anduril.entitymanager.v1.EventType event_type = 1;
   */
  eventType: EventType;

  /**
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: Timestamp;

  /**
   * @generated from field: anduril.entitymanager.v1.Entity entity = 3;
   */
  entity?: Entity;

  constructor(data?: PartialMessage<EntityEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.EntityEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityEvent;

  static equals(a: EntityEvent | PlainMessage<EntityEvent> | undefined, b: EntityEvent | PlainMessage<EntityEvent> | undefined): boolean;
}

/**
 * A message that is periodically sent on the stream for keep-alive behaviour.
 *
 * @generated from message anduril.entitymanager.v1.Heartbeat
 */
export declare class Heartbeat extends Message<Heartbeat> {
  /**
   * The timestamp at which the heartbeat message was sent.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<Heartbeat>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Heartbeat";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Heartbeat;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Heartbeat;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Heartbeat;

  static equals(a: Heartbeat | PlainMessage<Heartbeat> | undefined, b: Heartbeat | PlainMessage<Heartbeat> | undefined): boolean;
}

