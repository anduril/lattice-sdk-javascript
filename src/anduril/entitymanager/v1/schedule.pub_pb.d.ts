// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/entitymanager/v1/schedule.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * The type of Schedule.
 *
 * @generated from enum anduril.entitymanager.v1.ScheduleType
 */
export declare enum ScheduleType {
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

/**
 * Schedules associated with this entity
 *
 * @generated from message anduril.entitymanager.v1.Schedules
 */
export declare class Schedules extends Message<Schedules> {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.Schedule schedules = 1;
   */
  schedules: Schedule[];

  constructor(data?: PartialMessage<Schedules>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Schedules";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Schedules;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Schedules;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Schedules;

  static equals(a: Schedules | PlainMessage<Schedules> | undefined, b: Schedules | PlainMessage<Schedules> | undefined): boolean;
}

/**
 * A Schedule associated with this entity
 *
 * @generated from message anduril.entitymanager.v1.Schedule
 */
export declare class Schedule extends Message<Schedule> {
  /**
   * expression that represents this schedule's "ON" state
   *
   * @generated from field: repeated anduril.entitymanager.v1.CronWindow windows = 1;
   */
  windows: CronWindow[];

  /**
   * A unique identifier for this schedule.
   *
   * @generated from field: string schedule_id = 2;
   */
  scheduleId: string;

  /**
   * The schedule type
   *
   * @generated from field: anduril.entitymanager.v1.ScheduleType schedule_type = 3;
   */
  scheduleType: ScheduleType;

  constructor(data?: PartialMessage<Schedule>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.Schedule";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Schedule;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Schedule;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Schedule;

  static equals(a: Schedule | PlainMessage<Schedule> | undefined, b: Schedule | PlainMessage<Schedule> | undefined): boolean;
}

/**
 * @generated from message anduril.entitymanager.v1.CronWindow
 */
export declare class CronWindow extends Message<CronWindow> {
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
  cronExpression: string;

  /**
   * describes the duration
   *
   * @generated from field: uint64 duration_millis = 2;
   */
  durationMillis: bigint;

  constructor(data?: PartialMessage<CronWindow>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "anduril.entitymanager.v1.CronWindow";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CronWindow;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CronWindow;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CronWindow;

  static equals(a: CronWindow | PlainMessage<CronWindow> | undefined, b: CronWindow | PlainMessage<CronWindow> | undefined): boolean;
}

