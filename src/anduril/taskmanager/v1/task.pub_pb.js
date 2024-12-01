// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/taskmanager/v1/task.pub.proto (package anduril.taskmanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_entitymanager_v1_entity_pub } from "../../entitymanager/v1/entity.pub_pb";
import { file_google_protobuf_any, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/taskmanager/v1/task.pub.proto.
 */
export const file_anduril_taskmanager_v1_task_pub = /*@__PURE__*/
  fileDesc("CiVhbmR1cmlsL3Rhc2ttYW5hZ2VyL3YxL3Rhc2sucHViLnByb3RvEhZhbmR1cmlsLnRhc2ttYW5hZ2VyLnYxItcFCgRUYXNrEjQKB3ZlcnNpb24YASABKAsyIy5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlRhc2tWZXJzaW9uEhQKDGRpc3BsYXlfbmFtZRgCIAEoCRIrCg1zcGVjaWZpY2F0aW9uGAMgASgLMhQuZ29vZ2xlLnByb3RvYnVmLkFueRI1CgpjcmVhdGVkX2J5GBAgASgLMiEuYW5kdXJpbC50YXNrbWFuYWdlci52MS5QcmluY2lwYWwSOgoPbGFzdF91cGRhdGVkX2J5GAQgASgLMiEuYW5kdXJpbC50YXNrbWFuYWdlci52MS5QcmluY2lwYWwSNAoQbGFzdF91cGRhdGVfdGltZRgJIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASMgoGc3RhdHVzGAUgASgLMiIuYW5kdXJpbC50YXNrbWFuYWdlci52MS5UYXNrU3RhdHVzEjIKDnNjaGVkdWxlZF90aW1lGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI0CglyZWxhdGlvbnMYCCABKAsyIS5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlJlbGF0aW9ucxITCgtkZXNjcmlwdGlvbhgKIAEoCRIdChVpc19leGVjdXRlZF9lbHNld2hlcmUYCyABKAgSLwoLY3JlYXRlX3RpbWUYDSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEjgKC3JlcGxpY2F0aW9uGA4gASgLMiMuYW5kdXJpbC50YXNrbWFuYWdlci52MS5SZXBsaWNhdGlvbhI8ChBpbml0aWFsX2VudGl0aWVzGA8gAygLMiIuYW5kdXJpbC50YXNrbWFuYWdlci52MS5UYXNrRW50aXR5EiwKBW93bmVyGAwgASgLMh0uYW5kdXJpbC50YXNrbWFuYWdlci52MS5Pd25lckoECAcQCCLRAgoKVGFza1N0YXR1cxIuCgZzdGF0dXMYASABKA4yHi5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlN0YXR1cxI1Cgp0YXNrX2Vycm9yGAIgASgLMiEuYW5kdXJpbC50YXNrbWFuYWdlci52MS5UYXNrRXJyb3ISJgoIcHJvZ3Jlc3MYBCABKAsyFC5nb29nbGUucHJvdG9idWYuQW55EiQKBnJlc3VsdBgFIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnkSLgoKc3RhcnRfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXASJgoIZXN0aW1hdGUYByABKAsyFC5nb29nbGUucHJvdG9idWYuQW55EjYKCmFsbG9jYXRpb24YCCABKAsyIi5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLkFsbG9jYXRpb24iegoJVGFza0Vycm9yEi8KBGNvZGUYASABKA4yIS5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLkVycm9yQ29kZRIPCgdtZXNzYWdlGAIgASgJEisKDWVycm9yX2RldGFpbHMYAyABKAsyFC5nb29nbGUucHJvdG9idWYuQW55ItsBCglQcmluY2lwYWwSMAoGc3lzdGVtGAEgASgLMh4uYW5kdXJpbC50YXNrbWFuYWdlci52MS5TeXN0ZW1IABIsCgR1c2VyGAIgASgLMhwuYW5kdXJpbC50YXNrbWFuYWdlci52MS5Vc2VySAASLAoEdGVhbRgEIAEoCzIcLmFuZHVyaWwudGFza21hbmFnZXIudjEuVGVhbUgAEjcKDG9uX2JlaGFsZl9vZhgDIAEoCzIhLmFuZHVyaWwudGFza21hbmFnZXIudjEuUHJpbmNpcGFsQgcKBWFnZW50IlcKBlN5c3RlbRIUCgxzZXJ2aWNlX25hbWUYASABKAkSEQoJZW50aXR5X2lkGAIgASgJEh4KFm1hbmFnZXNfb3duX3NjaGVkdWxpbmcYBCABKAhKBAgDEAQiFwoEVXNlchIPCgd1c2VyX2lkGAEgASgJIlgKCVJlbGF0aW9ucxIzCghhc3NpZ25lZRgBIAEoCzIhLmFuZHVyaWwudGFza21hbmFnZXIudjEuUHJpbmNpcGFsEhYKDnBhcmVudF90YXNrX2lkGAIgASgJIs0BCglUYXNrRXZlbnQSNQoKZXZlbnRfdHlwZRgBIAEoDjIhLmFuZHVyaWwudGFza21hbmFnZXIudjEuRXZlbnRUeXBlEioKBHRhc2sYAiABKAsyHC5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlRhc2sSMwoJdGFza192aWV3GAMgASgOMiAuYW5kdXJpbC50YXNrbWFuYWdlci52MS5UYXNrVmlldxIoCgR0aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJSCgtUYXNrVmVyc2lvbhIPCgd0YXNrX2lkGAEgASgJEhoKEmRlZmluaXRpb25fdmVyc2lvbhgCIAEoDRIWCg5zdGF0dXNfdmVyc2lvbhgDIAEoDSLfAQoMU3RhdHVzVXBkYXRlEjQKB3ZlcnNpb24YASABKAsyIy5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlRhc2tWZXJzaW9uEjIKBnN0YXR1cxgCIAEoCzIiLmFuZHVyaWwudGFza21hbmFnZXIudjEuVGFza1N0YXR1cxIxCgZhdXRob3IYAyABKAsyIS5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLlByaW5jaXBhbBIyCg5zY2hlZHVsZWRfdGltZRgEIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAiPgoQRGVmaW5pdGlvblVwZGF0ZRIqCgR0YXNrGAEgASgLMhwuYW5kdXJpbC50YXNrbWFuYWdlci52MS5UYXNrIiAKBU93bmVyEhEKCWVudGl0eV9pZBgCIAEoCUoECAEQAiI9CgtSZXBsaWNhdGlvbhIuCgpzdGFsZV90aW1lGAEgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcCJCCgpBbGxvY2F0aW9uEjQKDWFjdGl2ZV9hZ2VudHMYASADKAsyHS5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLkFnZW50IkkKBFRlYW0SEQoJZW50aXR5X2lkGAEgASgJEi4KB21lbWJlcnMYAiADKAsyHS5hbmR1cmlsLnRhc2ttYW5hZ2VyLnYxLkFnZW50IiAKBUFnZW50EhEKCWVudGl0eV9pZBgCIAEoCUoECAEQAiJQCgpUYXNrRW50aXR5EjAKBmVudGl0eRgBIAEoCzIgLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5FbnRpdHkSEAoIc25hcHNob3QYAiABKAgq7wIKBlN0YXR1cxISCg5TVEFUVVNfSU5WQUxJRBAAEhIKDlNUQVRVU19DUkVBVEVEEAESHwobU1RBVFVTX1NDSEVEVUxFRF9JTl9NQU5BR0VSEAISDwoLU1RBVFVTX1NFTlQQAxIaChZTVEFUVVNfTUFDSElORV9SRUNFSVBUEAQSDgoKU1RBVFVTX0FDSxAFEhAKDFNUQVRVU19XSUxDTxAGEhQKEFNUQVRVU19FWEVDVVRJTkcQBxIdChlTVEFUVVNfV0FJVElOR19GT1JfVVBEQVRFEAgSEgoOU1RBVFVTX0RPTkVfT0sQCRIWChJTVEFUVVNfRE9ORV9OT1RfT0sQChITCg9TVEFUVVNfUkVQTEFDRUQQCxIbChdTVEFUVVNfQ0FOQ0VMX1JFUVVFU1RFRBAMEh0KGVNUQVRVU19DT01QTEVURV9SRVFVRVNURUQQDRIbChdTVEFUVVNfVkVSU0lPTl9SRUpFQ1RFRBAOKoUBCglFcnJvckNvZGUSFgoSRVJST1JfQ09ERV9JTlZBTElEEAASGAoURVJST1JfQ09ERV9DQU5DRUxMRUQQARIXChNFUlJPUl9DT0RFX1JFSkVDVEVEEAISFgoSRVJST1JfQ09ERV9USU1FT1VUEAMSFQoRRVJST1JfQ09ERV9GQUlMRUQQBCpuCglFdmVudFR5cGUSFgoSRVZFTlRfVFlQRV9JTlZBTElEEAASFgoSRVZFTlRfVFlQRV9DUkVBVEVEEAESFQoRRVZFTlRfVFlQRV9VUERBVEUQAhIaChZFVkVOVF9UWVBFX1BSRUVYSVNUSU5HEAMqTQoIVGFza1ZpZXcSFQoRVEFTS19WSUVXX0lOVkFMSUQQABIVChFUQVNLX1ZJRVdfTUFOQUdFUhABEhMKD1RBU0tfVklFV19BR0VOVBACQu8BChpjb20uYW5kdXJpbC50YXNrbWFuYWdlci52MUIMVGFza1B1YlByb3RvUAFaSWdoZS5hbmR1cmlsLmRldi9hbmR1cmlsL2FuZHVyaWxhcGlzLWdvL2FuZHVyaWwvdGFza21hbmFnZXIvdjE7dGFza21hbmFnZXKiAgNBVFiqAhZBbmR1cmlsLlRhc2ttYW5hZ2VyLlYxygIWQW5kdXJpbFxUYXNrbWFuYWdlclxWMeICIkFuZHVyaWxcVGFza21hbmFnZXJcVjFcR1BCTWV0YWRhdGHqAhhBbmR1cmlsOjpUYXNrbWFuYWdlcjo6VjFiBnByb3RvMw", [file_anduril_entitymanager_v1_entity_pub, file_google_protobuf_any, file_google_protobuf_timestamp]);

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

