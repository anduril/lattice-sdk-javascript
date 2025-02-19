// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/taskmanager/v1/task.pub.proto (package anduril.taskmanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_entitymanager_v1_entity_pub } from "../../entitymanager/v1/entity.pub_pb.js";
import { file_google_protobuf_any, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/taskmanager/v1/task.pub.proto.
 */
export const file_anduril_taskmanager_v1_task_pub = /*@__PURE__*/
  fileDesc("CiVhbmR1cmlsL3Rhc2ttYW5hZ2VyL3YxL3Rhc2sucHViLnByb3RvEhZhbmR1cmlsLnRhc2ttYW5hZ2VyLnYxItsFCgRUYXNrEjQKB3ZlcnNpb24YASABKAsyIy5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlRhc2tWZXJzaW9uEhgKDGRpc3BsYXlfbmFtZRgCIAEoCUICGAESKwoNc3BlY2lmaWNhdGlvbhgDIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSNQoKY3JlYXRlZF9ieRgQIAEoCzIhLmFuZHVyaWwudGFza21hbmFnZXIudjEuUHJpbmNpcGFsEjoKD2xhc3RfdXBkYXRlZF9ieRgEIAEoCzIhLmFuZHVyaWwudGFza21hbmFnZXIudjEuUHJpbmNpcGFsEjQKEGxhc3RfdXBkYXRlX3RpbWUYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEjIKBnN0YXR1cxgFIAEoCzIiLmFuZHVyaWwudGFza21hbmFnZXIudjEuVGFza1N0YXR1cxIyCg5zY2hlZHVsZWRfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASNAoJcmVsYXRpb25zGAggASgLMiEuYW5kdXJpbC50YXNrbWFuYWdlci52MS5SZWxhdGlvbnMSEwoLZGVzY3JpcHRpb24YCiABKAkSHQoVaXNfZXhlY3V0ZWRfZWxzZXdoZXJlGAsgASgIEi8KC2NyZWF0ZV90aW1lGA0gASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI4CgtyZXBsaWNhdGlvbhgOIAEoCzIjLmFuZHVyaWwudGFza21hbmFnZXIudjEuUmVwbGljYXRpb24SPAoQaW5pdGlhbF9lbnRpdGllcxgPIAMoCzIiLmFuZHVyaWwudGFza21hbmFnZXIudjEuVGFza0VudGl0eRIsCgVvd25lchgMIAEoCzIdLmFuZHVyaWwudGFza21hbmFnZXIudjEuT3duZXJKBAgHEAgi0QIKClRhc2tTdGF0dXMSLgoGc3RhdHVzGAEgASgOMh4uYW5kdXJpbC50YXNrbWFuYWdlci52MS5TdGF0dXMSNQoKdGFza19lcnJvchgCIAEoCzIhLmFuZHVyaWwudGFza21hbmFnZXIudjEuVGFza0Vycm9yEiYKCHByb2dyZXNzGAQgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRIkCgZyZXN1bHQYBSABKAsyFC5nb29nbGUucHJvdG9idWYuQW55Ei4KCnN0YXJ0X3RpbWUYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEiYKCGVzdGltYXRlGAcgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRI2CgphbGxvY2F0aW9uGAggASgLMiIuYW5kdXJpbC50YXNrbWFuYWdlci52MS5BbGxvY2F0aW9uInoKCVRhc2tFcnJvchIvCgRjb2RlGAEgASgOMiEuYW5kdXJpbC50YXNrbWFuYWdlci52MS5FcnJvckNvZGUSDwoHbWVzc2FnZRgCIAEoCRIrCg1lcnJvcl9kZXRhaWxzGAMgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueSLbAQoJUHJpbmNpcGFsEjAKBnN5c3RlbRgBIAEoCzIeLmFuZHVyaWwudGFza21hbmFnZXIudjEuU3lzdGVtSAASLAoEdXNlchgCIAEoCzIcLmFuZHVyaWwudGFza21hbmFnZXIudjEuVXNlckgAEiwKBHRlYW0YBCABKAsyHC5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlRlYW1IABI3Cgxvbl9iZWhhbGZfb2YYAyABKAsyIS5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlByaW5jaXBhbEIHCgVhZ2VudCJXCgZTeXN0ZW0SFAoMc2VydmljZV9uYW1lGAEgASgJEhEKCWVudGl0eV9pZBgCIAEoCRIeChZtYW5hZ2VzX293bl9zY2hlZHVsaW5nGAQgASgISgQIAxAEIhcKBFVzZXISDwoHdXNlcl9pZBgBIAEoCSJYCglSZWxhdGlvbnMSMwoIYXNzaWduZWUYASABKAsyIS5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlByaW5jaXBhbBIWCg5wYXJlbnRfdGFza19pZBgCIAEoCSLNAQoJVGFza0V2ZW50EjUKCmV2ZW50X3R5cGUYASABKA4yIS5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLkV2ZW50VHlwZRIqCgR0YXNrGAIgASgLMhwuYW5kdXJpbC50YXNrbWFuYWdlci52MS5UYXNrEjMKCXRhc2tfdmlldxgDIAEoDjIgLmFuZHVyaWwudGFza21hbmFnZXIudjEuVGFza1ZpZXcSKAoEdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAiUgoLVGFza1ZlcnNpb24SDwoHdGFza19pZBgBIAEoCRIaChJkZWZpbml0aW9uX3ZlcnNpb24YAiABKA0SFgoOc3RhdHVzX3ZlcnNpb24YAyABKA0i3wEKDFN0YXR1c1VwZGF0ZRI0Cgd2ZXJzaW9uGAEgASgLMiMuYW5kdXJpbC50YXNrbWFuYWdlci52MS5UYXNrVmVyc2lvbhIyCgZzdGF0dXMYAiABKAsyIi5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlRhc2tTdGF0dXMSMQoGYXV0aG9yGAMgASgLMiEuYW5kdXJpbC50YXNrbWFuYWdlci52MS5QcmluY2lwYWwSMgoOc2NoZWR1bGVkX3RpbWUYBCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIj4KEERlZmluaXRpb25VcGRhdGUSKgoEdGFzaxgBIAEoCzIcLmFuZHVyaWwudGFza21hbmFnZXIudjEuVGFzayIgCgVPd25lchIRCgllbnRpdHlfaWQYAiABKAlKBAgBEAIiPQoLUmVwbGljYXRpb24SLgoKc3RhbGVfdGltZRgBIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAiQgoKQWxsb2NhdGlvbhI0Cg1hY3RpdmVfYWdlbnRzGAEgAygLMh0uYW5kdXJpbC50YXNrbWFuYWdlci52MS5BZ2VudCJJCgRUZWFtEhEKCWVudGl0eV9pZBgBIAEoCRIuCgdtZW1iZXJzGAIgAygLMh0uYW5kdXJpbC50YXNrbWFuYWdlci52MS5BZ2VudCIgCgVBZ2VudBIRCgllbnRpdHlfaWQYAiABKAlKBAgBEAIiUAoKVGFza0VudGl0eRIwCgZlbnRpdHkYASABKAsyIC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuRW50aXR5EhAKCHNuYXBzaG90GAIgASgIKu8CCgZTdGF0dXMSEgoOU1RBVFVTX0lOVkFMSUQQABISCg5TVEFUVVNfQ1JFQVRFRBABEh8KG1NUQVRVU19TQ0hFRFVMRURfSU5fTUFOQUdFUhACEg8KC1NUQVRVU19TRU5UEAMSGgoWU1RBVFVTX01BQ0hJTkVfUkVDRUlQVBAEEg4KClNUQVRVU19BQ0sQBRIQCgxTVEFUVVNfV0lMQ08QBhIUChBTVEFUVVNfRVhFQ1VUSU5HEAcSHQoZU1RBVFVTX1dBSVRJTkdfRk9SX1VQREFURRAIEhIKDlNUQVRVU19ET05FX09LEAkSFgoSU1RBVFVTX0RPTkVfTk9UX09LEAoSEwoPU1RBVFVTX1JFUExBQ0VEEAsSGwoXU1RBVFVTX0NBTkNFTF9SRVFVRVNURUQQDBIdChlTVEFUVVNfQ09NUExFVEVfUkVRVUVTVEVEEA0SGwoXU1RBVFVTX1ZFUlNJT05fUkVKRUNURUQQDiqFAQoJRXJyb3JDb2RlEhYKEkVSUk9SX0NPREVfSU5WQUxJRBAAEhgKFEVSUk9SX0NPREVfQ0FOQ0VMTEVEEAESFwoTRVJST1JfQ09ERV9SRUpFQ1RFRBACEhYKEkVSUk9SX0NPREVfVElNRU9VVBADEhUKEUVSUk9SX0NPREVfRkFJTEVEEAQqbgoJRXZlbnRUeXBlEhYKEkVWRU5UX1RZUEVfSU5WQUxJRBAAEhYKEkVWRU5UX1RZUEVfQ1JFQVRFRBABEhUKEUVWRU5UX1RZUEVfVVBEQVRFEAISGgoWRVZFTlRfVFlQRV9QUkVFWElTVElORxADKk0KCFRhc2tWaWV3EhUKEVRBU0tfVklFV19JTlZBTElEEAASFQoRVEFTS19WSUVXX01BTkFHRVIQARITCg9UQVNLX1ZJRVdfQUdFTlQQAkLvAQoaY29tLmFuZHVyaWwudGFza21hbmFnZXIudjFCDFRhc2tQdWJQcm90b1ABWklnaGUuYW5kdXJpbC5kZXYvYW5kdXJpbC9hbmR1cmlsYXBpcy1nby9hbmR1cmlsL3Rhc2ttYW5hZ2VyL3YxO3Rhc2ttYW5hZ2VyogIDQVRYqgIWQW5kdXJpbC5UYXNrbWFuYWdlci5WMcoCFkFuZHVyaWxcVGFza21hbmFnZXJcVjHiAiJBbmR1cmlsXFRhc2ttYW5hZ2VyXFYxXEdQQk1ldGFkYXRh6gIYQW5kdXJpbDo6VGFza21hbmFnZXI6OlYxYgZwcm90bzM", [file_anduril_entitymanager_v1_entity_pub, file_google_protobuf_any, file_google_protobuf_timestamp]);

/**
 * Describes the message anduril.taskmanager.v1.Task.
 * Use `create(TaskSchema)` to create a new message.
 */
export const TaskSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 0);

