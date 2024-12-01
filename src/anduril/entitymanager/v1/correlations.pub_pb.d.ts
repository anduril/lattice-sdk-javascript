// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/entitymanager/v1/correlations.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/entitymanager/v1/correlations.pub.proto.
 */
export declare const file_anduril_entitymanager_v1_correlations_pub: GenFile;

/**
 * Available for Entities that are a correlated (N to 1) set of entities. This will be present on each entity in the
 * set.
 *
 * @generated from message anduril.entitymanager.v1.Correlated
 */
export declare type Correlated = Message<"anduril.entitymanager.v1.Correlated"> & {
  /**
   * primary entity id
   *
   * @generated from field: string primary_entity_id = 1;
   */
  primaryEntityId: string;

  /**
   * status representing this correlation
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationStatus status = 2;
   */
  status: CorrelationStatus;

  /**
   * score pairings between this and other entity ids
   *
   * @generated from field: repeated anduril.entitymanager.v1.CorrelationScore scores = 3;
   */
  scores: CorrelationScore[];

  /**
   * if not present, does not expire
   *
   * @generated from field: google.protobuf.Timestamp expires_time = 4;
   */
  expiresTime?: Timestamp;
};

/**
 * Describes the message anduril.entitymanager.v1.Correlated.
 * Use `create(CorrelatedSchema)` to create a new message.
 */
export declare const CorrelatedSchema: GenMessage<Correlated>;

/**
 * A correlation scoring between two entities.
 *
 * @generated from message anduril.entitymanager.v1.CorrelationScore
 */
export declare type CorrelationScore = Message<"anduril.entitymanager.v1.CorrelationScore"> & {
  /**
   * @generated from field: string other_entity_id = 1;
   */
  otherEntityId: string;

  /**
   * @generated from field: float score = 2;
   */
  score: number;

  /**
   * @generated from field: anduril.entitymanager.v1.ScoreInterpretation interpretation = 3;
   */
  interpretation: ScoreInterpretation;

  /**
   * Deprecated: do not use
   *
   * @generated from field: bool link16_compliant = 4 [deprecated = true];
   * @deprecated
   */
  link16Compliant: boolean;

  /**
   * status of other_entity_id correlation, expresses relationship of other to correlation set this entity is part of.
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationStatus other_status = 5;
   */
  otherStatus: CorrelationStatus;
};

/**
 * Describes the message anduril.entitymanager.v1.CorrelationScore.
 * Use `create(CorrelationScoreSchema)` to create a new message.
 */
export declare const CorrelationScoreSchema: GenMessage<CorrelationScore>;

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

/**
 * Describes the enum anduril.entitymanager.v1.CorrelationStatus.
 */
export declare const CorrelationStatusSchema: GenEnum<CorrelationStatus>;

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

/**
 * Describes the enum anduril.entitymanager.v1.ScoreInterpretation.
 */
export declare const ScoreInterpretationSchema: GenEnum<ScoreInterpretation>;

