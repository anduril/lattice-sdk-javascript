// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/entity.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_anduril_entitymanager_v1_classification_pub } from "./classification.pub_pb.js";
import { file_anduril_entitymanager_v1_dimensions_pub } from "./dimensions.pub_pb.js";
import { file_anduril_entitymanager_v1_geoentity_pub } from "./geoentity.pub_pb.js";
import { file_anduril_entitymanager_v1_group_pub } from "./group.pub_pb.js";
import { file_anduril_entitymanager_v1_health_status_pub } from "./health_status.pub_pb.js";
import { file_anduril_entitymanager_v1_location_pub } from "./location.pub_pb.js";
import { file_anduril_entitymanager_v1_ontology_pub } from "./ontology.pub_pb.js";
import { file_anduril_entitymanager_v1_options_pub } from "./options.pub_pb.js";
import { file_anduril_entitymanager_v1_orbit_pub } from "./orbit.pub_pb.js";
import { file_anduril_entitymanager_v1_payloads_pub } from "./payloads.pub_pb.js";
import { file_anduril_entitymanager_v1_power_pub } from "./power.pub_pb.js";
import { file_anduril_entitymanager_v1_relationship_pub } from "./relationship.pub_pb.js";
import { file_anduril_entitymanager_v1_route_details_pub } from "./route_details.pub_pb.js";
import { file_anduril_entitymanager_v1_schedule_pub } from "./schedule.pub_pb.js";
import { file_anduril_entitymanager_v1_sensors_pub } from "./sensors.pub_pb.js";
import { file_anduril_entitymanager_v1_signal_pub } from "./signal.pub_pb.js";
import { file_anduril_entitymanager_v1_supplies_pub } from "./supplies.pub_pb.js";
import { file_anduril_entitymanager_v1_target_priority_pub } from "./target_priority.pub_pb.js";
import { file_anduril_entitymanager_v1_transponder_codes_pub } from "./transponder_codes.pub_pb.js";
import { file_anduril_entitymanager_v1_types_pub } from "./types.pub_pb.js";
import { file_anduril_tasks_v2_catalog_pub } from "../../tasks/v2/catalog.pub_pb.js";
import { file_anduril_type_color_pub } from "../../type/color.pub_pb.js";
import { file_google_protobuf_timestamp, file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entitymanager/v1/entity.pub.proto.
 */
export const file_anduril_entitymanager_v1_entity_pub = /*@__PURE__*/
  fileDesc("CilhbmR1cmlsL2VudGl0eW1hbmFnZXIvdjEvZW50aXR5LnB1Yi5wcm90bxIYYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxIvsPCgZFbnRpdHkSEQoJZW50aXR5X2lkGAEgASgJEhMKC2Rlc2NyaXB0aW9uGAIgASgJEg8KB2lzX2xpdmUYAyABKAgSMAoMY3JlYXRlZF90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBI0CgtleHBpcnlfdGltZRgFIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCA8g+ARIwCgZzdGF0dXMYEyABKAsyIC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuU3RhdHVzEjQKCGxvY2F0aW9uGAYgASgLMiIuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkxvY2F0aW9uEksKFGxvY2F0aW9uX3VuY2VydGFpbnR5GA8gASgLMi0uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkxvY2F0aW9uVW5jZXJ0YWludHkSNQoJZ2VvX3NoYXBlGBcgASgLMiIuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkdlb1NoYXBlEjkKC2dlb19kZXRhaWxzGBggASgLMiQuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkdlb0RldGFpbHMSMgoHYWxpYXNlcxgHIAEoCzIhLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5BbGlhc2VzEjIKB3RyYWNrZWQYCCABKAsyIS5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuVHJhY2tlZBI6Cgtjb3JyZWxhdGlvbhgvIAEoCzIlLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Db3JyZWxhdGlvbhIzCghtaWxfdmlldxgKIAEoCzIhLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5NaWxWaWV3EjQKCG9udG9sb2d5GAsgASgLMiIuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLk9udG9sb2d5EjIKB3NlbnNvcnMYFCABKAsyIS5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuU2Vuc29ycxI0CghwYXlsb2FkcxgVIAEoCzIiLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5QYXlsb2FkcxI5Cgtwb3dlcl9zdGF0ZRgeIAEoCzIkLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Qb3dlclN0YXRlEjgKCnByb3ZlbmFuY2UYDCABKAsyJC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUHJvdmVuYW5jZRI2CglvdmVycmlkZXMYDSABKAsyIy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuT3ZlcnJpZGVzEjgKCmluZGljYXRvcnMYDiABKAsyJC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuSW5kaWNhdG9ycxJBCg90YXJnZXRfcHJpb3JpdHkYFiABKAsyKC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuVGFyZ2V0UHJpb3JpdHkSMAoGc2lnbmFsGBkgASgLMiAuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlNpZ25hbBJFChF0cmFuc3BvbmRlcl9jb2RlcxgaIAEoCzIqLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5UcmFuc3BvbmRlckNvZGVzEkUKE2RhdGFfY2xhc3NpZmljYXRpb24YHSABKAsyKC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuQ2xhc3NpZmljYXRpb24SOAoMdGFza19jYXRhbG9nGB8gASgLMh0uYW5kdXJpbC50YXNrcy52Mi5UYXNrQ2F0YWxvZ0IDyD4BEj4KDXJlbGF0aW9uc2hpcHMYISABKAsyJy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUmVsYXRpb25zaGlwcxI/Cg52aXN1YWxfZGV0YWlscxgiIAEoCzInLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5WaXN1YWxEZXRhaWxzEjgKCmRpbWVuc2lvbnMYJCABKAsyJC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuRGltZW5zaW9ucxI9Cg1yb3V0ZV9kZXRhaWxzGCUgASgLMiYuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlJvdXRlRGV0YWlscxI2CglzY2hlZHVsZXMYJiABKAsyIy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuU2NoZWR1bGVzEjAKBmhlYWx0aBgnIAEoCzIgLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5IZWFsdGgSPQoNZ3JvdXBfZGV0YWlscxgoIAEoCzImLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Hcm91cERldGFpbHMSNAoIc3VwcGxpZXMYKiABKAsyIi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuU3VwcGxpZXMSLgoFb3JiaXQYLiABKAsyHy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuT3JiaXRKBAgJEApKBAgQEBFKBAgREBJKBAgSEBNKBAgbEBxKBAgcEB1KBAggECFKBAgpECpKBAgrECxSCmNvcnJlbGF0ZWRSDW9yaWdpbmFsX2RhdGFSCmdlb3BvbHlnb25SBW1lZGlhUgdjb250YWN0Ugt0ZWFtX3N0YXR1c1IJbm9fZXhwaXJ5IjEKBlN0YXR1cxIZChFwbGF0Zm9ybV9hY3Rpdml0eRgBIAEoCRIMCgRyb2xlGAIgASgJIl8KB0FsaWFzZXMSQQoNYWx0ZXJuYXRlX2lkcxgBIAMoCzIlLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5BbHRlcm5hdGVJZEIDyD4BEhEKBG5hbWUYAiABKAlCA8g+ASK1AwoHVHJhY2tlZBI6ChV0cmFja19xdWFsaXR5X3dyYXBwZXIYAiABKAsyGy5nb29nbGUucHJvdG9idWYuSW50MzJWYWx1ZRIwCgtzZW5zb3JfaGl0cxgDIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlEkAKEW51bWJlcl9vZl9vYmplY3RzGAQgASgLMiUuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlVJbnQzMlJhbmdlEjkKE3JhZGFyX2Nyb3NzX3NlY3Rpb24YBiABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSOQoVbGFzdF9tZWFzdXJlbWVudF90aW1lGAcgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBJACg9saW5lX29mX2JlYXJpbmcYCSABKAsyJy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuTGluZU9mQmVhcmluZ0oECAEQAkoECAUQBkoECAgQCVINdHJhY2tfcXVhbGl0eVIOc2Vuc29yX2RldGFpbHNSEXJlbGF0aXZlX3Bvc2l0aW9uIqYBCgpQcm92ZW5hbmNlEhgKEGludGVncmF0aW9uX25hbWUYBSABKAkSEQoJZGF0YV90eXBlGAYgASgJEhEKCXNvdXJjZV9pZBgDIAEoCRI2ChJzb3VyY2VfdXBkYXRlX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhoKEnNvdXJjZV9kZXNjcmlwdGlvbhgEIAEoCUoECAEQAiK4AgoKSW5kaWNhdG9ycxItCglzaW11bGF0ZWQYASABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlEiwKCGV4ZXJjaXNlGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZRItCgllbWVyZ2VuY3kYAyABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlEiYKAmMyGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZRIzCgplZ3Jlc3NhYmxlGAYgASgLMhouZ29vZ2xlLnByb3RvYnVmLkJvb2xWYWx1ZUIDyD4BEjAKB3N0YXJyZWQYByABKAsyGi5nb29nbGUucHJvdG9idWYuQm9vbFZhbHVlQgPIPgFKBAgFEAZSCWRlbGV0YWJsZSJTCglPdmVycmlkZXMSNAoIb3ZlcnJpZGUYAiADKAsyIi5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuT3ZlcnJpZGVKBAgBEAJSCnByb3ZlbmFuY2Ui0QIKCE92ZXJyaWRlEhIKCnJlcXVlc3RfaWQYASABKAkSEgoKZmllbGRfcGF0aBgCIAEoCRI8ChJtYXNrZWRfZmllbGRfdmFsdWUYAyABKAsyIC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuRW50aXR5EjgKBnN0YXR1cxgEIAEoDjIoLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5PdmVycmlkZVN0YXR1cxI4Cgpwcm92ZW5hbmNlGAUgASgLMiQuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlByb3ZlbmFuY2USNAoEdHlwZRgGIAEoDjImLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5PdmVycmlkZVR5cGUSNQoRcmVxdWVzdF90aW1lc3RhbXAYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIloKC0FsdGVybmF0ZUlkEgoKAmlkGAIgASgJEjEKBHR5cGUYAyABKA4yIy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuQWx0SWRUeXBlSgQIARACUgZzb3VyY2UiTwoNVmlzdWFsRGV0YWlscxI+CgtyYW5nZV9yaW5ncxgBIAEoCzIkLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5SYW5nZVJpbmdzQgPIPgEiugEKClJhbmdlUmluZ3MSNAoObWluX2Rpc3RhbmNlX20YASABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSNAoObWF4X2Rpc3RhbmNlX20YAiABKAsyHC5nb29nbGUucHJvdG9idWYuRG91YmxlVmFsdWUSEgoKcmluZ19jb3VudBgDIAEoDRIsCg9yaW5nX2xpbmVfY29sb3IYBCABKAsyEy5hbmR1cmlsLnR5cGUuQ29sb3IipwIKC0NvcnJlbGF0aW9uEj8KB3ByaW1hcnkYASABKAsyLC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUHJpbWFyeUNvcnJlbGF0aW9uSAASQwoJc2Vjb25kYXJ5GAIgASgLMi4uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLlNlY29uZGFyeUNvcnJlbGF0aW9uSAASQwoKbWVtYmVyc2hpcBgEIAEoCzIvLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Db3JyZWxhdGlvbk1lbWJlcnNoaXASPgoNZGVjb3JyZWxhdGlvbhgDIAEoCzInLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5EZWNvcnJlbGF0aW9uQg0KC2NvcnJlbGF0aW9uIjIKElByaW1hcnlDb3JyZWxhdGlvbhIcChRzZWNvbmRhcnlfZW50aXR5X2lkcxgBIAMoCSJyChRTZWNvbmRhcnlDb3JyZWxhdGlvbhIZChFwcmltYXJ5X2VudGl0eV9pZBgBIAEoCRI/CghtZXRhZGF0YRgCIAEoCzItLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Db3JyZWxhdGlvbk1ldGFkYXRhIokCChVDb3JyZWxhdGlvbk1lbWJlcnNoaXASGgoSY29ycmVsYXRpb25fc2V0X2lkGAEgASgJEj4KB3ByaW1hcnkYAiABKAsyKy5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUHJpbWFyeU1lbWJlcnNoaXBIABJFCgtub25fcHJpbWFyeRgDIAEoCzIuLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Ob25QcmltYXJ5TWVtYmVyc2hpcEgAEj8KCG1ldGFkYXRhGAQgASgLMi0uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkNvcnJlbGF0aW9uTWV0YWRhdGFCDAoKbWVtYmVyc2hpcCITChFQcmltYXJ5TWVtYmVyc2hpcCIWChROb25QcmltYXJ5TWVtYmVyc2hpcCKUAQoNRGVjb3JyZWxhdGlvbhI2CgNhbGwYASABKAsyKS5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuRGVjb3JyZWxhdGVkQWxsEksKFWRlY29ycmVsYXRlZF9lbnRpdGllcxgCIAMoCzIsLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5EZWNvcnJlbGF0ZWRTaW5nbGUiUgoPRGVjb3JyZWxhdGVkQWxsEj8KCG1ldGFkYXRhGAEgASgLMi0uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkNvcnJlbGF0aW9uTWV0YWRhdGEiaAoSRGVjb3JyZWxhdGVkU2luZ2xlEhEKCWVudGl0eV9pZBgBIAEoCRI/CghtZXRhZGF0YRgCIAEoCzItLmFuZHVyaWwuZW50aXR5bWFuYWdlci52MS5Db3JyZWxhdGlvbk1ldGFkYXRhItgBChNDb3JyZWxhdGlvbk1ldGFkYXRhEjgKCnByb3ZlbmFuY2UYASABKAsyJC5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuUHJvdmVuYW5jZRJOChByZXBsaWNhdGlvbl9tb2RlGAIgASgOMjQuYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxLkNvcnJlbGF0aW9uUmVwbGljYXRpb25Nb2RlEjcKBHR5cGUYAyABKA4yKS5hbmR1cmlsLmVudGl0eW1hbmFnZXIudjEuQ29ycmVsYXRpb25UeXBlKmwKD0NvcnJlbGF0aW9uVHlwZRIcChhDT1JSRUxBVElPTl9UWVBFX0lOVkFMSUQQABIbChdDT1JSRUxBVElPTl9UWVBFX01BTlVBTBABEh4KGkNPUlJFTEFUSU9OX1RZUEVfQVVUT01BVEVEEAIqlwEKGkNvcnJlbGF0aW9uUmVwbGljYXRpb25Nb2RlEigKJENPUlJFTEFUSU9OX1JFUExJQ0FUSU9OX01PREVfSU5WQUxJRBAAEiYKIkNPUlJFTEFUSU9OX1JFUExJQ0FUSU9OX01PREVfTE9DQUwQARInCiNDT1JSRUxBVElPTl9SRVBMSUNBVElPTl9NT0RFX0dMT0JBTBACQv8BChxjb20uYW5kdXJpbC5lbnRpdHltYW5hZ2VyLnYxQg5FbnRpdHlQdWJQcm90b1ABWk1naGUuYW5kdXJpbC5kZXYvYW5kdXJpbC9hbmR1cmlsYXBpcy1nby9hbmR1cmlsL2VudGl0eW1hbmFnZXIvdjE7ZW50aXR5bWFuYWdlcqICA0FFWKoCGEFuZHVyaWwuRW50aXR5bWFuYWdlci5WMcoCGEFuZHVyaWxcRW50aXR5bWFuYWdlclxWMeICJEFuZHVyaWxcRW50aXR5bWFuYWdlclxWMVxHUEJNZXRhZGF0YeoCGkFuZHVyaWw6OkVudGl0eW1hbmFnZXI6OlYxYgZwcm90bzM", [file_anduril_entitymanager_v1_classification_pub, file_anduril_entitymanager_v1_dimensions_pub, file_anduril_entitymanager_v1_geoentity_pub, file_anduril_entitymanager_v1_group_pub, file_anduril_entitymanager_v1_health_status_pub, file_anduril_entitymanager_v1_location_pub, file_anduril_entitymanager_v1_ontology_pub, file_anduril_entitymanager_v1_options_pub, file_anduril_entitymanager_v1_orbit_pub, file_anduril_entitymanager_v1_payloads_pub, file_anduril_entitymanager_v1_power_pub, file_anduril_entitymanager_v1_relationship_pub, file_anduril_entitymanager_v1_route_details_pub, file_anduril_entitymanager_v1_schedule_pub, file_anduril_entitymanager_v1_sensors_pub, file_anduril_entitymanager_v1_signal_pub, file_anduril_entitymanager_v1_supplies_pub, file_anduril_entitymanager_v1_target_priority_pub, file_anduril_entitymanager_v1_transponder_codes_pub, file_anduril_entitymanager_v1_types_pub, file_anduril_tasks_v2_catalog_pub, file_anduril_type_color_pub, file_google_protobuf_timestamp, file_google_protobuf_wrappers]);

/**
 * Describes the message anduril.entitymanager.v1.Entity.
 * Use `create(EntitySchema)` to create a new message.
 */
export const EntitySchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 0);

