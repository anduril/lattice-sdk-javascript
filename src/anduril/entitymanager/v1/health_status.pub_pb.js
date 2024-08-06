// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/health_status.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3, Timestamp } = require("@bufbuild/protobuf");

/**
 * Enumeration of possible connection states.
 *
 * @generated from enum anduril.entitymanager.v1.ConnectionStatus
 */
const ConnectionStatus = proto3.makeEnum(
  "anduril.entitymanager.v1.ConnectionStatus",
  [
    {no: 0, name: "CONNECTION_STATUS_INVALID", localName: "INVALID"},
    {no: 1, name: "CONNECTION_STATUS_ONLINE", localName: "ONLINE"},
    {no: 2, name: "CONNECTION_STATUS_OFFLINE", localName: "OFFLINE"},
  ],
);

/**
 * Enumeration of possible health states.
 *
 * @generated from enum anduril.entitymanager.v1.HealthStatus
 */
const HealthStatus = proto3.makeEnum(
  "anduril.entitymanager.v1.HealthStatus",
  [
    {no: 0, name: "HEALTH_STATUS_INVALID", localName: "INVALID"},
    {no: 1, name: "HEALTH_STATUS_HEALTHY", localName: "HEALTHY"},
    {no: 2, name: "HEALTH_STATUS_WARN", localName: "WARN"},
    {no: 3, name: "HEALTH_STATUS_FAIL", localName: "FAIL"},
    {no: 4, name: "HEALTH_STATUS_OFFLINE", localName: "OFFLINE"},
    {no: 5, name: "HEALTH_STATUS_NOT_READY", localName: "NOT_READY"},
  ],
);

/**
 * A message describing the component's health status.
 *
 * @generated from message anduril.entitymanager.v1.ComponentMessage
 */
const ComponentMessage = proto3.makeMessageType(
  "anduril.entitymanager.v1.ComponentMessage",
  () => [
    { no: 1, name: "status", kind: "enum", T: proto3.getEnumType(HealthStatus) },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Health of an individual component.
 *
 * @generated from message anduril.entitymanager.v1.ComponentHealth
 */
const ComponentHealth = proto3.makeMessageType(
  "anduril.entitymanager.v1.ComponentHealth",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "health", kind: "enum", T: proto3.getEnumType(HealthStatus) },
    { no: 4, name: "messages", kind: "message", T: ComponentMessage, repeated: true },
    { no: 5, name: "update_time", kind: "message", T: Timestamp },
  ],
);

/**
 * General health of the entity as reported by the entity.
 *
 * @generated from message anduril.entitymanager.v1.Health
 */
const Health = proto3.makeMessageType(
  "anduril.entitymanager.v1.Health",
  () => [
    { no: 1, name: "connection_status", kind: "enum", T: proto3.getEnumType(ConnectionStatus) },
    { no: 2, name: "health_status", kind: "enum", T: proto3.getEnumType(HealthStatus) },
    { no: 3, name: "components", kind: "message", T: ComponentHealth, repeated: true },
    { no: 4, name: "update_time", kind: "message", T: Timestamp },
  ],
);


exports.ConnectionStatus = ConnectionStatus;
exports.HealthStatus = HealthStatus;
exports.ComponentMessage = ComponentMessage;
exports.ComponentHealth = ComponentHealth;
exports.Health = Health;