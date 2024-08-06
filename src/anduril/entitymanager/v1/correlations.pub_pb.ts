// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file anduril/entitymanager/v1/correlations.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * The status of the correlation.
 *
 * @generated from enum anduril.entitymanager.v1.CorrelationStatus
 */
export enum CorrelationStatus {
  /**
   * @generated from enum value: CORRELATION_STATUS_INVALID = 0;
   */
  INVALID = 0,

  /**
   * potential correlation requested by manual inspection, not yet confirmed.
   *
   * @generated from enum value: CORRELATION_STATUS_MANUAL_INSPECTION = 1;
   */
  MANUAL_INSPECTION = 1,

  /**
   * potential correlation suggested by system, not yet confirmed.
   *
   * @generated from enum value: CORRELATION_STATUS_AUTO_SUGGESTED = 2;
   */
  AUTO_SUGGESTED = 2,

  /**
   * deprecated
   *
   * @generated from enum value: CORRELATION_STATUS_START_CORRELATE = 3 [deprecated = true];
   * @deprecated
   */
  START_CORRELATE = 3,

  /**
   * correlation has been confirmed, treat non primary as hidden.
   *
   * @generated from enum value: CORRELATION_STATUS_CONFIRMED = 4;
   */
  CONFIRMED = 4,

  /**
   * correlation was explicitly rejected, treat as non correlated.
   *
   * @generated from enum value: CORRELATION_STATUS_DENIED = 5;
   */
  DENIED = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(CorrelationStatus)
proto3.util.setEnumType(CorrelationStatus, "anduril.entitymanager.v1.CorrelationStatus", [
  { no: 0, name: "CORRELATION_STATUS_INVALID" },
  { no: 1, name: "CORRELATION_STATUS_MANUAL_INSPECTION" },
  { no: 2, name: "CORRELATION_STATUS_AUTO_SUGGESTED" },
  { no: 3, name: "CORRELATION_STATUS_START_CORRELATE" },
  { no: 4, name: "CORRELATION_STATUS_CONFIRMED" },
  { no: 5, name: "CORRELATION_STATUS_DENIED" },
]);

/**
 * The interpretation of the correlation score.
 *
 * @generated from enum anduril.entitymanager.v1.ScoreInterpretation
 */
export enum ScoreInterpretation {
  /**
   * @generated from enum value: SCORE_INTERPRETATION_INVALID = 0;
   */
  INVALID = 0,

  /**
   * unlikely these are the same entity
   *
   * @generated from enum value: SCORE_INTERPRETATION_UNLIKELY = 1;
   */
  UNLIKELY = 1,

  /**
   * likely these are the same entity
   *
   * @generated from enum value: SCORE_INTERPRETATION_LIKELY = 2;
   */
  LIKELY = 2,

  /**
   * very likely these are the same entity
   *
   * @generated from enum value: SCORE_INTERPRETATION_VERY_LIKELY = 3;
   */
  VERY_LIKELY = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ScoreInterpretation)
proto3.util.setEnumType(ScoreInterpretation, "anduril.entitymanager.v1.ScoreInterpretation", [
  { no: 0, name: "SCORE_INTERPRETATION_INVALID" },
  { no: 1, name: "SCORE_INTERPRETATION_UNLIKELY" },
  { no: 2, name: "SCORE_INTERPRETATION_LIKELY" },
  { no: 3, name: "SCORE_INTERPRETATION_VERY_LIKELY" },
]);

/**
 * Available for Entities that are a correlated (N to 1) set of entities. This will be present on each entity in the
 * set.
 *
 * @generated from message anduril.entitymanager.v1.Correlated
 */
export class Correlated extends Message<Correlated> {
  /**
   * primary entity id
   *
   * @generated from field: string primary_entity_id = 1;
   */
  primaryEntityId = "";

  /**
   * status representing this correlation
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationStatus status = 2;
   */
  status = CorrelationStatus.INVALID;

  /**
   * score pairings between this and other entity ids
   *
   * @generated from field: repeated anduril.entitymanager.v1.CorrelationScore scores = 3;
   */
  scores: CorrelationScore[] = [];

  /**
   * if not present, does not expire
   *
   * @generated from field: google.protobuf.Timestamp expires_time = 4;
   */
  expiresTime?: Timestamp;

  constructor(data?: PartialMessage<Correlated>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entitymanager.v1.Correlated";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "primary_entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(CorrelationStatus) },
    { no: 3, name: "scores", kind: "message", T: CorrelationScore, repeated: true },
    { no: 4, name: "expires_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Correlated {
    return new Correlated().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Correlated {
    return new Correlated().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Correlated {
    return new Correlated().fromJsonString(jsonString, options);
  }

  static equals(a: Correlated | PlainMessage<Correlated> | undefined, b: Correlated | PlainMessage<Correlated> | undefined): boolean {
    return proto3.util.equals(Correlated, a, b);
  }
}

/**
 * A correlation scoring between two entities.
 *
 * @generated from message anduril.entitymanager.v1.CorrelationScore
 */
export class CorrelationScore extends Message<CorrelationScore> {
  /**
   * @generated from field: string other_entity_id = 1;
   */
  otherEntityId = "";

  /**
   * @generated from field: float score = 2;
   */
  score = 0;

  /**
   * @generated from field: anduril.entitymanager.v1.ScoreInterpretation interpretation = 3;
   */
  interpretation = ScoreInterpretation.INVALID;

  /**
   * Deprecated: do not use
   *
   * @generated from field: bool link16_compliant = 4 [deprecated = true];
   * @deprecated
   */
  link16Compliant = false;

  /**
   * status of other_entity_id correlation, expresses relationship of other to correlation set this entity is part of.
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationStatus other_status = 5;
   */
  otherStatus = CorrelationStatus.INVALID;

  constructor(data?: PartialMessage<CorrelationScore>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.entitymanager.v1.CorrelationScore";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "other_entity_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "interpretation", kind: "enum", T: proto3.getEnumType(ScoreInterpretation) },
    { no: 4, name: "link16_compliant", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "other_status", kind: "enum", T: proto3.getEnumType(CorrelationStatus) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CorrelationScore {
    return new CorrelationScore().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CorrelationScore {
    return new CorrelationScore().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CorrelationScore {
    return new CorrelationScore().fromJsonString(jsonString, options);
  }

  static equals(a: CorrelationScore | PlainMessage<CorrelationScore> | undefined, b: CorrelationScore | PlainMessage<CorrelationScore> | undefined): boolean {
    return proto3.util.equals(CorrelationScore, a, b);
  }
}