/**
 * Describes the message anduril.entitymanager.v1.Status.
 * Use `create(StatusSchema)` to create a new message.
 */
export const StatusSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 1);

/**
 * Describes the message anduril.entitymanager.v1.Aliases.
 * Use `create(AliasesSchema)` to create a new message.
 */
export const AliasesSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 2);

/**
 * Describes the message anduril.entitymanager.v1.Tracked.
 * Use `create(TrackedSchema)` to create a new message.
 */
export const TrackedSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 3);

/**
 * Describes the message anduril.entitymanager.v1.Provenance.
 * Use `create(ProvenanceSchema)` to create a new message.
 */
export const ProvenanceSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 4);

/**
 * Describes the message anduril.entitymanager.v1.Indicators.
 * Use `create(IndicatorsSchema)` to create a new message.
 */
export const IndicatorsSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 5);

/**
 * Describes the message anduril.entitymanager.v1.Overrides.
 * Use `create(OverridesSchema)` to create a new message.
 */
export const OverridesSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 6);

/**
 * Describes the message anduril.entitymanager.v1.Override.
 * Use `create(OverrideSchema)` to create a new message.
 */
export const OverrideSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 7);

/**
 * Describes the message anduril.entitymanager.v1.AlternateId.
 * Use `create(AlternateIdSchema)` to create a new message.
 */
