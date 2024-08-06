// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/tasks/v2/objective.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");
const { LLA } = require("../../type/coords.pub_pb.js");

/**
 * Describes the objective of a task.
 *
 * @generated from message anduril.tasks.v2.Objective
 */
const Objective = proto3.makeMessageType(
  "anduril.tasks.v2.Objective",
  () => [
    { no: 1, name: "entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "objective" },
    { no: 5, name: "point", kind: "message", T: Point, oneof: "objective" },
    { no: 2, name: "produced_by_asset_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Describes a single point location.
 *
 * @generated from message anduril.tasks.v2.Point
 */
const Point = proto3.makeMessageType(
  "anduril.tasks.v2.Point",
  () => [
    { no: 1, name: "reference_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lla", kind: "message", T: LLA },
    { no: 3, name: "backing_entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);


exports.Objective = Objective;
exports.Point = Point;
