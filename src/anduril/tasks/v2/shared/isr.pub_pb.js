// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/tasks/v2/shared/isr.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_tasks_v2_common_pub } from "../common.pub_pb";
import { file_anduril_tasks_v2_objective_pub } from "../objective.pub_pb";
import { file_google_protobuf_timestamp, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/tasks/v2/shared/isr.pub.proto.
 */
export const file_anduril_tasks_v2_shared_isr_pub = /*@__PURE__*/
  fileDesc("CiVhbmR1cmlsL3Rhc2tzL3YyL3NoYXJlZC9pc3IucHViLnByb3RvEhBhbmR1cmlsLnRhc2tzLnYyInIKC0ludmVzdGlnYXRlEi4KCW9iamVjdGl2ZRgBIAEoCzIbLmFuZHVyaWwudGFza3MudjIuT2JqZWN0aXZlEjMKCnBhcmFtZXRlcnMYAiABKAsyHy5hbmR1cmlsLnRhc2tzLnYyLklTUlBhcmFtZXRlcnMibwoIVmlzdWFsSWQSLgoJb2JqZWN0aXZlGAEgASgLMhsuYW5kdXJpbC50YXNrcy52Mi5PYmplY3RpdmUSMwoKcGFyYW1ldGVycxgCIAEoCzIfLmFuZHVyaWwudGFza3MudjIuSVNSUGFyYW1ldGVycyKbAQoDTWFwEi4KCW9iamVjdGl2ZRgBIAEoCzIbLmFuZHVyaWwudGFza3MudjIuT2JqZWN0aXZlEjMKCnBhcmFtZXRlcnMYAiABKAsyHy5hbmR1cmlsLnRhc2tzLnYyLklTUlBhcmFtZXRlcnMSLwoJbWluX25paXJzGAMgASgLMhwuZ29vZ2xlLnByb3RvYnVmLlVJbnQzMlZhbHVlIqABCgZMb2l0ZXISLgoJb2JqZWN0aXZlGAEgASgLMhsuYW5kdXJpbC50YXNrcy52Mi5PYmplY3RpdmUSMQoLbG9pdGVyX3R5cGUYAiABKAsyHC5hbmR1cmlsLnRhc2tzLnYyLkxvaXRlclR5cGUSMwoKcGFyYW1ldGVycxgDIAEoCzIfLmFuZHVyaWwudGFza3MudjIuSVNSUGFyYW1ldGVycyLKAQoKQXJlYVNlYXJjaBIuCglvYmplY3RpdmUYASABKAsyGy5hbmR1cmlsLnRhc2tzLnYyLk9iamVjdGl2ZRInCgZwcmlvcnMYAiADKAsyFy5hbmR1cmlsLnRhc2tzLnYyLlByaW9yEi0KDHBhcnRpY2lwYW50cxgDIAMoCzIXLmFuZHVyaWwudGFza3MudjIuQWdlbnQSNAoNY29udHJvbF9hcmVhcxgEIAMoCzIdLmFuZHVyaWwudGFza3MudjIuQ29udHJvbEFyZWEizAEKDFZvbHVtZVNlYXJjaBIuCglvYmplY3RpdmUYASABKAsyGy5hbmR1cmlsLnRhc2tzLnYyLk9iamVjdGl2ZRInCgZwcmlvcnMYAiADKAsyFy5hbmR1cmlsLnRhc2tzLnYyLlByaW9yEi0KDHBhcnRpY2lwYW50cxgDIAMoCzIXLmFuZHVyaWwudGFza3MudjIuQWdlbnQSNAoNY29udHJvbF9hcmVhcxgEIAMoCzIdLmFuZHVyaWwudGFza3MudjIuQ29udHJvbEFyZWEiaAoTSW1wcm92ZVRyYWNrUXVhbGl0eRIuCglvYmplY3RpdmUYASABKAsyGy5hbmR1cmlsLnRhc2tzLnYyLk9iamVjdGl2ZRIhChl0ZXJtaW5hdGlvbl90cmFja19xdWFsaXR5GAIgASgNIm0KBlNoYWRvdxIuCglvYmplY3RpdmUYASABKAsyGy5hbmR1cmlsLnRhc2tzLnYyLk9iamVjdGl2ZRIzCgpwYXJhbWV0ZXJzGAIgASgLMh8uYW5kdXJpbC50YXNrcy52Mi5JU1JQYXJhbWV0ZXJzIk4KCkxvaXRlclR5cGUSMQoKb3JiaXRfdHlwZRgBIAEoCzIbLmFuZHVyaWwudGFza3MudjIuT3JiaXRUeXBlSABCDQoLbG9pdGVyX3R5cGUipAEKCU9yYml0VHlwZRIzCglkaXJlY3Rpb24YASABKA4yIC5hbmR1cmlsLnRhc2tzLnYyLk9yYml0RGlyZWN0aW9uEi8KB3BhdHRlcm4YAiABKA4yHi5hbmR1cmlsLnRhc2tzLnYyLk9yYml0UGF0dGVybhIxCghkdXJhdGlvbhgDIAEoCzIfLmFuZHVyaWwudGFza3MudjIuT3JiaXREdXJhdGlvbiJvCg1PcmJpdER1cmF0aW9uEjkKDmR1cmF0aW9uX3JhbmdlGAEgASgLMh8uYW5kdXJpbC50YXNrcy52Mi5EdXJhdGlvblJhbmdlSAASFwoNbnVtX29mX29yYml0cxgCIAEoBEgAQgoKCGR1cmF0aW9uIk8KBVByaW9yEhMKCWVudGl0eV9pZBgBIAEoCUgAEigKBXBvaW50GAUgASgLMhcuYW5kdXJpbC50YXNrcy52Mi5Qb2ludEgAQgcKBXByaW9yItQCCg1JU1JQYXJhbWV0ZXJzEi4KBXNwZWVkGAEgASgLMhsuZ29vZ2xlLnByb3RvYnVmLkZsb2F0VmFsdWVCAhgBEi4KCXNwZWVkX21fcxgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlEjgKE3N0YW5kb2ZmX2Rpc3RhbmNlX20YAyABKAsyGy5nb29nbGUucHJvdG9idWYuRmxvYXRWYWx1ZRI6ChFzdGFuZG9mZl9kaXN0YW5jZRgEIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlQgIYARIzCg5zdGFuZG9mZl9hbmdsZRgFIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlEjgKEmV4cGlyYXRpb25fdGltZV9tcxgGIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5VSW50NjRWYWx1ZSL/AQoLR2ltYmFsUG9pbnQSLgoHbG9va19hdBgBIAEoCzIbLmFuZHVyaWwudGFza3MudjIuT2JqZWN0aXZlSAASRQoSY2VsZXN0aWFsX2xvY2F0aW9uGAIgASgLMicuYW5kdXJpbC50YXNrcy52Mi5BemltdXRoRWxldmF0aW9uUG9pbnRIABI2Cg5mcmFtZV9sb2NhdGlvbhgEIAEoCzIcLmFuZHVyaWwudGFza3MudjIuRnJhbWVQb2ludEgAEjMKCnBhcmFtZXRlcnMYAyABKAsyHy5hbmR1cmlsLnRhc2tzLnYyLklTUlBhcmFtZXRlcnNCDAoKcG9pbnRfdHlwZSI7ChVBemltdXRoRWxldmF0aW9uUG9pbnQSDwoHYXppbXV0aBgBIAEoARIRCgllbGV2YXRpb24YAiABKAEiUQoKRnJhbWVQb2ludBIJCgF4GAEgASgCEgkKAXkYAiABKAISLQoJdGltZXN0YW1wGAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCKKAQoKR2ltYmFsWm9vbRI6ChJzZXRfaG9yaXpvbnRhbF9mb3YYASABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWVIABI4ChFzZXRfbWFnbmlmaWNhdGlvbhgCIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5GbG9hdFZhbHVlSABCBgoEbW9kZSJjCgdNb25pdG9yEi4KCW9iamVjdGl2ZRgBIAEoCzIbLmFuZHVyaWwudGFza3MudjIuT2JqZWN0aXZlEhAKCHRyYWNrX2lkGAIgASgJEhYKDnRyYWNrX3Byb2R1Y2VyGAMgASgJImsKBFNjYW4SLgoJb2JqZWN0aXZlGAEgASgLMhsuYW5kdXJpbC50YXNrcy52Mi5PYmplY3RpdmUSMwoKcGFyYW1ldGVycxgCIAEoCzIfLmFuZHVyaWwudGFza3MudjIuSVNSUGFyYW1ldGVycyJ9ChZCYXR0bGVEYW1hZ2VBc3Nlc3NtZW50Ei4KCW9iamVjdGl2ZRgBIAEoCzIbLmFuZHVyaWwudGFza3MudjIuT2JqZWN0aXZlEjMKCnBhcmFtZXRlcnMYAiABKAsyHy5hbmR1cmlsLnRhc2tzLnYyLklTUlBhcmFtZXRlcnMqbAoOT3JiaXREaXJlY3Rpb24SJQohT1JCSVRfRElSRUNUSU9OX0RJUkVDVElPTl9JTlZBTElEEAASGQoVT1JCSVRfRElSRUNUSU9OX1JJR0hUEAESGAoUT1JCSVRfRElSRUNUSU9OX0xFRlQQAiqAAQoMT3JiaXRQYXR0ZXJuEhkKFU9SQklUX1BBVFRFUk5fSU5WQUxJRBAAEhgKFE9SQklUX1BBVFRFUk5fQ0lSQ0xFEAESGwoXT1JCSVRfUEFUVEVSTl9SQUNFVFJBQ0sQAhIeChpPUkJJVF9QQVRURVJOX0ZJR1VSRV9FSUdIVBADQsQBChRjb20uYW5kdXJpbC50YXNrcy52MkILSXNyUHViUHJvdG9QAVo9Z2hlLmFuZHVyaWwuZGV2L2FuZHVyaWwvYW5kdXJpbGFwaXMtZ28vYW5kdXJpbC90YXNrcy92Mjt0YXNrc6ICA0FUWKoCEEFuZHVyaWwuVGFza3MuVjLKAhBBbmR1cmlsXFRhc2tzXFYy4gIcQW5kdXJpbFxUYXNrc1xWMlxHUEJNZXRhZGF0YeoCEkFuZHVyaWw6OlRhc2tzOjpWMmIGcHJvdG8z", [file_anduril_tasks_v2_common_pub, file_anduril_tasks_v2_objective_pub, file_google_protobuf_timestamp, file_google_protobuf_wrappers]);

/**
 * Describes the message anduril.tasks.v2.Investigate.
 * Use `create(InvestigateSchema)` to create a new message.
 */
export const InvestigateSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 0);