/**
 * Describes the message anduril.taskmanager.v1.TaskStatus.
 * Use `create(TaskStatusSchema)` to create a new message.
 */
export const TaskStatusSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 1);

/**
 * Describes the message anduril.taskmanager.v1.TaskError.
 * Use `create(TaskErrorSchema)` to create a new message.
 */
export const TaskErrorSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 2);

/**
 * Describes the message anduril.taskmanager.v1.Principal.
 * Use `create(PrincipalSchema)` to create a new message.
 */
export const PrincipalSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 3);

/**
 * Describes the message anduril.taskmanager.v1.System.
 * Use `create(SystemSchema)` to create a new message.
 */
export const SystemSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 4);

/**
 * Describes the message anduril.taskmanager.v1.User.
 * Use `create(UserSchema)` to create a new message.
 */
export const UserSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 5);

/**
 * Describes the message anduril.taskmanager.v1.Relations.
 * Use `create(RelationsSchema)` to create a new message.
 */
export const RelationsSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 6);

/**
 * Describes the message anduril.taskmanager.v1.TaskEvent.
 * Use `create(TaskEventSchema)` to create a new message.
 */
export const TaskEventSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 7);

/**
 * Describes the message anduril.taskmanager.v1.TaskVersion.
 * Use `create(TaskVersionSchema)` to create a new message.
 */
