// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/ontology/v1/type.pub.proto (package anduril.ontology.v1, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file anduril/ontology/v1/type.pub.proto.
 */
export const file_anduril_ontology_v1_type_pub = /*@__PURE__*/
  fileDesc("CiJhbmR1cmlsL29udG9sb2d5L3YxL3R5cGUucHViLnByb3RvEhNhbmR1cmlsLm9udG9sb2d5LnYxIqUBCgpPYmplY3RUeXBlEikKBWNsYXNzGAEgASgOMhouYW5kdXJpbC5vbnRvbG9neS52MS5DbGFzcxI1CgtkaXNwb3NpdGlvbhgCIAEoDjIgLmFuZHVyaWwub250b2xvZ3kudjEuRGlzcG9zaXRpb24SNQoLZW52aXJvbm1lbnQYAyABKA4yIC5hbmR1cmlsLm9udG9sb2d5LnYxLkVudmlyb25tZW50KoMCCgVDbGFzcxIRCg1DTEFTU19VTktOT1dOEAASEAoMQ0xBU1NfUEVSU09OEAESDQoJQ0xBU1NfQ0FSEAISEAoMQ0xBU1NfQU5JTUFMEAMSFQoRQ0xBU1NfQUlSX1ZFSElDTEUQBBIRCg1DTEFTU19CSUNZQ0xFEAUSFwoTQ0xBU1NfV0FURVJfVkVISUNMRRAGEhkKFUNMQVNTX1VOS05PV05fVkVISUNMRRAHEhEKDUNMQVNTX01JU1NJTEUQCBIdChlDTEFTU19VTktOT1dOX0FJUl9WRUhJQ0xFEAkSDgoKQ0xBU1NfQklSRBAKEhQKEENMQVNTX0JBQ0tHUk9VTkQQCyrJAQoLRGlzcG9zaXRpb24SFwoTRElTUE9TSVRJT05fVU5LTk9XThAAEhgKFERJU1BPU0lUSU9OX0ZSSUVORExZEAESFwoTRElTUE9TSVRJT05fSE9TVElMRRACEhoKFkRJU1BPU0lUSU9OX1NVU1BJQ0lPVVMQAxIgChxESVNQT1NJVElPTl9BU1NVTUVEX0ZSSUVORExZEAQSFwoTRElTUE9TSVRJT05fTkVVVFJBTBAFEhcKE0RJU1BPU0lUSU9OX1BFTkRJTkcQBiqeAQoLRW52aXJvbm1lbnQSFwoTRU5WSVJPTk1FTlRfVU5LTk9XThAAEhMKD0VOVklST05NRU5UX0FJUhABEhcKE0VOVklST05NRU5UX1NVUkZBQ0UQAhIbChdFTlZJUk9OTUVOVF9TVUJfU1VSRkFDRRADEhQKEEVOVklST05NRU5UX0xBTkQQBBIVChFFTlZJUk9OTUVOVF9TUEFDRRAFKskYCgtOYXRpb25hbGl0eRIXChNOQVRJT05BTElUWV9JTlZBTElEEAASFwoTTkFUSU9OQUxJVFlfQUxCQU5JQRABEhcKE05BVElPTkFMSVRZX0FMR0VSSUEQPhIZChVOQVRJT05BTElUWV9BUkdFTlRJTkEQTxIXChNOQVRJT05BTElUWV9BUk1FTklBEAISGQoVTkFUSU9OQUxJVFlfQVVTVFJBTElBEAMSFwoTTkFUSU9OQUxJVFlfQVVTVFJJQRAEEhoKFk5BVElPTkFMSVRZX0FaRVJCQUlKQU4QBRIXChNOQVRJT05BTElUWV9CRUxBUlVTEAYSFwoTTkFUSU9OQUxJVFlfQkVMR0lVTRAHEhcKE05BVElPTkFMSVRZX0JPTElWSUEQahImCiJOQVRJT05BTElUWV9CT1NOSUFfQU5EX0hFUlpFR09WSU5BEAgSFgoSTkFUSU9OQUxJVFlfQlJBWklMEFASGAoUTkFUSU9OQUxJVFlfQlVMR0FSSUEQCRIYChROQVRJT05BTElUWV9DQU1CT0RJQRBEEhYKEk5BVElPTkFMSVRZX0NBTkFEQRAKEhUKEU5BVElPTkFMSVRZX0NISUxFEFESFQoRTkFUSU9OQUxJVFlfQ0hJTkEQSBIYChROQVRJT05BTElUWV9DT0xPTUJJQRBSEhcKE05BVElPTkFMSVRZX0NST0FUSUEQCxIUChBOQVRJT05BTElUWV9DVUJBEFcSFgoSTkFUSU9OQUxJVFlfQ1lQUlVTEDUSHgoaTkFUSU9OQUxJVFlfQ1pFQ0hfUkVQVUJMSUMQDBI0CjBOQVRJT05BTElUWV9ERU1PQ1JBVElDX1BFT1BMRVNfUkVQVUJMSUNfT0ZfS09SRUEQShIXChNOQVRJT05BTElUWV9ERU5NQVJLEA0SIgoeTkFUSU9OQUxJVFlfRE9NSU5JQ0FOX1JFUFVCTElDEFgSFwoTTkFUSU9OQUxJVFlfRUNVQURPUhBrEhUKEU5BVElPTkFMSVRZX0VHWVBUEDYSFwoTTkFUSU9OQUxJVFlfRVNUT05JQRAOEhgKFE5BVElPTkFMSVRZX0VUSElPUElBED8SFwoTTkFUSU9OQUxJVFlfRklOTEFORBAPEhYKEk5BVElPTkFMSVRZX0ZSQU5DRRAQEhcKE05BVElPTkFMSVRZX0dFT1JHSUEQERIXChNOQVRJT05BTElUWV9HRVJNQU5ZEBISFgoSTkFUSU9OQUxJVFlfR1JFRUNFEBMSGQoVTkFUSU9OQUxJVFlfR1VBVEVNQUxBEGwSFgoSTkFUSU9OQUxJVFlfR1VJTkVBEFwSFwoTTkFUSU9OQUxJVFlfSFVOR0FSWRAUEhcKE05BVElPTkFMSVRZX0lDRUxBTkQQFRIVChFOQVRJT05BTElUWV9JTkRJQRBCEhkKFU5BVElPTkFMSVRZX0lORE9ORVNJQRBnEicKI05BVElPTkFMSVRZX0lOVEVSTkFUSU9OQUxfUkVEX0NST1NTEHESFAoQTkFUSU9OQUxJVFlfSVJBURA4EhcKE05BVElPTkFMSVRZX0lSRUxBTkQQFhIoCiROQVRJT05BTElUWV9JU0xBTUlDX1JFUFVCTElDX09GX0lSQU4QNxIWChJOQVRJT05BTElUWV9JU1JBRUwQORIVChFOQVRJT05BTElUWV9JVEFMWRAXEhcKE05BVElPTkFMSVRZX0pBTUFJQ0EQcBIVChFOQVRJT05BTElUWV9KQVBBThBMEhYKEk5BVElPTkFMSVRZX0pPUkRBThA6EhoKFk5BVElPTkFMSVRZX0tBWkFLSFNUQU4QGBIWChJOQVRJT05BTElUWV9LVVdBSVQQWhIgChxOQVRJT05BTElUWV9LWVJHSFlaX1JFUFVCTElDEBkSLworTkFUSU9OQUxJVFlfTEFPX1BFT1BMRVNfREVNT0NSQVRJQ19SRVBVQkxJQxBFEhYKEk5BVElPTkFMSVRZX0xBVFZJQRAaEhcKE05BVElPTkFMSVRZX0xFQkFOT04QOxIXChNOQVRJT05BTElUWV9MSUJFUklBEEASGQoVTkFUSU9OQUxJVFlfTElUSFVBTklBEBsSGgoWTkFUSU9OQUxJVFlfTFVYRU1CT1VSRxAcEhoKFk5BVElPTkFMSVRZX01BREFHQVNDQVIQXRIYChROQVRJT05BTElUWV9NQUxBWVNJQRBoEhUKEU5BVElPTkFMSVRZX01BTFRBEB0SFgoSTkFUSU9OQUxJVFlfTUVYSUNPEFMSFwoTTkFUSU9OQUxJVFlfTU9MRE9WQRAeEhoKFk5BVElPTkFMSVRZX01PTlRFTkVHUk8QHxIXChNOQVRJT05BTElUWV9NT1JPQ0NPEF4SFwoTTkFUSU9OQUxJVFlfTVlBTk1BUhBmEhQKEE5BVElPTkFMSVRZX05BVE8QIBIbChdOQVRJT05BTElUWV9ORVRIRVJMQU5EUxAhEhsKF05BVElPTkFMSVRZX05FV19aRUFMQU5EEE4SGQoVTkFUSU9OQUxJVFlfTklDQVJBR1VBEG0SFwoTTkFUSU9OQUxJVFlfTklHRVJJQRBfEhYKEk5BVElPTkFMSVRZX05PUldBWRAiEhgKFE5BVElPTkFMSVRZX1BBS0lTVEFOEEMSFgoSTkFUSU9OQUxJVFlfUEFOQU1BEFQSGAoUTkFUSU9OQUxJVFlfUEFSQUdVQVkQbhIUChBOQVRJT05BTElUWV9QRVJVEFUSGwoXTkFUSU9OQUxJVFlfUEhJTElQUElORVMQTRIWChJOQVRJT05BTElUWV9QT0xBTkQQIxIYChROQVRJT05BTElUWV9QT1JUVUdBTBAkEiEKHU5BVElPTkFMSVRZX1JFUFVCTElDX09GX0tPUkVBEEsSFwoTTkFUSU9OQUxJVFlfUk9NQU5JQRAlEhYKEk5BVElPTkFMSVRZX1JVU1NJQRAmEhwKGE5BVElPTkFMSVRZX1NBVURJX0FSQUJJQRA8EhcKE05BVElPTkFMSVRZX1NFTkVHQUwQYBIWChJOQVRJT05BTElUWV9TRVJCSUEQJxIZChVOQVRJT05BTElUWV9TSU5HQVBPUkUQaRIYChROQVRJT05BTElUWV9TTE9WQUtJQRAoEhgKFE5BVElPTkFMSVRZX1NMT1ZFTklBECkSHAoYTkFUSU9OQUxJVFlfU09VVEhfQUZSSUNBEEESFQoRTkFUSU9OQUxJVFlfU1BBSU4QKhIVChFOQVRJT05BTElUWV9TVURBThBiEhYKEk5BVElPTkFMSVRZX1NXRURFThArEhsKF05BVElPTkFMSVRZX1NXSVRaRVJMQU5EECwSJAogTkFUSU9OQUxJVFlfU1lSSUFOX0FSQUJfUkVQVUJMSUMQPRIoCiROQVRJT05BTElUWV9UQUlXQU5fUFJPVklOQ0VfT0ZfQ0hJTkEQSRIaChZOQVRJT05BTElUWV9UQUpJS0lTVEFOEC0SGAoUTkFUSU9OQUxJVFlfVEhBSUxBTkQQRhI5CjVOQVRJT05BTElUWV9USEVfRk9STUVSX1lVR09TTEFWX1JFUFVCTElDX09GX01BQ0VET05JQRAuEhcKE05BVElPTkFMSVRZX1RVTklTSUEQZBIWChJOQVRJT05BTElUWV9UVVJLRVkQLxIcChhOQVRJT05BTElUWV9UVVJLTUVOSVNUQU4QMBIWChJOQVRJT05BTElUWV9VR0FOREEQZRIXChNOQVRJT05BTElUWV9VS1JBSU5FEDESHgoaTkFUSU9OQUxJVFlfVU5JVEVEX0tJTkdET00QMhIeChpOQVRJT05BTElUWV9VTklURURfTkFUSU9OUxBZEisKJ05BVElPTkFMSVRZX1VOSVRFRF9SRVBVQkxJQ19PRl9UQU5aQU5JQRBjEigKJE5BVElPTkFMSVRZX1VOSVRFRF9TVEFURVNfT0ZfQU1FUklDQRAzEhcKE05BVElPTkFMSVRZX1VSVUdVQVkQbxIaChZOQVRJT05BTElUWV9VWkJFS0lTVEFOEDQSGQoVTkFUSU9OQUxJVFlfVkVORVpVRUxBEFYSFwoTTkFUSU9OQUxJVFlfVklFVE5BTRBHEhUKEU5BVElPTkFMSVRZX1lFTUVOEFsSGAoUTkFUSU9OQUxJVFlfWklNQkFCV0UQYULaAQoXY29tLmFuZHVyaWwub250b2xvZ3kudjFCDFR5cGVQdWJQcm90b1ABWkNnaGUuYW5kdXJpbC5kZXYvYW5kdXJpbC9hbmR1cmlsYXBpcy1nby9hbmR1cmlsL29udG9sb2d5L3YxO29udG9sb2d5ogIDQU9YqgITQW5kdXJpbC5PbnRvbG9neS5WMcoCE0FuZHVyaWxcT250b2xvZ3lcVjHiAh9BbmR1cmlsXE9udG9sb2d5XFYxXEdQQk1ldGFkYXRh6gIVQW5kdXJpbDo6T250b2xvZ3k6OlYxYgZwcm90bzM");

