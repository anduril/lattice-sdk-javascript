// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/entitymanager/v1/entity_manager_api.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_entitymanager_v1_entity_pub } from "./entity.pub_pb";
import { file_anduril_entitymanager_v1_filter_pub } from "./filter.pub_pb";
import { file_anduril_entitymanager_v1_rate_limit_pub } from "./rate_limit.pub_pb";
import { file_anduril_entitymanager_v1_types_pub } from "./types.pub_pb";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entitymanager/v1/entity_manager_api.pub.proto.
 */
export const file_anduril_entitymanager_v1_entity_manager_api_pub = /*@__PURE__*/
  fileDesc("CjVhbmR1cmlsL2VudGl0eW1hbmFnZXIvdjEvZW50aXR5X21hbmFnZXJfYXBpLnB1Yi5wcm90bxIYYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxIiUKEEdldEVudGl0eVJlcXVlc3QSEQoJZW50aXR5X2lkGAEgASgJIkUKEUdldEVudGl0eVJlc3BvbnNlEjAKBmVudGl0eRgBIAEoCzIgLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5FbnRpdHkihwIKHVN0cmVhbUVudGl0eUNvbXBvbmVudHNSZXF1ZXN0Eh0KFWNvbXBvbmVudHNfdG9faW5jbHVkZRgBIAMoCRIeChZpbmNsdWRlX2FsbF9jb21wb25lbnRzGAIgASgIEjMKBmZpbHRlchgDIAEoCzIjLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5TdGF0ZW1lbnQSNwoKcmF0ZV9saW1pdBgEIAEoCzIjLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5SYXRlTGltaXQSHwoXaGVhcnRiZWF0X3BlcmlvZF9taWxsaXMYBSABKA0SGAoQcHJlZXhpc3Rpbmdfb25seRgGIAEoCCKVAQoeU3RyZWFtRW50aXR5Q29tcG9uZW50c1Jlc3BvbnNlEjsKDGVudGl0eV9ldmVudBgBIAEoCzIlLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5FbnRpdHlFdmVudBI2CgloZWFydGJlYXQYAiABKAsyIy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuSGVhcnRiZWF0IlcKEFB1dEVudGl0eVJlcXVlc3QSMAoGZW50aXR5GAEgASgLMiAuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkVudGl0eRIRCgl1bmlxdWVfaWQYAiABKAkiRQoRUHV0RW50aXR5UmVzcG9uc2USMAoGZW50aXR5GAEgASgLMiAuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkVudGl0eSJKChZQdWJsaXNoRW50aXRpZXNSZXF1ZXN0EjAKBmVudGl0eRgBIAEoCzIgLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5FbnRpdHkiGQoXUHVibGlzaEVudGl0aWVzUmVzcG9uc2UilwEKFU92ZXJyaWRlRW50aXR5UmVxdWVzdBIwCgZlbnRpdHkYASABKAsyIC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuRW50aXR5EhIKCmZpZWxkX3BhdGgYAiADKAkSOAoKcHJvdmVuYW5jZRgDIAEoCzIkLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Qcm92ZW5hbmNlIlIKFk92ZXJyaWRlRW50aXR5UmVzcG9uc2USOAoGc3RhdHVzGAEgASgOMiguYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLk92ZXJyaWRlU3RhdHVzIkQKG1JlbW92ZUVudGl0eU92ZXJyaWRlUmVxdWVzdBIRCgllbnRpdHlfaWQYASABKAkSEgoKZmllbGRfcGF0aBgCIAMoCSIeChxSZW1vdmVFbnRpdHlPdmVycmlkZVJlc3BvbnNlIigKE0RlbGV0ZUVudGl0eVJlcXVlc3QSEQoJZW50aXR5X2lkGAEgASgJIhYKFERlbGV0ZUVudGl0eVJlc3BvbnNlIqIBCgtFbnRpdHlFdmVudBI3CgpldmVudF90eXBlGAEgASgOMiMuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkV2ZW50VHlwZRIoCgR0aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIwCgZlbnRpdHkYAyABKAsyIC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuRW50aXR5IjoKCUhlYXJ0YmVhdBItCgl0aW1lc3RhbXAYASABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wKqsBCglFdmVudFR5cGUSFgoSRVZFTlRfVFlQRV9JTlZBTElEEAASFgoSRVZFTlRfVFlQRV9DUkVBVEVEEAESFQoRRVZFTlRfVFlQRV9VUERBVEUQAhIWChJFVkVOVF9UWVBFX0RFTEVURUQQAxIaChZFVkVOVF9UWVBFX1BSRUVYSVNUSU5HEAQSIwofRVZFTlRfVFlQRV9QT1NUX0VYUElSWV9PVkVSUklERRAFMtQGChBFbnRpdHlNYW5hZ2VyQVBJEmQKCUdldEVudGl0eRIqLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5HZXRFbnRpdHlSZXF1ZXN0GisuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkdldEVudGl0eVJlc3BvbnNlEo0BChZTdHJlYW1FbnRpdHlDb21wb25lbnRzEjcuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlN0cmVhbUVudGl0eUNvbXBvbmVudHNSZXF1ZXN0GjguYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlN0cmVhbUVudGl0eUNvbXBvbmVudHNSZXNwb25zZTABEmQKCVB1dEVudGl0eRIqLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5QdXRFbnRpdHlSZXF1ZXN0GisuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlB1dEVudGl0eVJlc3BvbnNlEngKD1B1Ymxpc2hFbnRpdGllcxIwLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5QdWJsaXNoRW50aXRpZXNSZXF1ZXN0GjEuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlB1Ymxpc2hFbnRpdGllc1Jlc3BvbnNlKAEScwoOT3ZlcnJpZGVFbnRpdHkSLy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuT3ZlcnJpZGVFbnRpdHlSZXF1ZXN0GjAuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLk92ZXJyaWRlRW50aXR5UmVzcG9uc2UShQEKFFJlbW92ZUVudGl0eU92ZXJyaWRlEjUuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlJlbW92ZUVudGl0eU92ZXJyaWRlUmVxdWVzdBo2LmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5SZW1vdmVFbnRpdHlPdmVycmlkZVJlc3BvbnNlEm0KDERlbGV0ZUVudGl0eRItLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5EZWxldGVFbnRpdHlSZXF1ZXN0Gi4uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkRlbGV0ZUVudGl0eVJlc3BvbnNlQokCChxjb20uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxQhhFbnRpdHlNYW5hZ2VyQXBpUHViUHJvdG9QAVpNZ2hlLmFuZHVyaWwuZGV2L2FuZHVyaWwvYW5kdXJpbGFwaXMtZ28vYW5kdXJpbC9lbnRpdHltYW5hZ2VyL3YxO2VudGl0eW1hbmFnZXKiAgNBRViqAhhBbmR1cmlsLkVudGl0eW1hbmFnZXIuVjHKAhhBbmR1cmlsXEVudGl0eW1hbmFnZXJcVjHiAiRBbmR1cmlsXEVudGl0eW1hbmFnZXJcVjFcR1BCTWV0YWRhdGHqAhpBbmR1cmlsOjpFbnRpdHltYW5hZ2VyOjpWMWIGcHJvdG8z", [file_anduril_entitymanager_v1_entity_pub, file_anduril_entitymanager_v1_filter_pub, file_anduril_entitymanager_v1_rate_limit_pub, file_anduril_entitymanager_v1_types_pub, file_google_protobuf_timestamp]);

