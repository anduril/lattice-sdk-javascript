// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/schedule.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");

/**
 * The type of Schedule.
 *
 * @generated from enum anduril.entitymanager.v1.ScheduleType
 */
const ScheduleType = proto3.makeEnum(
  "anduril.entitymanager.v1.ScheduleType",
  [
    {no: 0, name: "SCHEDULE_TYPE_INVALID", localName: "INVALID"},
    {no: 1, name: "SCHEDULE_TYPE_ZONE_ENABLED", localName: "ZONE_ENABLED"},
    {no: 2, name: "SCHEDULE_TYPE_ZONE_TEMP_ENABLED", localName: "ZONE_TEMP_ENABLED"},
  ],
);

/**
 * Schedules associated with this entity
 *
 * @generated from message anduril.entitymanager.v1.Schedules
 */
const Schedules = proto3.makeMessageType(
  "anduril.entitymanager.v1.Schedules",
  () => [
    { no: 1, name: "schedules", kind: "message", T: Schedule, repeated: true },
  ],
);

/**
 * A Schedule associated with this entity
 *
 * @generated from message anduril.entitymanager.v1.Schedule
 */
const Schedule = proto3.makeMessageType(
  "anduril.entitymanager.v1.Schedule",
  () => [
    { no: 1, name: "windows", kind: "message", T: CronWindow, repeated: true },
    { no: 2, name: "schedule_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "schedule_type", kind: "enum", T: proto3.getEnumType(ScheduleType) },
  ],
);

/**
 * @generated from message anduril.entitymanager.v1.CronWindow
 */
const CronWindow = proto3.makeMessageType(
  "anduril.entitymanager.v1.CronWindow",
  () => [
    { no: 1, name: "cron_expression", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "duration_millis", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);


exports.ScheduleType = ScheduleType;
exports.Schedules = Schedules;
exports.Schedule = Schedule;
exports.CronWindow = CronWindow;