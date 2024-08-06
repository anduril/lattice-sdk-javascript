// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file anduril/tasks/v2/shared/maneuver.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Objective, Point } from "../objective.pub_pb.js";
import { Loiter } from "./isr.pub_pb.js";

/**
 * @generated from enum anduril.tasks.v2.LaunchTrackingMode
 */
export enum LaunchTrackingMode {
  /**
   * @generated from enum value: LAUNCH_TRACKING_MODE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: LAUNCH_TRACKING_MODE_GO_TO_WAYPOINT = 1;
   */
  GO_TO_WAYPOINT = 1,

  /**
   * @generated from enum value: LAUNCH_TRACKING_MODE_TRACK_TO_WAYPOINT = 2;
   */
  TRACK_TO_WAYPOINT = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(LaunchTrackingMode)
proto3.util.setEnumType(LaunchTrackingMode, "anduril.tasks.v2.LaunchTrackingMode", [
  { no: 0, name: "LAUNCH_TRACKING_MODE_INVALID" },
  { no: 1, name: "LAUNCH_TRACKING_MODE_GO_TO_WAYPOINT" },
  { no: 2, name: "LAUNCH_TRACKING_MODE_TRACK_TO_WAYPOINT" },
]);

/**
 * Maps to BREVITY code Marshal.
 * Establish(ed) at a specific point, typically used to posture forces in preparation for an offensive operation.
 *
 * @generated from message anduril.tasks.v2.Marshal
 */
export class Marshal extends Message<Marshal> {
  /**
   * Objective to Marshal to.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  constructor(data?: PartialMessage<Marshal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.tasks.v2.Marshal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "objective", kind: "message", T: Objective },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Marshal {
    return new Marshal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Marshal {
    return new Marshal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Marshal {
    return new Marshal().fromJsonString(jsonString, options);
  }

  static equals(a: Marshal | PlainMessage<Marshal> | undefined, b: Marshal | PlainMessage<Marshal> | undefined): boolean {
    return proto3.util.equals(Marshal, a, b);
  }
}

/**
 * Maps to UCI code RoutePlan.
 * Used to command a platform between locations by requesting to make this RoutePlan the single primary active route.
 *
 * @generated from message anduril.tasks.v2.Transit
 */
export class Transit extends Message<Transit> {
  /**
   * @generated from field: anduril.tasks.v2.RoutePlan plan = 1;
   */
  plan?: RoutePlan;

  constructor(data?: PartialMessage<Transit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.tasks.v2.Transit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "plan", kind: "message", T: RoutePlan },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transit {
    return new Transit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transit {
    return new Transit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transit {
    return new Transit().fromJsonString(jsonString, options);
  }

  static equals(a: Transit | PlainMessage<Transit> | undefined, b: Transit | PlainMessage<Transit> | undefined): boolean {
    return proto3.util.equals(Transit, a, b);
  }
}

/**
 * @generated from message anduril.tasks.v2.RoutePlan
 */
export class RoutePlan extends Message<RoutePlan> {
  /**
   * @generated from field: anduril.tasks.v2.Route route = 1;
   */
  route?: Route;

  constructor(data?: PartialMessage<RoutePlan>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.tasks.v2.RoutePlan";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "route", kind: "message", T: Route },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoutePlan {
    return new RoutePlan().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoutePlan {
    return new RoutePlan().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoutePlan {
    return new RoutePlan().fromJsonString(jsonString, options);
  }

  static equals(a: RoutePlan | PlainMessage<RoutePlan> | undefined, b: RoutePlan | PlainMessage<RoutePlan> | undefined): boolean {
    return proto3.util.equals(RoutePlan, a, b);
  }
}

/**
 * @generated from message anduril.tasks.v2.Route
 */
export class Route extends Message<Route> {
  /**
   * @generated from field: repeated anduril.tasks.v2.PathSegment path = 1;
   */
  path: PathSegment[] = [];

  constructor(data?: PartialMessage<Route>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.tasks.v2.Route";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "message", T: PathSegment, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Route {
    return new Route().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Route {
    return new Route().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Route {
    return new Route().fromJsonString(jsonString, options);
  }

  static equals(a: Route | PlainMessage<Route> | undefined, b: Route | PlainMessage<Route> | undefined): boolean {
    return proto3.util.equals(Route, a, b);
  }
}

/**
 * @generated from message anduril.tasks.v2.PathSegment
 */
export class PathSegment extends Message<PathSegment> {
  /**
   * @generated from oneof anduril.tasks.v2.PathSegment.end_point
   */
  endPoint: {
    /**
     * @generated from field: anduril.tasks.v2.Waypoint waypoint = 1;
     */
    value: Waypoint;
    case: "waypoint";
  } | {
    /**
     * @generated from field: anduril.tasks.v2.Loiter loiter = 2;
     */
    value: Loiter;
    case: "loiter";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<PathSegment>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.tasks.v2.PathSegment";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "waypoint", kind: "message", T: Waypoint, oneof: "end_point" },
    { no: 2, name: "loiter", kind: "message", T: Loiter, oneof: "end_point" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathSegment {
    return new PathSegment().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathSegment {
    return new PathSegment().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathSegment {
    return new PathSegment().fromJsonString(jsonString, options);
  }

  static equals(a: PathSegment | PlainMessage<PathSegment> | undefined, b: PathSegment | PlainMessage<PathSegment> | undefined): boolean {
    return proto3.util.equals(PathSegment, a, b);
  }
}

/**
 * @generated from message anduril.tasks.v2.Waypoint
 */
export class Waypoint extends Message<Waypoint> {
  /**
   * @generated from oneof anduril.tasks.v2.Waypoint.point
   */
  point: {
    /**
     * @generated from field: anduril.tasks.v2.Point lla_point = 1;
     */
    value: Point;
    case: "llaPoint";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Waypoint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.tasks.v2.Waypoint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "lla_point", kind: "message", T: Point, oneof: "point" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Waypoint {
    return new Waypoint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Waypoint {
    return new Waypoint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Waypoint {
    return new Waypoint().fromJsonString(jsonString, options);
  }

  static equals(a: Waypoint | PlainMessage<Waypoint> | undefined, b: Waypoint | PlainMessage<Waypoint> | undefined): boolean {
    return proto3.util.equals(Waypoint, a, b);
  }
}

/**
 * @generated from message anduril.tasks.v2.SetLaunchRoute
 */
export class SetLaunchRoute extends Message<SetLaunchRoute> {
  /**
   * @generated from field: anduril.tasks.v2.RoutePlan plan = 1;
   */
  plan?: RoutePlan;

  /**
   * @generated from field: anduril.tasks.v2.LaunchTrackingMode tracking_mode = 2;
   */
  trackingMode = LaunchTrackingMode.INVALID;

  constructor(data?: PartialMessage<SetLaunchRoute>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.tasks.v2.SetLaunchRoute";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "plan", kind: "message", T: RoutePlan },
    { no: 2, name: "tracking_mode", kind: "enum", T: proto3.getEnumType(LaunchTrackingMode) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetLaunchRoute {
    return new SetLaunchRoute().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetLaunchRoute {
    return new SetLaunchRoute().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetLaunchRoute {
    return new SetLaunchRoute().fromJsonString(jsonString, options);
  }

  static equals(a: SetLaunchRoute | PlainMessage<SetLaunchRoute> | undefined, b: SetLaunchRoute | PlainMessage<SetLaunchRoute> | undefined): boolean {
    return proto3.util.equals(SetLaunchRoute, a, b);
  }
}
