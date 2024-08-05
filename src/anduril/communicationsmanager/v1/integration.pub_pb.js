// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/communicationsmanager/v1/integration.pub.proto (package anduril.communicationsmanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_communicationsmanager_v1_blobs_pub } from "./blobs.pub_pb";
import { file_anduril_communicationsmanager_v1_common_pub } from "./common.pub_pb";
import { file_anduril_communicationsmanager_v1_entity_pub } from "./entity.pub_pb";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/communicationsmanager/v1/integration.pub.proto.
 */
export const file_anduril_communicationsmanager_v1_integration_pub = /*@__PURE__*/
  fileDesc("CjZhbmR1cmlsL2NvbW11bmljYXRpb25zbWFuYWdlci92MS9pbnRlZ3JhdGlvbi5wdWIucHJvdG8SIGFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxIn0KGlJlZ2lzdGVySW50ZWdyYXRpb25SZXF1ZXN0EhgKEGludGVncmF0aW9uX25hbWUYASABKAkSRQoHZGV0YWlscxgCIAEoCzI0LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkludGVncmF0aW9uRGV0YWlscyL6AQoVUmVnaXN0ZXJlZEludGVncmF0aW9uEhgKEGludGVncmF0aW9uX25hbWUYASABKAkSDwoHbm9kZV9pZBgCIAEoCRITCgt2ZXJzaW9uX251bRgEIAEoAxJRChNpbnRlZ3JhdGlvbl9kZXRhaWxzGAMgASgLMjQuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuSW50ZWdyYXRpb25EZXRhaWxzEk4KDGhlYWx0aF9zdGF0ZRgFIAEoCzI4LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkludGVncmF0aW9uSGVhbHRoU3RhdGUiuQEKEkludGVncmF0aW9uRGV0YWlscxJSCg5lbnRpdHlfZGV0YWlscxgBIAEoCzI6LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkVudGl0eUludGVncmF0aW9uRGV0YWlscxJPCgxibG9iX2RldGFpbHMYAiABKAsyOS5hbmR1cmlsLmNvbW11bmljYXRpb25zbWFuYWdlci52MS5CbG9ic0ludGVncmF0aW9uRGV0YWlscyJPChxEZXJlZ2lzdGVySW50ZWdyYXRpb25SZXF1ZXN0EhgKEGludGVncmF0aW9uX25hbWUYASABKAkSDwoHbm9kZV9pZBgCIAEoCUoECAMQBCIfCh1EZXJlZ2lzdGVySW50ZWdyYXRpb25SZXNwb25zZSInChZHZXRJbnRlZ3JhdGlvbnNSZXF1ZXN0Eg0KBW5vZGVzGAEgAygJImcKF0dldEludGVncmF0aW9uc1Jlc3BvbnNlEkwKC2ludGVncmF0aW9uGAEgAygLMjcuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUmVnaXN0ZXJlZEludGVncmF0aW9uIgoKCEFsbE5vZGVzIgsKCUxvY2FsTm9kZSLJAQoZU3RyZWFtSW50ZWdyYXRpb25zUmVxdWVzdBI/CglhbGxfbm9kZXMYASABKAsyKi5hbmR1cmlsLmNvbW11bmljYXRpb25zbWFuYWdlci52MS5BbGxOb2Rlc0gAEkEKCmxvY2FsX25vZGUYAiABKAsyKy5hbmR1cmlsLmNvbW11bmljYXRpb25zbWFuYWdlci52MS5Mb2NhbE5vZGVIABIYChBwcmVleGlzdGluZ19vbmx5GAMgASgIQg4KDG93bmVyX2ZpbHRlciLLAQoQSW50ZWdyYXRpb25FdmVudBI/CgpldmVudF90eXBlGAEgASgOMisuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuRXZlbnRUeXBlEigKBHRpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEkwKC2ludGVncmF0aW9uGAMgASgLMjcuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuUmVnaXN0ZXJlZEludGVncmF0aW9uImsKGlN0cmVhbUludGVncmF0aW9uc1Jlc3BvbnNlEk0KEWludGVncmF0aW9uX2V2ZW50GAEgASgLMjIuYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuSW50ZWdyYXRpb25FdmVudCKKAQoeSW50ZWdyYXRpb25IZWFsdGhVcGRhdGVSZXF1ZXN0EhgKEGludGVncmF0aW9uX25hbWUYASABKAkSTgoMaGVhbHRoX3N0YXRlGAIgASgLMjguYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjEuSW50ZWdyYXRpb25IZWFsdGhTdGF0ZSIhCh9JbnRlZ3JhdGlvbkhlYWx0aFVwZGF0ZVJlc3BvbnNlIn8KFkludGVncmF0aW9uSGVhbHRoU3RhdGUSUAoNaGVhbHRoX3N0YXR1cxgBIAEoDjI5LmFuZHVyaWwuY29tbXVuaWNhdGlvbnNtYW5hZ2VyLnYxLkludGVncmF0aW9uSGVhbHRoU3RhdHVzEhMKC2Rlc2NyaXB0aW9uGAIgASgJKrcBChdJbnRlZ3JhdGlvbkhlYWx0aFN0YXR1cxIlCiFJTlRFR1JBVElPTl9IRUFMVEhfU1RBVFVTX0lOVkFMSUQQABIlCiFJTlRFR1JBVElPTl9IRUFMVEhfU1RBVFVTX1VOS05PV04QARIlCiFJTlRFR1JBVElPTl9IRUFMVEhfU1RBVFVTX0hFQUxUSFkQAhInCiNJTlRFR1JBVElPTl9IRUFMVEhfU1RBVFVTX1VOSEVBTFRIWRADQqYCCiRjb20uYW5kdXJpbC5jb21tdW5pY2F0aW9uc21hbmFnZXIudjFCE0ludGVncmF0aW9uUHViUHJvdG9QAVpHZ2hlLmFuZHVyaWwuZGV2L2FuZHVyaWwvYW5kdXJpbGFwaXMtZ28vYW5kdXJpbC9jb21tdW5pY2F0aW9uc21hbmFnZXIvdjGiAgNBQ1iqAiBBbmR1cmlsLkNvbW11bmljYXRpb25zbWFuYWdlci5WMcoCIEFuZHVyaWxcQ29tbXVuaWNhdGlvbnNtYW5hZ2VyXFYx4gIsQW5kdXJpbFxDb21tdW5pY2F0aW9uc21hbmFnZXJcVjFcR1BCTWV0YWRhdGHqAiJBbmR1cmlsOjpDb21tdW5pY2F0aW9uc21hbmFnZXI6OlYxYgZwcm90bzM", [file_anduril_communicationsmanager_v1_blobs_pub, file_anduril_communicationsmanager_v1_common_pub, file_anduril_communicationsmanager_v1_entity_pub, file_google_protobuf_timestamp]);

