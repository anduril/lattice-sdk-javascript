// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file anduril/entitymanager/v1/schedule.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * The type of Schedule.
 *
 * @generated from enum anduril.entitymanager.v1.ScheduleType
 */
export enum ScheduleType {
  /**
   * @generated from enum value: SCHEDULE_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: SCHEDULE_TYPE_ZONE_ENABLED = 1;
   */
  ZONE_ENABLED = 1,

  /**
   * @generated from enum value: SCHEDULE_TYPE_ZONE_TEMP_ENABLED = 2;
   */
  ZONE_TEMP_ENABLED = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ScheduleType)
proto3.util.setEnumType(ScheduleType, "anduril.entitymanager.v1.ScheduleType", [
  { no: 0, name: "SCHEDULE_TYPE_INVALID" },
  { no: 1, name: "SCHEDULE_TYPE_ZONE_ENABLED" },
  { no: 2, name: "SCHEDULE_TYPE_ZONE_TEMP_ENABLED" },
]);

/**
 * Schedules associated with this entity
 *
 * @generated from message anduril.entitymanager.v1.Schedules
 */
export class Schedules extends Message<Schedules> {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.Schedule schedules = 1;
   */
  schedules: Schedule[] = [];

  constructor(data?: PartialMessage<Schedules>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entitymanager.v1.Schedules";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "schedules", kind: "message", T: Schedule, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Schedules {
    return new Schedules().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Schedules {
    return new Schedules().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Schedules {
    return new Schedules().fromJsonString(jsonString, options);
  }

  static equals(a: Schedules | PlainMessage<Schedules> | undefined, b: Schedules | PlainMessage<Schedules> | undefined): boolean {
    return proto3.util.equals(Schedules, a, b);
  }
}

/**
 * A Schedule associated with this entity
 *
 * @generated from message anduril.entitymanager.v1.Schedule
 */
export class Schedule extends Message<Schedule> {
  /**
   * expression that represents this schedule's "ON" state
   *
   * @generated from field: repeated anduril.entitymanager.v1.CronWindow windows = 1;
   */
  windows: CronWindow[] = [];

  /**
   * A unique identifier for this schedule.
   *
   * @generated from field: string schedule_id = 2;
   */
  scheduleId = "";

  /**
   * The schedule type
   *
   * @generated from field: anduril.entitymanager.v1.ScheduleType schedule_type = 3;
   */
  scheduleType = ScheduleType.INVALID;

  constructor(data?: PartialMessage<Schedule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entitymanager.v1.Schedule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "windows", kind: "message", T: CronWindow, repeated: true },
    { no: 2, name: "schedule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "schedule_type", kind: "enum", T: proto3.getEnumType(ScheduleType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Schedule {
    return new Schedule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Schedule {
    return new Schedule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Schedule {
    return new Schedule().fromJsonString(jsonString, options);
  }

  static equals(a: Schedule | PlainMessage<Schedule> | undefined, b: Schedule | PlainMessage<Schedule> | undefined): boolean {
    return proto3.util.equals(Schedule, a, b);
  }
}

/**
 * @generated from message anduril.entitymanager.v1.CronWindow
 */
export class CronWindow extends Message<CronWindow> {
  /**
   * in UTC, describes when and at what cadence this window starts, in the quartz flavor of cron
   *
   * examples:
   *    This schedule is begins at 7:00:00am UTC everyday between Monday and Friday
   *        0 0 7 ? * MON-FRI *
   *    This schedule begins every 5 minutes starting at 12:00:00pm UTC until 8:00:00pm UTC everyday
   *        0 0/5 12-20 * * ? *
   *    This schedule begins at 12:00:00pm UTC on March 2nd 2023
   *        0 0 12 2 3 ? 2023
   *
   * for more guidance see: http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html
   *
   * @generated from field: string cron_expression = 1;
   */
  cronExpression = "";

  /**
   * describes the duration
   *
   * @generated from field: uint64 duration_millis = 2;
   */
  durationMillis = protoInt64.zero;

  constructor(data?: PartialMessage<CronWindow>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entitymanager.v1.CronWindow";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cron_expression", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "duration_millis", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CronWindow {
    return new CronWindow().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CronWindow {
    return new CronWindow().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CronWindow {
    return new CronWindow().fromJsonString(jsonString, options);
  }

  static equals(a: CronWindow | PlainMessage<CronWindow> | undefined, b: CronWindow | PlainMessage<CronWindow> | undefined): boolean {
    return proto3.util.equals(CronWindow, a, b);
  }
}
