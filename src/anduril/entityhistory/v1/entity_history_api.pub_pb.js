// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/entityhistory/v1/entity_history_api.pub.proto (package anduril.entityhistory.v1, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_entityhistory_v1_history_pub } from "./history.pub_pb";
import { file_anduril_entitymanager_v1_filter_pub } from "../../entitymanager/v1/filter.pub_pb";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entityhistory/v1/entity_history_api.pub.proto.
 */
export const file_anduril_entityhistory_v1_entity_history_api_pub = /*@__PURE__*/
  fileDesc("CjVhbmR1cmlsL2VudGl0eWhpc3RvcnkvdjEvZW50aXR5X2hpc3RvcnlfYXBpLnB1Yi5wcm90bxIYYW5kdXJpbC5lbnRpdHloaXN0b3J5LnYxIq8BChJMaXN0SGlzdG9yeVJlcXVlc3QSPQoNaGlzdG9yeV9xdWVyeRgBIAEoCzImLmFuZHVyaWwuZW50aXR5aGlzdG9yeS52MS5IaXN0b3J5UXVlcnkSEgoKcGFnZV90b2tlbhgCIAEoCRJGChJoaXN0b3J5X3BhZ2VfdG9rZW4YAyABKAsyKi5hbmR1cmlsLmVudGl0eWhpc3RvcnkudjEuSGlzdG9yeVBhZ2VUb2tlbiK4AQoTTGlzdEhpc3RvcnlSZXNwb25zZRI7CgxoaXN0b3J5X3BhZ2UYASABKAsyJS5hbmR1cmlsLmVudGl0eWhpc3RvcnkudjEuSGlzdG9yeVBhZ2USFwoPbmV4dF9wYWdlX3Rva2VuGAIgASgJEksKF25leHRfaGlzdG9yeV9wYWdlX3Rva2VuGAMgASgLMiouYW5kdXJpbC5lbnRpdHloaXN0b3J5LnYxLkhpc3RvcnlQYWdlVG9rZW4iigIKDEhpc3RvcnlRdWVyeRI7CgxoaXN0b3J5X3R5cGUYASABKA4yJS5hbmR1cmlsLmVudGl0eWhpc3RvcnkudjEuSGlzdG9yeVR5cGUSNwoKdGltZV9yYW5nZRgCIAEoCzIjLmFuZHVyaWwuZW50aXR5aGlzdG9yeS52MS5UaW1lUmFuZ2USOAoKZG93bnNhbXBsZRgDIAEoCzIkLmFuZHVyaWwuZW50aXR5aGlzdG9yeS52MS5Eb3duc2FtcGxlEjYKCXN0YXRlbWVudBgEIAEoCzIjLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5TdGF0ZW1lbnQSEgoKZW50aXR5X2lkcxgFIAMoCSJ1CglUaW1lUmFuZ2USMwoPbG93ZXJfYm91bmRfaW5jGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIzCg91cHBlcl9ib3VuZF9leGMYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wImEKCkRvd25zYW1wbGUSSwoTZG93bnNhbXBsZV9kdXJhdGlvbhgBIAEoCzIsLmFuZHVyaWwuZW50aXR5aGlzdG9yeS52MS5Eb3duc2FtcGxlRHVyYXRpb25IAEIGCgR0eXBlIikKEkRvd25zYW1wbGVEdXJhdGlvbhITCgtkdXJhdGlvbl9tcxgBIAEoDSIeChxTdHJlYW1CYWNrZmlsbFVwZGF0ZXNSZXF1ZXN0ImMKHVN0cmVhbUJhY2tmaWxsVXBkYXRlc1Jlc3BvbnNlEkIKEGJhY2tmaWxsX3VwZGF0ZXMYASADKAsyKC5hbmR1cmlsLmVudGl0eWhpc3RvcnkudjEuQmFja2ZpbGxVcGRhdGUiXAoOQmFja2ZpbGxVcGRhdGUSEQoJZW50aXR5X2lkGAEgASgJEjcKCnRpbWVfcmFuZ2UYAiABKAsyIy5hbmR1cmlsLmVudGl0eWhpc3RvcnkudjEuVGltZVJhbmdlMn4KEEVudGl0eUhpc3RvcnlBUEkSagoLTGlzdEhpc3RvcnkSLC5hbmR1cmlsLmVudGl0eWhpc3RvcnkudjEuTGlzdEhpc3RvcnlSZXF1ZXN0Gi0uYW5kdXJpbC5lbnRpdHloaXN0b3J5LnYxLkxpc3RIaXN0b3J5UmVzcG9uc2VC+wEKHGNvbS5hbmR1cmlsLmVudGl0eWhpc3RvcnkudjFCGEVudGl0eUhpc3RvcnlBcGlQdWJQcm90b1ABWj9naGUuYW5kdXJpbC5kZXYvYW5kdXJpbC9hbmR1cmlsYXBpcy1nby9hbmR1cmlsL2VudGl0eWhpc3RvcnkvdjGiAgNBRViqAhhBbmR1cmlsLkVudGl0eWhpc3RvcnkuVjHKAhhBbmR1cmlsXEVudGl0eWhpc3RvcnlcVjHiAiRBbmR1cmlsXEVudGl0eWhpc3RvcnlcVjFcR1BCTWV0YWRhdGHqAhpBbmR1cmlsOjpFbnRpdHloaXN0b3J5OjpWMWIGcHJvdG8z", [file_anduril_entityhistory_v1_history_pub, file_anduril_entitymanager_v1_filter_pub, file_google_protobuf_timestamp]);

