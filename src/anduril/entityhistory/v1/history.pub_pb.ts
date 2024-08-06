// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file anduril/entityhistory/v1/history.pub.proto (package anduril.entityhistory.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Entity } from "../../entitymanager/v1/entity.pub_pb.js";
import { EntityEvent } from "../../entitymanager/v1/entity_manager_api.pub_pb.js";
import { Location, LocationUncertainty } from "../../entitymanager/v1/location.pub_pb.js";

/**
 * @generated from enum anduril.entityhistory.v1.HistoryType
 */
export enum HistoryType {
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
// Retrieve enum metadata with: proto3.getEnumType(HistoryType)
proto3.util.setEnumType(HistoryType, "anduril.entityhistory.v1.HistoryType", [
  { no: 0, name: "HISTORY_TYPE_INVALID" },
  { no: 1, name: "HISTORY_TYPE_TRAIL" },
  { no: 2, name: "HISTORY_TYPE_SNAPSHOT" },
  { no: 3, name: "HISTORY_TYPE_COMPOSITE" },
]);

/**
 * @generated from enum anduril.entityhistory.v1.StorageSystem
 */
export enum StorageSystem {
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
// Retrieve enum metadata with: proto3.getEnumType(StorageSystem)
proto3.util.setEnumType(StorageSystem, "anduril.entityhistory.v1.StorageSystem", [
  { no: 0, name: "STORAGE_SYSTEM_INVALID" },
  { no: 1, name: "STORAGE_SYSTEM_PERSISTENT" },
  { no: 2, name: "STORAGE_SYSTEM_EPHEMERAL" },
]);

/**
 * Pages of requested history. One page is returned for each Query. If the
 * returned data can not all fit into one grpc response, a NextPageToken
 * will be returned. The page returned corresponds to the requested type
 * of history in the HistoryQuery.
 *
 * @generated from message anduril.entityhistory.v1.HistoryPage
 */
export class HistoryPage extends Message<HistoryPage> {
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
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<HistoryPage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.HistoryPage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "trail_page", kind: "message", T: TrailPage, oneof: "type" },
    { no: 2, name: "snapshot_page", kind: "message", T: SnapshotPage, oneof: "type" },
    { no: 3, name: "composite_page", kind: "message", T: CompositePage, oneof: "type" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryPage {
    return new HistoryPage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryPage {
    return new HistoryPage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryPage {
    return new HistoryPage().fromJsonString(jsonString, options);
  }

  static equals(a: HistoryPage | PlainMessage<HistoryPage> | undefined, b: HistoryPage | PlainMessage<HistoryPage> | undefined): boolean {
    return proto3.util.equals(HistoryPage, a, b);
  }
}

/**
 * A page of snapshots.
 *
 * @generated from message anduril.entityhistory.v1.SnapshotPage
 */
export class SnapshotPage extends Message<SnapshotPage> {
  /**
   * @generated from field: repeated anduril.entityhistory.v1.Snapshot snapshots = 1;
   */
  snapshots: Snapshot[] = [];

  constructor(data?: PartialMessage<SnapshotPage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.SnapshotPage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "snapshots", kind: "message", T: Snapshot, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotPage {
    return new SnapshotPage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotPage {
    return new SnapshotPage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotPage {
    return new SnapshotPage().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotPage | PlainMessage<SnapshotPage> | undefined, b: SnapshotPage | PlainMessage<SnapshotPage> | undefined): boolean {
    return proto3.util.equals(SnapshotPage, a, b);
  }
}

/**
 * A page of trails.
 *
 * @generated from message anduril.entityhistory.v1.TrailPage
 */
export class TrailPage extends Message<TrailPage> {
  /**
   * @generated from field: repeated anduril.entityhistory.v1.Trail trails = 1;
   */
  trails: Trail[] = [];

  constructor(data?: PartialMessage<TrailPage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.TrailPage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "trails", kind: "message", T: Trail, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrailPage {
    return new TrailPage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrailPage {
    return new TrailPage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrailPage {
    return new TrailPage().fromJsonString(jsonString, options);
  }

  static equals(a: TrailPage | PlainMessage<TrailPage> | undefined, b: TrailPage | PlainMessage<TrailPage> | undefined): boolean {
    return proto3.util.equals(TrailPage, a, b);
  }
}

/**
 * A page of composited history.
 *
 * @generated from message anduril.entityhistory.v1.CompositePage
 */
export class CompositePage extends Message<CompositePage> {
  /**
   * @generated from field: repeated anduril.entityhistory.v1.Snapshot snapshots = 1;
   */
  snapshots: Snapshot[] = [];

  /**
   * @generated from field: repeated anduril.entityhistory.v1.Trail trails = 2;
   */
  trails: Trail[] = [];

  constructor(data?: PartialMessage<CompositePage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.CompositePage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "snapshots", kind: "message", T: Snapshot, repeated: true },
    { no: 2, name: "trails", kind: "message", T: Trail, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompositePage {
    return new CompositePage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompositePage {
    return new CompositePage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompositePage {
    return new CompositePage().fromJsonString(jsonString, options);
  }

  static equals(a: CompositePage | PlainMessage<CompositePage> | undefined, b: CompositePage | PlainMessage<CompositePage> | undefined): boolean {
    return proto3.util.equals(CompositePage, a, b);
  }
}

/**
 * A snapshot is a summarized history for a given entity. It consists of the
 * origin state for the entity, its current state, and snapshot events which
 * represent major changes to the entity over its lifespan.
 *
 * @generated from message anduril.entityhistory.v1.Snapshot
 */
export class Snapshot extends Message<Snapshot> {
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
  snapshotEvents: SnapshotEvent[] = [];

  constructor(data?: PartialMessage<Snapshot>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.Snapshot";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "latest_state", kind: "message", T: Entity },
    { no: 2, name: "original_state", kind: "message", T: Entity },
    { no: 3, name: "snapshot_events", kind: "message", T: SnapshotEvent, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Snapshot {
    return new Snapshot().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Snapshot {
    return new Snapshot().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Snapshot {
    return new Snapshot().fromJsonString(jsonString, options);
  }

  static equals(a: Snapshot | PlainMessage<Snapshot> | undefined, b: Snapshot | PlainMessage<Snapshot> | undefined): boolean {
    return proto3.util.equals(Snapshot, a, b);
  }
}

/**
 * A snapshot event represents any significant change to the entity.
 *
 * @generated from message anduril.entityhistory.v1.SnapshotEvent
 */
export class SnapshotEvent extends Message<SnapshotEvent> {
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
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<SnapshotEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.SnapshotEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "entity_change_event", kind: "message", T: EntityChangeEvent, oneof: "type" },
    { no: 3, name: "entity_state", kind: "message", T: EntityEvent, oneof: "type" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SnapshotEvent {
    return new SnapshotEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SnapshotEvent {
    return new SnapshotEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SnapshotEvent {
    return new SnapshotEvent().fromJsonString(jsonString, options);
  }

  static equals(a: SnapshotEvent | PlainMessage<SnapshotEvent> | undefined, b: SnapshotEvent | PlainMessage<SnapshotEvent> | undefined): boolean {
    return proto3.util.equals(SnapshotEvent, a, b);
  }
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
export class EntityChangeEvent extends Message<EntityChangeEvent> {
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

  constructor(data?: PartialMessage<EntityChangeEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.EntityChangeEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "message", T: Entity },
    { no: 2, name: "to", kind: "message", T: Entity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityChangeEvent {
    return new EntityChangeEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityChangeEvent {
    return new EntityChangeEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityChangeEvent {
    return new EntityChangeEvent().fromJsonString(jsonString, options);
  }

  static equals(a: EntityChangeEvent | PlainMessage<EntityChangeEvent> | undefined, b: EntityChangeEvent | PlainMessage<EntityChangeEvent> | undefined): boolean {
    return proto3.util.equals(EntityChangeEvent, a, b);
  }
}

/**
 * A trail represents the historical positions of a given entity.
 *
 * @generated from message anduril.entityhistory.v1.Trail
 */
export class Trail extends Message<Trail> {
  /**
   * The GUID of the trail's parent entity.
   *
   * @generated from field: string entity_id = 1;
   */
  entityId = "";

  /**
   * @generated from field: repeated anduril.entityhistory.v1.TrailPoint trail_points = 2;
   */
  trailPoints: TrailPoint[] = [];

  constructor(data?: PartialMessage<Trail>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.Trail";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "trail_points", kind: "message", T: TrailPoint, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Trail {
    return new Trail().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Trail {
    return new Trail().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Trail {
    return new Trail().fromJsonString(jsonString, options);
  }

  static equals(a: Trail | PlainMessage<Trail> | undefined, b: Trail | PlainMessage<Trail> | undefined): boolean {
    return proto3.util.equals(Trail, a, b);
  }
}

/**
 * A trail point consists of a timestamp, location, and uncertainty.
 * The above information preserves kinematics, precise position, and
 * uncertainty for all reported points.
 *
 * @generated from message anduril.entityhistory.v1.TrailPoint
 */
export class TrailPoint extends Message<TrailPoint> {
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

  constructor(data?: PartialMessage<TrailPoint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.TrailPoint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "timestamp", kind: "message", T: Timestamp },
    { no: 2, name: "location", kind: "message", T: Location },
    { no: 3, name: "location_uncertainty", kind: "message", T: LocationUncertainty },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TrailPoint {
    return new TrailPoint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TrailPoint {
    return new TrailPoint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TrailPoint {
    return new TrailPoint().fromJsonString(jsonString, options);
  }

  static equals(a: TrailPoint | PlainMessage<TrailPoint> | undefined, b: TrailPoint | PlainMessage<TrailPoint> | undefined): boolean {
    return proto3.util.equals(TrailPoint, a, b);
  }
}

/**
 * Query page token key used for EntityHistory and enables paginated query responses. Clients should not modify values and
 * only provide the key back to the server if is_complete is false.
 *
 * @generated from message anduril.entityhistory.v1.HistoryPageToken
 */
export class HistoryPageToken extends Message<HistoryPageToken> {
  /**
   * @generated from field: string query_id = 1;
   */
  queryId = "";

  /**
   * @generated from field: int32 page_num = 2;
   */
  pageNum = 0;

  /**
   * @generated from field: string entity_id = 3;
   */
  entityId = "";

  /**
   * @generated from field: anduril.entityhistory.v1.StorageSystem storage_system = 4;
   */
  storageSystem = StorageSystem.INVALID;

  /**
   * Query start time for the current entity in ISO-8601 format.
   *
   * @generated from field: string start_time = 5;
   */
  startTime = "";

  /**
   * True if the query is complete, false if another request beginning with this key should be sent to consume more
   * data.
   *
   * @generated from field: bool is_complete = 6;
   */
  isComplete = false;

  constructor(data?: PartialMessage<HistoryPageToken>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entityhistory.v1.HistoryPageToken";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_num", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "storage_system", kind: "enum", T: proto3.getEnumType(StorageSystem) },
    { no: 5, name: "start_time", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "is_complete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryPageToken {
    return new HistoryPageToken().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryPageToken {
    return new HistoryPageToken().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryPageToken {
    return new HistoryPageToken().fromJsonString(jsonString, options);
  }

  static equals(a: HistoryPageToken | PlainMessage<HistoryPageToken> | undefined, b: HistoryPageToken | PlainMessage<HistoryPageToken> | undefined): boolean {
    return proto3.util.equals(HistoryPageToken, a, b);
  }
}
