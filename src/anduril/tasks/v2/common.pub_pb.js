// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/tasks/v2/common.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { Duration, proto3 } = require("@bufbuild/protobuf");

/**
 * @generated from enum anduril.tasks.v2.ControlAreaType
 */
const ControlAreaType = proto3.makeEnum(
  "anduril.tasks.v2.ControlAreaType",
  [
    {no: 0, name: "CONTROL_AREA_TYPE_INVALID", localName: "INVALID"},
    {no: 1, name: "CONTROL_AREA_TYPE_KEEP_IN_ZONE", localName: "KEEP_IN_ZONE"},
    {no: 2, name: "CONTROL_AREA_TYPE_KEEP_OUT_ZONE", localName: "KEEP_OUT_ZONE"},
    {no: 3, name: "CONTROL_AREA_TYPE_DITCH_ZONE", localName: "DITCH_ZONE"},
  ],
);

/**
 * Maps to the UCI DurationRangeType.
 *
 * @generated from message anduril.tasks.v2.DurationRange
 */
const DurationRange = proto3.makeMessageType(
  "anduril.tasks.v2.DurationRange",
  () => [
    { no: 1, name: "min", kind: "message", T: Duration },
    { no: 2, name: "max", kind: "message", T: Duration },
  ],
);

/**
 * Maps to the UCI AnglePair.
 *
 * @generated from message anduril.tasks.v2.AnglePair
 */
const AnglePair = proto3.makeMessageType(
  "anduril.tasks.v2.AnglePair",
  () => [
    { no: 1, name: "min", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "max", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * Maps to UCI AreaConstraints.
 *
 * @generated from message anduril.tasks.v2.AreaConstraints
 */
const AreaConstraints = proto3.makeMessageType(
  "anduril.tasks.v2.AreaConstraints",
  () => [
    { no: 1, name: "altitude_constraint", kind: "message", T: AltitudeConstraint },
  ],
);

/**
 * @generated from message anduril.tasks.v2.AltitudeConstraint
 */
const AltitudeConstraint = proto3.makeMessageType(
  "anduril.tasks.v2.AltitudeConstraint",
  () => [
    { no: 1, name: "min", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "max", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * Includes information about an Agent.
 *
 * @generated from message anduril.tasks.v2.Agent
 */
const Agent = proto3.makeMessageType(
  "anduril.tasks.v2.Agent",
  () => [
    { no: 1, name: "asset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Models a Control Area within which Agents must operate.
 *
 * @generated from message anduril.tasks.v2.ControlArea
 */
const ControlArea = proto3.makeMessageType(
  "anduril.tasks.v2.ControlArea",
  () => [
    { no: 1, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "control_area_type", kind: "enum", T: proto3.getEnumType(ControlAreaType) },
  ],
);


exports.ControlAreaType = ControlAreaType;
exports.DurationRange = DurationRange;
exports.AnglePair = AnglePair;
exports.AreaConstraints = AreaConstraints;
exports.AltitudeConstraint = AltitudeConstraint;
exports.Agent = Agent;
exports.ControlArea = ControlArea;