/**
 * Describes the message anduril.entitymanager.v1.GetEntityRequest.
 * Use `create(GetEntityRequestSchema)` to create a new message.
 */
export const GetEntityRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 0);

/**
 * Describes the message anduril.entitymanager.v1.GetEntityResponse.
 * Use `create(GetEntityResponseSchema)` to create a new message.
 */
export const GetEntityResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 1);

/**
 * Describes the message anduril.entitymanager.v1.StreamEntityComponentsRequest.
 * Use `create(StreamEntityComponentsRequestSchema)` to create a new message.
 */
export const StreamEntityComponentsRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 2);

/**
 * Describes the message anduril.entitymanager.v1.StreamEntityComponentsResponse.
 * Use `create(StreamEntityComponentsResponseSchema)` to create a new message.
 */
export const StreamEntityComponentsResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 3);

/**
 * Describes the message anduril.entitymanager.v1.PutEntityRequest.
 * Use `create(PutEntityRequestSchema)` to create a new message.
 */
export const PutEntityRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 4);

/**
 * Describes the message anduril.entitymanager.v1.PutEntityResponse.
 * Use `create(PutEntityResponseSchema)` to create a new message.
 */
export const PutEntityResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 5);

/**
 * Describes the message anduril.entitymanager.v1.PublishEntitiesRequest.
 * Use `create(PublishEntitiesRequestSchema)` to create a new message.
 */
