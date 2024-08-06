// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/notification.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");
const { Entity, Provenance } = require("./entity.pub_pb.js");

/**
 * A notification to indicate when a field is overridden on an entity.
 *
 * @generated from message anduril.entitymanager.v1.OverrideNotificationPayload
 */
const OverrideNotificationPayload = proto3.makeMessageType(
  "anduril.entitymanager.v1.OverrideNotificationPayload",
  () => [
    { no: 1, name: "entity", kind: "message", T: Entity },
    { no: 2, name: "field_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "provenance", kind: "message", T: Provenance },
  ],
);


exports.OverrideNotificationPayload = OverrideNotificationPayload;