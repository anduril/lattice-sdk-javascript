// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entityhistory/v1/history.pub.proto (package anduril.entityhistory.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Entity } from "../../entitymanager/v1/entity.pub_pb.js";
import type { EntityEvent } from "../../entitymanager/v1/entity_manager_api.pub_pb.js";
import type { Location, LocationUncertainty } from "../../entitymanager/v1/location.pub_pb.js";

/**
 * @generated from enum anduril.entityhistory.v1.HistoryType
 */
export declare enum HistoryType {
  /**
   * @generated from enum value: HISTORY_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: HISTORY_TYPE_TRAIL = 1;
   */
  TRAIL = 1,

  /**
   * @generated from enum value: HISTORY_TYPE_SNAPSHOT = 2;
   */
  SNAPSHOT = 2,

  /**
   * @generated from enum value: HISTORY_TYPE_COMPOSITE = 3;
   */
  COMPOSITE = 3,
}

/**
 * @generated from enum anduril.entityhistory.v1.StorageSystem
 */
export declare enum StorageSystem {
  /**
   * @generated from enum value: STORAGE_SYSTEM_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: STORAGE_SYSTEM_PERSISTENT = 1;
   */
  PERSISTENT = 1,

  /**
   * @generated from enum value: STORAGE_SYSTEM_EPHEMERAL = 2;
   */
  EPHEMERAL = 2,
}

/**
 * Pages of requested history. One page is returned for each Query. If the
 * returned data can not all fit into one grpc response, a NextPageToken
 * will be returned. The page returned corresponds to the requested type
 * of history in the HistoryQuery.
 *
 * @generated from message anduril.entityhistory.v1.HistoryPage
 */
export declare class HistoryPage extends Message<HistoryPage> {
  /**
   * @generated from oneof anduril.entityhistory.v1.HistoryPage.type
   */
  type: {
    /**
     * @generated from field: anduril.entityhistory.v1.TrailPage trail_page = 1;
     */
    value: TrailPage;
    case: "trailPage";
  } | {
    /**
     * @generated from field: anduril.entityhistory.v1.SnapshotPage snapshot_page = 2;
     */
    value: SnapshotPage;
    case: "snapshotPage";
  } | {
    /**
     * @generated from field: anduril.entityhistory.v1.CompositePage composite_page = 3;
     */
    value: CompositePage;
    case: "compositePage";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<HistoryPage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.HistoryPage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryPage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryPage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryPage;

  static equals(a: HistoryPage | PlainMessage<HistoryPage> | undefined, b: HistoryPage | PlainMessage<HistoryPage> | undefined): boolean;
}

/**
 * A page of snapshots.
 *
 * @generated from message anduril.entityhistory.v1.SnapshotPage
 */
export declare class SnapshotPage extends Message<SnapshotPage> {
  /**
   * @generated from field: repeated anduril.entityhistory.v1.Snapshot snapshots = 1;
   */
  snapshots: Snapshot[];

  constructor(data?: PartialMessage<SnapshotPage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.SnapshotPage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotPage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotPage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotPage;

  static equals(a: SnapshotPage | PlainMessage<SnapshotPage> | undefined, b: SnapshotPage | PlainMessage<SnapshotPage> | undefined): boolean;
}

/**
 * A page of trails.
 *
 * @generated from message anduril.entityhistory.v1.TrailPage
 */
export declare class TrailPage extends Message<TrailPage> {
  /**
   * @generated from field: repeated anduril.entityhistory.v1.Trail trails = 1;
   */
  trails: Trail[];

  constructor(data?: PartialMessage<TrailPage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.TrailPage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrailPage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrailPage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrailPage;

  static equals(a: TrailPage | PlainMessage<TrailPage> | undefined, b: TrailPage | PlainMessage<TrailPage> | undefined): boolean;
}

/**
 * A page of composited history.
 *
 * @generated from message anduril.entityhistory.v1.CompositePage
 */
export declare class CompositePage extends Message<CompositePage> {
  /**
   * @generated from field: repeated anduril.entityhistory.v1.Snapshot snapshots = 1;
   */
  snapshots: Snapshot[];

  /**
   * @generated from field: repeated anduril.entityhistory.v1.Trail trails = 2;
   */
  trails: Trail[];

  constructor(data?: PartialMessage<CompositePage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.CompositePage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompositePage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompositePage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompositePage;

  static equals(a: CompositePage | PlainMessage<CompositePage> | undefined, b: CompositePage | PlainMessage<CompositePage> | undefined): boolean;
}

/**
 * A snapshot is a summarized history for a given entity. It consists of the
 * origin state for the entity, its current state, and snapshot events which
 * represent major changes to the entity over its lifespan.
 *
 * @generated from message anduril.entityhistory.v1.Snapshot
 */
export declare class Snapshot extends Message<Snapshot> {
  /**
   * The latest state for a given entity.
   *
   * to be deprecated
   *
   * @generated from field: anduril.entitymanager.v1.Entity latest_state = 1;
   */
  latestState?: Entity;

  /**
   * The first observed state of the entity.
   *
   * to be deprecated
   *
   * @generated from field: anduril.entitymanager.v1.Entity original_state = 2;
   */
  originalState?: Entity;

  /**
   * A set of events corresponding to significant changes in this entity.
   *
   * @generated from field: repeated anduril.entityhistory.v1.SnapshotEvent snapshot_events = 3;
   */
  snapshotEvents: SnapshotEvent[];

