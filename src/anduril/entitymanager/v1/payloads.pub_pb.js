// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/payloads.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");
const { Environment } = require("../../ontology/v1/type.pub_pb.js");

/**
 * Describes the current operational state of a payload configuration.
 *
 * @generated from enum anduril.entitymanager.v1.PayloadOperationalState
 */
const PayloadOperationalState = proto3.makeEnum(
  "anduril.entitymanager.v1.PayloadOperationalState",
  [
    {no: 0, name: "PAYLOAD_OPERATIONAL_STATE_INVALID", localName: "INVALID"},
    {no: 1, name: "PAYLOAD_OPERATIONAL_STATE_OFF", localName: "OFF"},
    {no: 2, name: "PAYLOAD_OPERATIONAL_STATE_NON_OPERATIONAL", localName: "NON_OPERATIONAL"},
    {no: 3, name: "PAYLOAD_OPERATIONAL_STATE_DEGRADED", localName: "DEGRADED"},
    {no: 4, name: "PAYLOAD_OPERATIONAL_STATE_OPERATIONAL", localName: "OPERATIONAL"},
    {no: 5, name: "PAYLOAD_OPERATIONAL_STATE_OUT_OF_SERVICE", localName: "OUT_OF_SERVICE"},
    {no: 6, name: "PAYLOAD_OPERATIONAL_STATE_UNKNOWN", localName: "UNKNOWN"},
  ],
);

/**
 * List of payloads available for an entity. i.e a weapon.
 *
 * @generated from message anduril.entitymanager.v1.Payloads
 */
const Payloads = proto3.makeMessageType(
  "anduril.entitymanager.v1.Payloads",
  () => [
    { no: 1, name: "payload_configurations", kind: "message", T: Payload, repeated: true },
  ],
);

/**
 * Individual payload configuration.
 *
 * @generated from message anduril.entitymanager.v1.Payload
 */
const Payload = proto3.makeMessageType(
  "anduril.entitymanager.v1.Payload",
  () => [
    { no: 1, name: "config", kind: "message", T: PayloadConfiguration },
  ],
);

/**
 * The configuration for this capability, published on the CAPABILITY_TOPIC_PAYLOAD_CONFIGURATION topic id.
 *
 * @generated from message anduril.entitymanager.v1.PayloadConfiguration
 */
const PayloadConfiguration = proto3.makeMessageType(
  "anduril.entitymanager.v1.PayloadConfiguration",
  () => [
    { no: 1, name: "capability_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "quantity", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "effective_environment", kind: "enum", T: proto3.getEnumType(Environment), repeated: true },
    { no: 6, name: "payload_operational_state", kind: "enum", T: proto3.getEnumType(PayloadOperationalState) },
    { no: 7, name: "payload_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);


exports.PayloadOperationalState = PayloadOperationalState;
exports.Payloads = Payloads;
exports.Payload = Payload;
exports.PayloadConfiguration = PayloadConfiguration;