/**
 * Describes the message anduril.tasks.v2.VisualId.
 * Use `create(VisualIdSchema)` to create a new message.
 */
export const VisualIdSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 1);

/**
 * Describes the message anduril.tasks.v2.Map.
 * Use `create(MapSchema)` to create a new message.
 */
export const MapSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 2);

/**
 * Describes the message anduril.tasks.v2.Loiter.
 * Use `create(LoiterSchema)` to create a new message.
 */
export const LoiterSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 3);

/**
 * Describes the message anduril.tasks.v2.AreaSearch.
 * Use `create(AreaSearchSchema)` to create a new message.
 */
export const AreaSearchSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 4);

/**
 * Describes the message anduril.tasks.v2.VolumeSearch.
 * Use `create(VolumeSearchSchema)` to create a new message.
 */
export const VolumeSearchSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 5);

/**
 * Describes the message anduril.tasks.v2.ImproveTrackQuality.
 * Use `create(ImproveTrackQualitySchema)` to create a new message.
 */
export const ImproveTrackQualitySchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 6);

/**
 * Describes the message anduril.tasks.v2.Shadow.
 * Use `create(ShadowSchema)` to create a new message.
 */
export const ShadowSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 7);

/**
 * Describes the message anduril.tasks.v2.LoiterType.
 * Use `create(LoiterTypeSchema)` to create a new message.
 */
