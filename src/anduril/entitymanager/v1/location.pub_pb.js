// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/location.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_type_coords_pub } from "../../type/coords.pub_pb.js";
import { file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entitymanager/v1/location.pub.proto.
 */
export const file_anduril_entitymanager_v1_location_pub = /*@__PURE__*/
  fileDesc("CithbmR1cmlsL2VudGl0eW1hbmFnZXIvdjEvbG9jYXRpb24ucHViLnByb3RvEhhhbmR1cmlsLmVudGl0eW1hbmFnZXIudjEi8wEKCExvY2F0aW9uEjQKCHBvc2l0aW9uGAEgASgLMiIuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlBvc2l0aW9uEicKDHZlbG9jaXR5X2VudRgCIAEoCzIRLmFuZHVyaWwudHlwZS5FTlUSLwoJc3BlZWRfbXBzGAUgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEicKDGFjY2VsZXJhdGlvbhgEIAEoCzIRLmFuZHVyaWwudHlwZS5FTlUSLgoMYXR0aXR1ZGVfZW51GAMgASgLMhguYW5kdXJpbC50eXBlLlF1YXRlcm5pb24irQIKCFBvc2l0aW9uEhgKEGxhdGl0dWRlX2RlZ3JlZXMYASABKAESGQoRbG9uZ2l0dWRlX2RlZ3JlZXMYAiABKAESOQoTYWx0aXR1ZGVfaGFlX21ldGVycxgDIAEoCzIcLmdvb2dsZS5wcm90b2J1Zi5Eb3VibGVWYWx1ZRI5ChNhbHRpdHVkZV9hZ2xfbWV0ZXJzGAQgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEjkKE2FsdGl0dWRlX2FzZl9tZXRlcnMYBSABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSOwoVcHJlc3N1cmVfZGVwdGhfbWV0ZXJzGAYgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlItMBChNMb2NhdGlvblVuY2VydGFpbnR5EjkKEHBvc2l0aW9uX2VudV9jb3YYASABKAsyHy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuVE1hdDMSOQoQdmVsb2NpdHlfZW51X2NvdhgCIAEoCzIfLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5UTWF0MxJGChZwb3NpdGlvbl9lcnJvcl9lbGxpcHNlGAMgASgLMiYuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkVycm9yRWxsaXBzZSLoAQoMRXJyb3JFbGxpcHNlEjEKC3Byb2JhYmlsaXR5GAEgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEjcKEXNlbWlfbWFqb3JfYXhpc19tGAIgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEjcKEXNlbWlfbWlub3JfYXhpc19tGAMgASgLMhwuZ29vZ2xlLnByb3RvYnVmLkRvdWJsZVZhbHVlEjMKDW9yaWVudGF0aW9uX2QYBCABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUiZgoEUG9zZRIvCgNwb3MYASABKAsyIi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUG9zaXRpb24SLQoLb3JpZW50YXRpb24YAiABKAsyGC5hbmR1cmlsLnR5cGUuUXVhdGVybmlvbiJVCgVUTWF0MxILCgNteHgYASABKAISCwoDbXh5GAIgASgCEgsKA214ehgDIAEoAhILCgNteXkYBCABKAISCwoDbXl6GAUgASgCEgsKA216ehgGIAEoAkKBAgocY29tLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MUIQTG9jYXRpb25QdWJQcm90b1ABWk1naGUuYW5kdXJpbC5kZXYvYW5kdXJpbC9hbmR1cmlsYXBpcy1nby9hbmR1cmlsL2VudGl0eW1hbmFnZXIvdjE7ZW50aXR5bWFuYWdlcqICA0FFWKoCGEFuZHVyaWwuRW50aXR5bWFuYWdlci5WMcoCGEFuZHVyaWxcRW50aXR5bWFuYWdlclxWMeICJEFuZHVyaWxcRW50aXR5bWFuYWdlclxWMVxHUEJNZXRhZGF0YeoCGkFuZHVyaWw6OkVudGl0eW1hbmFnZXI6OlYxYgZwcm90bzM", [file_anduril_type_coords_pub, file_google_protobuf_wrappers]);

/**
 * Describes the message anduril.entitymanager.v1.Location.
 * Use `create(LocationSchema)` to create a new message.
 */
export const LocationSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_location_pub, 0);

/**
 * Describes the message anduril.entitymanager.v1.Position.
 * Use `create(PositionSchema)` to create a new message.
 */
export const PositionSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_location_pub, 1);

/**
 * Describes the message anduril.entitymanager.v1.LocationUncertainty.
 * Use `create(LocationUncertaintySchema)` to create a new message.
 */
export const LocationUncertaintySchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_location_pub, 2);

/**
 * Describes the message anduril.entitymanager.v1.ErrorEllipse.
 * Use `create(ErrorEllipseSchema)` to create a new message.
 */
export const ErrorEllipseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_location_pub, 3);

/**
 * Describes the message anduril.entitymanager.v1.Pose.
 * Use `create(PoseSchema)` to create a new message.
 */
export const PoseSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_location_pub, 4);

/**
 * Describes the message anduril.entitymanager.v1.TMat3.
 * Use `create(TMat3Schema)` to create a new message.
 */
export const TMat3Schema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_location_pub, 5);