export const TaskVersionSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 8);

/**
 * Describes the message anduril.taskmanager.v1.StatusUpdate.
 * Use `create(StatusUpdateSchema)` to create a new message.
 */
export const StatusUpdateSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 9);

/**
 * Describes the message anduril.taskmanager.v1.DefinitionUpdate.
 * Use `create(DefinitionUpdateSchema)` to create a new message.
 */
export const DefinitionUpdateSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 10);

/**
 * Describes the message anduril.taskmanager.v1.Owner.
 * Use `create(OwnerSchema)` to create a new message.
 */
export const OwnerSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 11);

/**
 * Describes the message anduril.taskmanager.v1.Replication.
 * Use `create(ReplicationSchema)` to create a new message.
 */
export const ReplicationSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 12);

/**
 * Describes the message anduril.taskmanager.v1.Allocation.
 * Use `create(AllocationSchema)` to create a new message.
 */
export const AllocationSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 13);

/**
 * Describes the message anduril.taskmanager.v1.Team.
 * Use `create(TeamSchema)` to create a new message.
 */
export const TeamSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 14);

/**
 * Describes the message anduril.taskmanager.v1.Agent.
 * Use `create(AgentSchema)` to create a new message.
 */
export const AgentSchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 15);

/**
 * Describes the message anduril.taskmanager.v1.TaskEntity.
 * Use `create(TaskEntitySchema)` to create a new message.
 */