/**
 * Describes the message anduril.entityhistory.v1.ListHistoryRequest.
 * Use `create(ListHistoryRequestSchema)` to create a new message.
 */
export const ListHistoryRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 0);

/**
 * Describes the message anduril.entityhistory.v1.ListHistoryResponse.
 * Use `create(ListHistoryResponseSchema)` to create a new message.
 */
export const ListHistoryResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 1);

/**
 * Describes the message anduril.entityhistory.v1.HistoryQuery.
 * Use `create(HistoryQuerySchema)` to create a new message.
 */
export const HistoryQuerySchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 2);

/**
 * Describes the message anduril.entityhistory.v1.TimeRange.
 * Use `create(TimeRangeSchema)` to create a new message.
 */
export const TimeRangeSchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 3);

/**
 * Describes the message anduril.entityhistory.v1.Downsample.
 * Use `create(DownsampleSchema)` to create a new message.
 */
export const DownsampleSchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 4);

/**
 * Describes the message anduril.entityhistory.v1.DownsampleDuration.
 * Use `create(DownsampleDurationSchema)` to create a new message.
 */
export const DownsampleDurationSchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 5);

/**
 * Describes the message anduril.entityhistory.v1.StreamBackfillUpdatesRequest.
 * Use `create(StreamBackfillUpdatesRequestSchema)` to create a new message.
 */
export const StreamBackfillUpdatesRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 6);

/**
 * Describes the message anduril.entityhistory.v1.StreamBackfillUpdatesResponse.
 * Use `create(StreamBackfillUpdatesResponseSchema)` to create a new message.
 */
export const StreamBackfillUpdatesResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 7);

/**
 * Describes the message anduril.entityhistory.v1.BackfillUpdate.
 * Use `create(BackfillUpdateSchema)` to create a new message.
 */
export const BackfillUpdateSchema = /*@__PURE__*/
  messageDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 8);

/**
 * The EntityHistoryAPI provides UI-centric data models for understanding
 * the historic view of a battle space. The API draws heavily on the Entity
 * data model and Entity filter to form the core of its client contract.
 *
 * @generated from service anduril.entityhistory.v1.EntityHistoryAPI
 */
export const EntityHistoryAPI = /*@__PURE__*/
  serviceDesc(file_anduril_entityhistory_v1_entity_history_api_pub, 0);