/**
 * Describes the message anduril.ontology.v1.ObjectType.
 * Use `create(ObjectTypeSchema)` to create a new message.
 */
export const ObjectTypeSchema = /*@__PURE__*/
  messageDesc(file_anduril_ontology_v1_type_pub, 0);

/**
 * Describes the enum anduril.ontology.v1.Class.
 */
export const ClassSchema = /*@__PURE__*/
  enumDesc(file_anduril_ontology_v1_type_pub, 0);

/**
 * @generated from enum anduril.ontology.v1.Class
 */
export const Class = /*@__PURE__*/
  tsEnum(ClassSchema);

/**
 * Describes the enum anduril.ontology.v1.Disposition.
 */
export const DispositionSchema = /*@__PURE__*/
  enumDesc(file_anduril_ontology_v1_type_pub, 1);

/**
 * Refers to the relationship of the tracker to the operational object being represented.
 * Maps 1 to 1 with mil-std affiliation. Pending is a default, yet to be classified object.
 * Ranking from most friendly to most hostile:
 * FRIENDLY
 * ASSUMED FRIENDLY
 * NEUTRAL
 * PENDING
 * UNKNOWN
 * SUSPICIOUS
 * HOSTILE
 *
 * @generated from enum anduril.ontology.v1.Disposition
 */
export const Disposition = /*@__PURE__*/
  tsEnum(DispositionSchema);

/**
 * Describes the enum anduril.ontology.v1.Environment.
 */
export const EnvironmentSchema = /*@__PURE__*/
  enumDesc(file_anduril_ontology_v1_type_pub, 2);

/**
 * Describes the operating environment of an object. For more information refer to MIL-STD 2525D.
 * Surface is used to describe objects on-top the water such as boats, while Sub-Surface is used to describe under the
 * water.
 *
 * @generated from enum anduril.ontology.v1.Environment
 */
export const Environment = /*@__PURE__*/
  tsEnum(EnvironmentSchema);

/**
 * Describes the enum anduril.ontology.v1.Nationality.
 */
export const NationalitySchema = /*@__PURE__*/
  enumDesc(file_anduril_ontology_v1_type_pub, 3);

/**
 * Describes Nationality or Alliance information.
 *
 * @generated from enum anduril.ontology.v1.Nationality
 */
export const Nationality = /*@__PURE__*/
  tsEnum(NationalitySchema);