export const LoiterTypeSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 8);

/**
 * Describes the message anduril.tasks.v2.OrbitType.
 * Use `create(OrbitTypeSchema)` to create a new message.
 */
export const OrbitTypeSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 9);

/**
 * Describes the message anduril.tasks.v2.OrbitDuration.
 * Use `create(OrbitDurationSchema)` to create a new message.
 */
export const OrbitDurationSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 10);

/**
 * Describes the message anduril.tasks.v2.Prior.
 * Use `create(PriorSchema)` to create a new message.
 */
export const PriorSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 11);

/**
 * Describes the message anduril.tasks.v2.ISRParameters.
 * Use `create(ISRParametersSchema)` to create a new message.
 */
export const ISRParametersSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 12);

/**
 * Describes the message anduril.tasks.v2.GimbalPoint.
 * Use `create(GimbalPointSchema)` to create a new message.
 */
export const GimbalPointSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 13);

/**
 * Describes the message anduril.tasks.v2.AzimuthElevationPoint.
 * Use `create(AzimuthElevationPointSchema)` to create a new message.
 */
export const AzimuthElevationPointSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 14);

/**
 * Describes the message anduril.tasks.v2.FramePoint.
 * Use `create(FramePointSchema)` to create a new message.
 */
export const FramePointSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 15);

/**
 * Describes the message anduril.tasks.v2.GimbalZoom.
 * Use `create(GimbalZoomSchema)` to create a new message.
 */
export const GimbalZoomSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 16);

/**
 * Describes the message anduril.tasks.v2.Monitor.
 * Use `create(MonitorSchema)` to create a new message.
 */
export const MonitorSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 17);

/**
 * Describes the message anduril.tasks.v2.Scan.
 * Use `create(ScanSchema)` to create a new message.
 */
export const ScanSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 18);

/**
 * Describes the message anduril.tasks.v2.BattleDamageAssessment.
 * Use `create(BattleDamageAssessmentSchema)` to create a new message.
 */
export const BattleDamageAssessmentSchema = /*@__PURE__*/
  messageDesc(file_anduril_tasks_v2_shared_isr_pub, 19);

/**
 * Describes the enum anduril.tasks.v2.OrbitDirection.
 */
export const OrbitDirectionSchema = /*@__PURE__*/
  enumDesc(file_anduril_tasks_v2_shared_isr_pub, 0);

/**
 * Direction of the loiter relative to the front of the vehicle.
 *
 * @generated from enum anduril.tasks.v2.OrbitDirection
 */
export const OrbitDirection = /*@__PURE__*/
  tsEnum(OrbitDirectionSchema);

/**
 * Describes the enum anduril.tasks.v2.OrbitPattern.
 */
export const OrbitPatternSchema = /*@__PURE__*/
  enumDesc(file_anduril_tasks_v2_shared_isr_pub, 1);

/**
 * @generated from enum anduril.tasks.v2.OrbitPattern
 */
export const OrbitPattern = /*@__PURE__*/
  tsEnum(OrbitPatternSchema);
