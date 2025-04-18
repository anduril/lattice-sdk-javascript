// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/relationship.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_entitymanager_v1_sensors_pub } from "./sensors.pub_pb.js";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entitymanager/v1/relationship.pub.proto.
 */
export const file_anduril_entitymanager_v1_relationship_pub = /*@__PURE__*/
  fileDesc("Ci9hbmR1cmlsL2VudGl0eW1hbmFnZXIvdjEvcmVsYXRpb25zaGlwLnB1Yi5wcm90bxIYYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxIk4KDVJlbGF0aW9uc2hpcHMSPQoNcmVsYXRpb25zaGlwcxgBIAMoCzImLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5SZWxhdGlvbnNoaXAiiQEKDFJlbGF0aW9uc2hpcBIZChFyZWxhdGVkX2VudGl0eV9pZBgBIAEoCRIXCg9yZWxhdGlvbnNoaXBfaWQYAiABKAkSRQoRcmVsYXRpb25zaGlwX3R5cGUYAyABKAsyKi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUmVsYXRpb25zaGlwVHlwZSLPAgoQUmVsYXRpb25zaGlwVHlwZRI5Cgp0cmFja2VkX2J5GAIgASgLMiMuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlRyYWNrZWRCeUgAEjsKC2dyb3VwX2NoaWxkGAQgASgLMiQuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkdyb3VwQ2hpbGRIABI9Cgxncm91cF9wYXJlbnQYBSABKAsyJS5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuR3JvdXBQYXJlbnRIABI7CgttZXJnZWRfZnJvbRgGIAEoCzIkLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5NZXJnZWRGcm9tSAASPwoNYWN0aXZlX3RhcmdldBgHIAEoCzImLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5BY3RpdmVUYXJnZXRIAEIGCgR0eXBlIpEBCglUcmFja2VkQnkSRAoZYWN0aXZlbHlfdHJhY2tpbmdfc2Vuc29ycxgBIAEoCzIhLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5TZW5zb3JzEj4KGmxhc3RfbWVhc3VyZW1lbnRfdGltZXN0YW1wGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCIMCgpHcm91cENoaWxkIg0KC0dyb3VwUGFyZW50IgwKCk1lcmdlZEZyb20iDgoMQWN0aXZlVGFyZ2V0QoUCChxjb20uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxQhRSZWxhdGlvbnNoaXBQdWJQcm90b1ABWk1naGUuYW5kdXJpbC5kZXYvYW5kdXJpbC9hbmR1cmlsYXBpcy1nby9hbmR1cmlsL2VudGl0eW1hbmFnZXIvdjE7ZW50aXR5bWFuYWdlcqICA0FFWKoCGEFuZHVyaWwuRW50aXR5bWFuYWdlci5WMcoCGEFuZHVyaWxcRW50aXR5bWFuYWdlclxWMeICJEFuZHVyaWxcRW50aXR5bWFuYWdlclxWMVxHUEJNZXRhZGF0YeoCGkFuZHVyaWw6OkVudGl0eW1hbmFnZXI6OlYxYgZwcm90bzM", [file_anduril_entitymanager_v1_sensors_pub, file_google_protobuf_timestamp]);

/**
 * Describes the message anduril.entitymanager.v1.Relationships.
 * Use `create(RelationshipsSchema)` to create a new message.
 */
export const RelationshipsSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_relationship_pub, 0);

/**
 * Describes the message anduril.entitymanager.v1.Relationship.
 * Use `create(RelationshipSchema)` to create a new message.
 */
export const RelationshipSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_relationship_pub, 1);

/**
 * Describes the message anduril.entitymanager.v1.RelationshipType.
 * Use `create(RelationshipTypeSchema)` to create a new message.
 */
export const RelationshipTypeSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_relationship_pub, 2);

/**
 * Describes the message anduril.entitymanager.v1.TrackedBy.
 * Use `create(TrackedBySchema)` to create a new message.
 */
export const TrackedBySchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_relationship_pub, 3);

/**
 * Describes the message anduril.entitymanager.v1.GroupChild.
 * Use `create(GroupChildSchema)` to create a new message.
 */
export const GroupChildSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_relationship_pub, 4);

/**
 * Describes the message anduril.entitymanager.v1.GroupParent.
 * Use `create(GroupParentSchema)` to create a new message.
 */
export const GroupParentSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_relationship_pub, 5);

/**
 * Describes the message anduril.entitymanager.v1.MergedFrom.
 * Use `create(MergedFromSchema)` to create a new message.
 */
export const MergedFromSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_relationship_pub, 6);

/**
 * Describes the message anduril.entitymanager.v1.ActiveTarget.
 * Use `create(ActiveTargetSchema)` to create a new message.
 */
export const ActiveTargetSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_relationship_pub, 7);