/**
 * Describes the message anduril.communicationsmanager.v1.RegisterIntegrationRequest.
 * Use `create(RegisterIntegrationRequestSchema)` to create a new message.
 */
export const RegisterIntegrationRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 0);

/**
 * Describes the message anduril.communicationsmanager.v1.RegisteredIntegration.
 * Use `create(RegisteredIntegrationSchema)` to create a new message.
 */
export const RegisteredIntegrationSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 1);

/**
 * Describes the message anduril.communicationsmanager.v1.IntegrationDetails.
 * Use `create(IntegrationDetailsSchema)` to create a new message.
 */
export const IntegrationDetailsSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 2);

/**
 * Describes the message anduril.communicationsmanager.v1.DeregisterIntegrationRequest.
 * Use `create(DeregisterIntegrationRequestSchema)` to create a new message.
 */
export const DeregisterIntegrationRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 3);

/**
 * Describes the message anduril.communicationsmanager.v1.DeregisterIntegrationResponse.
 * Use `create(DeregisterIntegrationResponseSchema)` to create a new message.
 */
export const DeregisterIntegrationResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 4);

/**
 * Describes the message anduril.communicationsmanager.v1.GetIntegrationsRequest.
 * Use `create(GetIntegrationsRequestSchema)` to create a new message.
 */
export const GetIntegrationsRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 5);

/**
 * Describes the message anduril.communicationsmanager.v1.GetIntegrationsResponse.
 * Use `create(GetIntegrationsResponseSchema)` to create a new message.
 */
export const GetIntegrationsResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 6);

/**
 * Describes the message anduril.communicationsmanager.v1.AllNodes.
 * Use `create(AllNodesSchema)` to create a new message.
 */
export const AllNodesSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 7);

/**
 * Describes the message anduril.communicationsmanager.v1.LocalNode.
 * Use `create(LocalNodeSchema)` to create a new message.
 */
export const LocalNodeSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 8);

/**
 * Describes the message anduril.communicationsmanager.v1.StreamIntegrationsRequest.
 * Use `create(StreamIntegrationsRequestSchema)` to create a new message.
 */
export const StreamIntegrationsRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 9);

/**
 * Describes the message anduril.communicationsmanager.v1.IntegrationEvent.
 * Use `create(IntegrationEventSchema)` to create a new message.
 */
export const IntegrationEventSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 10);

/**
 * Describes the message anduril.communicationsmanager.v1.StreamIntegrationsResponse.
 * Use `create(StreamIntegrationsResponseSchema)` to create a new message.
 */
export const StreamIntegrationsResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 11);

/**
 * Describes the message anduril.communicationsmanager.v1.IntegrationHealthUpdateRequest.
 * Use `create(IntegrationHealthUpdateRequestSchema)` to create a new message.
 */
export const IntegrationHealthUpdateRequestSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 12);

/**
 * Describes the message anduril.communicationsmanager.v1.IntegrationHealthUpdateResponse.
 * Use `create(IntegrationHealthUpdateResponseSchema)` to create a new message.
 */
export const IntegrationHealthUpdateResponseSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 13);

/**
 * Describes the message anduril.communicationsmanager.v1.IntegrationHealthState.
 * Use `create(IntegrationHealthStateSchema)` to create a new message.
 */
export const IntegrationHealthStateSchema = /*@__PURE__*/
  messageDesc(file_anduril_communicationsmanager_v1_integration_pub, 14);

/**
 * Describes the enum anduril.communicationsmanager.v1.IntegrationHealthStatus.
 */
export const IntegrationHealthStatusSchema = /*@__PURE__*/
  enumDesc(file_anduril_communicationsmanager_v1_integration_pub, 0);

/**
 * @generated from enum anduril.communicationsmanager.v1.IntegrationHealthStatus
 */
export const IntegrationHealthStatus = /*@__PURE__*/
  tsEnum(IntegrationHealthStatusSchema);