export const TaskEntitySchema = /*@__PURE__*/
  messageDesc(file_anduril_taskmanager_v1_task_pub, 16);

/**
 * Describes the enum anduril.taskmanager.v1.Status.
 */
export const StatusSchema = /*@__PURE__*/
  enumDesc(file_anduril_taskmanager_v1_task_pub, 0);

/**
 * The Status of a Task definition through its lifecycle. Each Definition Version can have its own Status.
 * For example, Definition v1 could go CREATED -> SENT -> WILCO -> REPLACED, with v2 then potentially in sent Status.
 *
 * @generated from enum anduril.taskmanager.v1.Status
 */
export const Status = /*@__PURE__*/
  tsEnum(StatusSchema);

/**
 * Describes the enum anduril.taskmanager.v1.ErrorCode.
 */
export const ErrorCodeSchema = /*@__PURE__*/
  enumDesc(file_anduril_taskmanager_v1_task_pub, 1);

/**
 * Error code associated with a Task error.
 *
 * @generated from enum anduril.taskmanager.v1.ErrorCode
 */
export const ErrorCode = /*@__PURE__*/
  tsEnum(ErrorCodeSchema);

/**
 * Describes the enum anduril.taskmanager.v1.EventType.
 */
export const EventTypeSchema = /*@__PURE__*/
  enumDesc(file_anduril_taskmanager_v1_task_pub, 2);

/**
 * The type of Task event.
 *
 * @generated from enum anduril.taskmanager.v1.EventType
 */
export const EventType = /*@__PURE__*/
  tsEnum(EventTypeSchema);

/**
 * Describes the enum anduril.taskmanager.v1.TaskView.
 */
export const TaskViewSchema = /*@__PURE__*/
  enumDesc(file_anduril_taskmanager_v1_task_pub, 3);

/**
 * View of a Task through its lifecycle.
 * For example, a definition v1 of a task may be running on an agent, indicated by TASK_VIEW_AGENT,
 * while the definition v2 may not have been received yet, indicated by TASK_VIEW_MANAGER.
 *
 * @generated from enum anduril.taskmanager.v1.TaskView
 */
export const TaskView = /*@__PURE__*/
  tsEnum(TaskViewSchema);