export const AlternateIdSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 8);

/**
 * Describes the message anduril.entitymanager.v1.VisualDetails.
 * Use `create(VisualDetailsSchema)` to create a new message.
 */
export const VisualDetailsSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 9);

/**
 * Describes the message anduril.entitymanager.v1.RangeRings.
 * Use `create(RangeRingsSchema)` to create a new message.
 */
export const RangeRingsSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 10);

/**
 * Describes the message anduril.entitymanager.v1.Correlation.
 * Use `create(CorrelationSchema)` to create a new message.
 */
export const CorrelationSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 11);

/**
 * Describes the message anduril.entitymanager.v1.PrimaryCorrelation.
 * Use `create(PrimaryCorrelationSchema)` to create a new message.
 */
export const PrimaryCorrelationSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 12);

/**
 * Describes the message anduril.entitymanager.v1.SecondaryCorrelation.
 * Use `create(SecondaryCorrelationSchema)` to create a new message.
 */
export const SecondaryCorrelationSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 13);

/**
 * Describes the message anduril.entitymanager.v1.CorrelationMembership.
 * Use `create(CorrelationMembershipSchema)` to create a new message.
 */
export const CorrelationMembershipSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 14);

/**
 * Describes the message anduril.entitymanager.v1.PrimaryMembership.
 * Use `create(PrimaryMembershipSchema)` to create a new message.
 */
