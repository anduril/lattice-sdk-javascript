// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/entitymanager/v1/health_status.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entitymanager/v1/health_status.pub.proto.
 */
export const file_anduril_entitymanager_v1_health_status_pub = /*@__PURE__*/
  fileDesc("CjBhbmR1cmlsL2VudGl0eW1hbmFnZXIvdjEvaGVhbHRoX3N0YXR1cy5wdWIucHJvdG8SGGFuZHVyaWwuZW50aXR5bWFuYWdlci52MSJbChBDb21wb25lbnRNZXNzYWdlEjYKBnN0YXR1cxgBIAEoDjImLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5IZWFsdGhTdGF0dXMSDwoHbWVzc2FnZRgCIAEoCSLSAQoPQ29tcG9uZW50SGVhbHRoEgoKAmlkGAEgASgJEgwKBG5hbWUYAiABKAkSNgoGaGVhbHRoGAMgASgOMiYuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkhlYWx0aFN0YXR1cxI8CghtZXNzYWdlcxgEIAMoCzIqLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Db21wb25lbnRNZXNzYWdlEi8KC3VwZGF0ZV90aW1lGAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCL+AQoGSGVhbHRoEkUKEWNvbm5lY3Rpb25fc3RhdHVzGAEgASgOMiouYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkNvbm5lY3Rpb25TdGF0dXMSPQoNaGVhbHRoX3N0YXR1cxgCIAEoDjImLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5IZWFsdGhTdGF0dXMSPQoKY29tcG9uZW50cxgDIAMoCzIpLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Db21wb25lbnRIZWFsdGgSLwoLdXBkYXRlX3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wKm4KEENvbm5lY3Rpb25TdGF0dXMSHQoZQ09OTkVDVElPTl9TVEFUVVNfSU5WQUxJRBAAEhwKGENPTk5FQ1RJT05fU1RBVFVTX09OTElORRABEh0KGUNPTk5FQ1RJT05fU1RBVFVTX09GRkxJTkUQAiqsAQoMSGVhbHRoU3RhdHVzEhkKFUhFQUxUSF9TVEFUVVNfSU5WQUxJRBAAEhkKFUhFQUxUSF9TVEFUVVNfSEVBTFRIWRABEhYKEkhFQUxUSF9TVEFUVVNfV0FSThACEhYKEkhFQUxUSF9TVEFUVVNfRkFJTBADEhkKFUhFQUxUSF9TVEFUVVNfT0ZGTElORRAEEhsKF0hFQUxUSF9TVEFUVVNfTk9UX1JFQURZEAVChQIKHGNvbS5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjFCFEhlYWx0aFN0YXR1c1B1YlByb3RvUAFaTWdoZS5hbmR1cmlsLmRldi9hbmR1cmlsL2FuZHVyaWxhcGlzLWdvL2FuZHVyaWwvZW50aXR5bWFuYWdlci92MTtlbnRpdHltYW5hZ2VyogIDQUVYqgIYQW5kdXJpbC5FbnRpdHltYW5hZ2VyLlYxygIYQW5kdXJpbFxFbnRpdHltYW5hZ2VyXFYx4gIkQW5kdXJpbFxFbnRpdHltYW5hZ2VyXFYxXEdQQk1ldGFkYXRh6gIaQW5kdXJpbDo6RW50aXR5bWFuYWdlcjo6VjFiBnByb3RvMw", [file_google_protobuf_timestamp]);

/**
 * Describes the message anduril.entitymanager.v1.ComponentMessage.
 * Use `create(ComponentMessageSchema)` to create a new message.
 */
export const ComponentMessageSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_health_status_pub, 0);

/**
 * Describes the message anduril.entitymanager.v1.ComponentHealth.
 * Use `create(ComponentHealthSchema)` to create a new message.
 */
export const ComponentHealthSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_health_status_pub, 1);

/**
 * Describes the message anduril.entitymanager.v1.Health.
 * Use `create(HealthSchema)` to create a new message.
 */
export const HealthSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_health_status_pub, 2);

/**
 * Describes the enum anduril.entitymanager.v1.ConnectionStatus.
 */
export const ConnectionStatusSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_health_status_pub, 0);

/**
 * Enumeration of possible connection states.
 *
 * @generated from enum anduril.entitymanager.v1.ConnectionStatus
 */
export const ConnectionStatus = /*@__PURE__*/
  tsEnum(ConnectionStatusSchema);

/**
 * Describes the enum anduril.entitymanager.v1.HealthStatus.
 */
export const HealthStatusSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_health_status_pub, 1);

/**
 * Enumeration of possible health states.
 *
 * @generated from enum anduril.entitymanager.v1.HealthStatus
 */
export const HealthStatus = /*@__PURE__*/
  tsEnum(HealthStatusSchema);