  constructor(data?: PartialMessage<Snapshot>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.Snapshot";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Snapshot;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Snapshot;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Snapshot;

  static equals(a: Snapshot | PlainMessage<Snapshot> | undefined, b: Snapshot | PlainMessage<Snapshot> | undefined): boolean;
}

/**
 * A snapshot event represents any significant change to the entity.
 *
 * @generated from message anduril.entityhistory.v1.SnapshotEvent
 */
export declare class SnapshotEvent extends Message<SnapshotEvent> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * Represents the type of event the occurred.
   *
   * @generated from oneof anduril.entityhistory.v1.SnapshotEvent.type
   */
  type: {
    /**
     * @generated from field: anduril.entityhistory.v1.EntityChangeEvent entity_change_event = 2;
     */
    value: EntityChangeEvent;
    case: "entityChangeEvent";
  } | {
    /**
     * @generated from field: anduril.entitymanager.v1.EntityEvent entity_state = 3;
     */
    value: EntityEvent;
    case: "entityState";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SnapshotEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.SnapshotEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotEvent;

  static equals(a: SnapshotEvent | PlainMessage<SnapshotEvent> | undefined, b: SnapshotEvent | PlainMessage<SnapshotEvent> | undefined): boolean;
}

/**
 * An entity change is encoded as a timestamp and two partial entity states
 * representing the fields that changed on the entity. For example:
 * From: Entity: { MilView: { Disposition: Neutral } }.
 * To: Entity: { MilView: { Disposition: Suspicious } }.
 *
 * Clients can determine the updated fields by examining the entity partials
 * included in from & to.
 *
 * @generated from message anduril.entityhistory.v1.EntityChangeEvent
 */
export declare class EntityChangeEvent extends Message<EntityChangeEvent> {
  /**
   * A partial of an entity state containing the old field(s).
   *
   * @generated from field: anduril.entitymanager.v1.Entity from = 1;
   */
  from?: Entity;

  /**
   * A partial of an entity state containing the changed field(s).
   *
   * @generated from field: anduril.entitymanager.v1.Entity to = 2;
   */
  to?: Entity;

  constructor(data?: PartialMessage<EntityChangeEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.EntityChangeEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityChangeEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityChangeEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityChangeEvent;

  static equals(a: EntityChangeEvent | PlainMessage<EntityChangeEvent> | undefined, b: EntityChangeEvent | PlainMessage<EntityChangeEvent> | undefined): boolean;
}

/**
 * A trail represents the historical positions of a given entity.
 *
 * @generated from message anduril.entityhistory.v1.Trail
 */
export declare class Trail extends Message<Trail> {
  /**
   * The GUID of the trail's parent entity.
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * @generated from field: repeated anduril.entityhistory.v1.TrailPoint trail_points = 2;
   */
  trailPoints: TrailPoint[];

  constructor(data?: PartialMessage<Trail>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.Trail";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Trail;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Trail;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Trail;

  static equals(a: Trail | PlainMessage<Trail> | undefined, b: Trail | PlainMessage<Trail> | undefined): boolean;
}

/**
 * A trail point consists of a timestamp, location, and uncertainty.
 * The above information preserves kinematics, precise position, and
 * uncertainty for all reported points.
 *
 * @generated from message anduril.entityhistory.v1.TrailPoint
 */
export declare class TrailPoint extends Message<TrailPoint> {
  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: anduril.entitymanager.v1.Location location = 2;
   */
  location?: Location;

  /**
   * @generated from field: anduril.entitymanager.v1.LocationUncertainty location_uncertainty = 3;
   */
  locationUncertainty?: LocationUncertainty;

  constructor(data?: PartialMessage<TrailPoint>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.TrailPoint";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrailPoint;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrailPoint;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrailPoint;

  static equals(a: TrailPoint | PlainMessage<TrailPoint> | undefined, b: TrailPoint | PlainMessage<TrailPoint> | undefined): boolean;
}

/**
 * Query page token key used for EntityHistory and enables paginated query responses. Clients should not modify values and
 * only provide the key back to the server if is_complete is false.
 *
 * @generated from message anduril.entityhistory.v1.HistoryPageToken
 */
export declare class HistoryPageToken extends Message<HistoryPageToken> {
  /**
   * @generated from field: string query_id = 1;
   */
  queryId: string;

  /**
   * @generated from field: int32 page_num = 2;
   */
  pageNum: number;

  /**
   * @generated from field: string entity_id = 3;
   */
  entityId: string;

  /**
   * @generated from field: anduril.entityhistory.v1.StorageSystem storage_system = 4;
   */
  storageSystem: StorageSystem;

  /**
   * Query start time for the current entity in ISO-8601 format.
   *
   * @generated from field: string start_time = 5;
   */
  startTime: string;

  /**
   * True if the query is complete, false if another request beginning with this key should be sent to consume more
   * data.
   *
   * @generated from field: bool is_complete = 6;
   */
  isComplete: boolean;

  constructor(data?: PartialMessage<HistoryPageToken>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entityhistory.v1.HistoryPageToken";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryPageToken;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryPageToken;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryPageToken;

  static equals(a: HistoryPageToken | PlainMessage<HistoryPageToken> | undefined, b: HistoryPageToken | PlainMessage<HistoryPageToken> | undefined): boolean;
}

