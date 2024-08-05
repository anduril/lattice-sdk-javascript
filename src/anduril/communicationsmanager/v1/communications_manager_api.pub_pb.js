// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/communicationsmanager/v1/communications_manager_api.pub.proto (package anduril.communicationsmanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, serviceDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_communicationsmanager_v1_common_pub } from "./common.pub_pb";
import { file_anduril_communicationsmanager_v1_integration_pub } from "./integration.pub_pb";

/**
 * Describes the file anduril/communicationsmanager/v1/communications_manager_api.pub.proto.
 */
export const file_anduril_communicationsmanager_v1_communications_manager_api_pub = /*@__PURE__*/
  fileDesc("CkVhbmR1cmlsL2NvbW11bmljYXRpb25zbWFuYWdlci92MS9jb21tdW5pY2F0aW9uc19tYW5hZ2VyX2FwaS5wdWIucHJvdG8SIGFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxIpUBCg5QdXRSdWxlUmVxdWVzdBI0CgRydWxlGAIgASgLMiYuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUnVsZRJNChFkaXN0cmlidXRpb25fcnVsZRgBIAEoCzIyLmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkRpc3RyaWJ1dGlvblJ1bGUi4wEKD1B1dFJ1bGVSZXNwb25zZRI0CgRydWxlGAMgASgLMiYuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUnVsZRJLCgVlcnJvchgCIAEoCzI8LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkNvbW11bmljYXRpb25zTWFuYWdlckVycm9yEk0KEWRpc3RyaWJ1dGlvbl9ydWxlGAEgASgLMjIuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuRGlzdHJpYnV0aW9uUnVsZSJtChJTdHJlYW1SdWxlc1JlcXVlc3QSPQoJcnVsZV90eXBlGAEgAygOMiouYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUnVsZVR5cGUSGAoQcHJlZXhpc3Rpbmdfb25seRgCIAEoCCKwAQoTU3RyZWFtUnVsZXNSZXNwb25zZRI/CgpydWxlX2V2ZW50GAIgASgLMisuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUnVsZUV2ZW50ElgKF2Rpc3RyaWJ1dGlvbl9ydWxlX2V2ZW50GAEgASgLMjcuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuRGlzdHJpYnV0aW9uUnVsZUV2ZW50Ip4BChFEZWxldGVSdWxlUmVxdWVzdBI0CgRydWxlGAIgASgLMiYuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUnVsZRJNChFkaXN0cmlidXRpb25fcnVsZRgBIAEoCzIyLmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkRpc3RyaWJ1dGlvblJ1bGVKBAgDEAQi5gEKEkRlbGV0ZVJ1bGVSZXNwb25zZRI0CgRydWxlGAMgASgLMiYuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUnVsZRJLCgVlcnJvchgCIAEoCzI8LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkNvbW11bmljYXRpb25zTWFuYWdlckVycm9yEk0KEWRpc3RyaWJ1dGlvbl9ydWxlGAEgASgLMjIuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuRGlzdHJpYnV0aW9uUnVsZSpmCghSdWxlVHlwZRIVChFSVUxFX1RZUEVfSU5WQUxJRBAAEhQKEFJVTEVfVFlQRV9FTlRJVFkQARISCg5SVUxFX1RZUEVfQkxPQhACEhkKFVJVTEVfVFlQRV9JTlRFR1JBVElPThADMr8GChhDb21tdW5pY2F0aW9uc01hbmFnZXJBUEkSbgoHUHV0UnVsZRIwLmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLlB1dFJ1bGVSZXF1ZXN0GjEuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUHV0UnVsZVJlc3BvbnNlEnwKC1N0cmVhbVJ1bGVzEjQuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuU3RyZWFtUnVsZXNSZXF1ZXN0GjUuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuU3RyZWFtUnVsZXNSZXNwb25zZTABEncKCkRlbGV0ZVJ1bGUSMy5hbmR1cmlsLmNvbW11bmljYXRpb25zbWFuYWdlci52MS5EZWxldGVSdWxlUmVxdWVzdBo0LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkRlbGV0ZVJ1bGVSZXNwb25zZRKRAQoSU3RyZWFtSW50ZWdyYXRpb25zEjsuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuU3RyZWFtSW50ZWdyYXRpb25zUmVxdWVzdBo8LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLlN0cmVhbUludGVncmF0aW9uc1Jlc3BvbnNlMAEShgEKD0dldEludGVncmF0aW9ucxI4LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkdldEludGVncmF0aW9uc1JlcXVlc3QaOS5hbmR1cmlsLmNvbW11bmljYXRpb25zbWFuYWdlci52MS5HZXRJbnRlZ3JhdGlvbnNSZXNwb25zZRKeAQoXSW50ZWdyYXRpb25IZWFsdGhVcGRhdGUSQC5hbmR1cmlsLmNvbW11bmljYXRpb25zbWFuYWdlci52MS5JbnRlZ3JhdGlvbkhlYWx0aFVwZGF0ZVJlcXVlc3QaQS5hbmR1cmlsLmNvbW11bmljYXRpb25zbWFuYWdlci52MS5JbnRlZ3JhdGlvbkhlYWx0aFVwZGF0ZVJlc3BvbnNlQrMCCiRjb20uYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjFCIENvbW11bmljYXRpb25zTWFuYWdlckFwaVB1YlByb3RvUAFaR2doZS5hbmR1cmlsLmRldi9hbmR1cmlsL2FuZHVyaWxhcGlzLWdvL2FuZHVyaWwvY29tbXVuaWNhdGlvbnNtYW5hZ2VyL3YxogIDQUNYqgIgQW5kdXJpbC5Db21tdW5pY2F0aW9uc21hbmFnZXIuVjHKAiBBbmR1cmlsXENvbW11bmljYXRpb25zbWFuYWdlclxWMeICLEFuZHVyaWxcQ29tbXVuaWNhdGlvbnNtYW5hZ2VyXFYxXEdQQk1ldGFkYXRh6gIiQW5kdXJpbDo6Q29tbXVuaWNhdGlvbnNtYW5hZ2VyOjpWMWIGcHJvdG8z", [file_anduril_communicationsmanager_v1_common_pub, file_anduril_communicationsmanager_v1_integration_pub]);