export const PrimaryMembershipSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 15);

/**
 * Describes the message anduril.entitymanager.v1.NonPrimaryMembership.
 * Use `create(NonPrimaryMembershipSchema)` to create a new message.
 */
export const NonPrimaryMembershipSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 16);

/**
 * Describes the message anduril.entitymanager.v1.Decorrelation.
 * Use `create(DecorrelationSchema)` to create a new message.
 */
export const DecorrelationSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 17);

/**
 * Describes the message anduril.entitymanager.v1.DecorrelatedAll.
 * Use `create(DecorrelatedAllSchema)` to create a new message.
 */
export const DecorrelatedAllSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 18);

/**
 * Describes the message anduril.entitymanager.v1.DecorrelatedSingle.
 * Use `create(DecorrelatedSingleSchema)` to create a new message.
 */
export const DecorrelatedSingleSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 19);

/**
 * Describes the message anduril.entitymanager.v1.CorrelationMetadata.
 * Use `create(CorrelationMetadataSchema)` to create a new message.
 */
export const CorrelationMetadataSchema = /*@__PURE__*/
  messageDesc(file_anduril_entitymanager_v1_entity_pub, 20);

/**
 * Describes the enum anduril.entitymanager.v1.CorrelationType.
 */
export const CorrelationTypeSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_entity_pub, 0);

/**
 * The type of correlation indicating how it was made.
 *
 * @generated from enum anduril.entitymanager.v1.CorrelationType
 */
export const CorrelationType = /*@__PURE__*/
  tsEnum(CorrelationTypeSchema);

/**
 * Describes the enum anduril.entitymanager.v1.CorrelationReplicationMode.
 */
export const CorrelationReplicationModeSchema = /*@__PURE__*/
  enumDesc(file_anduril_entitymanager_v1_entity_pub, 1);

/**
 * The replication mode of the correlation indicating how the correlation will be replication to
 * other nodes in the mesh.
 *
 * @generated from enum anduril.entitymanager.v1.CorrelationReplicationMode
 */
export const CorrelationReplicationMode = /*@__PURE__*/
  tsEnum(CorrelationReplicationModeSchema);