export const PublishEntitiesRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 6);

/**
 * Describes the message anduril.entitymanager.v1.PublishEntitiesResponse.
 * Use `create(PublishEntitiesResponseSchema)` to create a new message.
 */
export const PublishEntitiesResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 7);

/**
 * Describes the message anduril.entitymanager.v1.OverrideEntityRequest.
 * Use `create(OverrideEntityRequestSchema)` to create a new message.
 */
export const OverrideEntityRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 8);

/**
 * Describes the message anduril.entitymanager.v1.OverrideEntityResponse.
 * Use `create(OverrideEntityResponseSchema)` to create a new message.
 */
export const OverrideEntityResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 9);

/**
 * Describes the message anduril.entitymanager.v1.RemoveEntityOverrideRequest.
 * Use `create(RemoveEntityOverrideRequestSchema)` to create a new message.
 */
export const RemoveEntityOverrideRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 10);

/**
 * Describes the message anduril.entitymanager.v1.RemoveEntityOverrideResponse.
 * Use `create(RemoveEntityOverrideResponseSchema)` to create a new message.
 */
export const RemoveEntityOverrideResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 11);

/**
 * Describes the message anduril.entitymanager.v1.DeleteEntityRequest.
 * Use `create(DeleteEntityRequestSchema)` to create a new message.
 */
export const DeleteEntityRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 12);

/**
 * Describes the message anduril.entitymanager.v1.DeleteEntityResponse.
 * Use `create(DeleteEntityResponseSchema)` to create a new message.
 */
export const DeleteEntityResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 13);

/**
 * Describes the message anduril.entitymanager.v1.EntityEvent.
 * Use `create(EntityEventSchema)` to create a new message.
 */
export const EntityEventSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 14);

/**
 * Describes the message anduril.entitymanager.v1.Heartbeat.
 * Use `create(HeartbeatSchema)` to create a new message.
 */
export const HeartbeatSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 15);

/**
 * Describes the enum anduril.entitymanager.v1.EventType.
 */
export const EventTypeSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 0);

/**
 * The type of entity event.
 *
 * @generated from enum anduril.entitymanager.v1.EventType
 */
export const EventType = /*@__PURE__*/
  tsEnum(EventTypeSchema);

/**
 * The EntityManager provides a UI centric data model for understanding the entities in a battle space.
 *
 * Every object in a battle space is represented as an "Entity". Each Entity is essentially an ID, with a life cycle,
 * and a collection of data components. Each data component is a separate protobuf message definition.
 *
 * EntityManager provides a way to query the currently live set of entities within a set of filter constraints,
 * as well as a limited set of management APIs to change the grouping or relationships between entities.
 *
 * @generated from service anduril.entitymanager.v1.EntityManagerAPI
 */
export const EntityManagerAPI = /*@__PURE__*/
  serviceDesc(file_anduril_entitymanager_v1_entity_manager_api_pub, 0);