/**
 * Describes the message anduril.communicationsmanager.v1.PutRuleRequest.
 * Use `create(PutRuleRequestSchema)` to create a new message.
 */
export const PutRuleRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_communications_manager_api_pub, 0);

/**
 * Describes the message anduril.communicationsmanager.v1.PutRuleResponse.
 * Use `create(PutRuleResponseSchema)` to create a new message.
 */
export const PutRuleResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_communications_manager_api_pub, 1);

/**
 * Describes the message anduril.communicationsmanager.v1.StreamRulesRequest.
 * Use `create(StreamRulesRequestSchema)` to create a new message.
 */
export const StreamRulesRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_communications_manager_api_pub, 2);

/**
 * Describes the message anduril.communicationsmanager.v1.StreamRulesResponse.
 * Use `create(StreamRulesResponseSchema)` to create a new message.
 */
export const StreamRulesResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_communications_manager_api_pub, 3);

/**
 * Describes the message anduril.communicationsmanager.v1.DeleteRuleRequest.
 * Use `create(DeleteRuleRequestSchema)` to create a new message.
 */
export const DeleteRuleRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_communications_manager_api_pub, 4);

/**
 * Describes the message anduril.communicationsmanager.v1.DeleteRuleResponse.
 * Use `create(DeleteRuleResponseSchema)` to create a new message.
 */
export const DeleteRuleResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_communications_manager_api_pub, 5);

/**
 * Describes the enum anduril.communicationsmanager.v1.RuleType.
 */
export const RuleTypeSchema = /*@__PURE__*/
  enumDesc(file_anduril_communicationsmanager_v1_communications_manager_api_pub, 0);

/**
 * @generated from enum anduril.communicationsmanager.v1.RuleType
 */
export const RuleType = /*@__PURE__*/
  tsEnum(RuleTypeSchema);

/**
 * Manages the policies for distribution of data via application of filters & priorities.
 *
 * @generated from service anduril.communicationsmanager.v1.CommunicationsManagerAPI
 */
export const CommunicationsManagerAPI = /*@__PURE__*/
  serviceDesc(file_anduril_communicationsmanager_v1_communications_manager_api_pub, 0);
