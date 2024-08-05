// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/tasks/v2/shared/strike.pub.proto (package anduril.tasks.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Objective } from "../objective.pub_pb";
import type { AnglePair, AreaConstraints } from "../common.pub_pb";
import type { Duration, Empty } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/tasks/v2/shared/strike.pub.proto.
 */
export declare const file_anduril_tasks_v2_shared_strike_pub: GenFile;

/**
 * Maps to BREVITY code SMACK.
 *
 * @generated from message anduril.tasks.v2.Smack
 */
export declare type Smack = Message<"anduril.tasks.v2.Smack"> & {
  /**
   * Objective to SMACK.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Optional parameters associated with Strike Tasks.
   *
   * @generated from field: anduril.tasks.v2.StrikeParameters parameters = 2;
   */
  parameters?: StrikeParameters;
};

/**
 * Describes the message anduril.tasks.v2.Smack.
 * Use `create(SmackSchema)` to create a new message.
 */
export declare const SmackSchema: GenMessage<Smack>;

/**
 * Maps to UCI StrikeTask.
 *
 * @generated from message anduril.tasks.v2.Strike
 */
export declare type Strike = Message<"anduril.tasks.v2.Strike"> & {
  /**
   * Objective to Strike.
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 1;
   */
  objective?: Objective;

  /**
   * Angle range within which to ingress.
   *
   * @generated from field: anduril.tasks.v2.AnglePair ingress_angle = 2;
   */
  ingressAngle?: AnglePair;

  /**
   * Distance at which to yield flight control to the onboard flight computer rather than
   * higher level autonomy.
   *
   * @generated from field: anduril.tasks.v2.StrikeReleaseConstraint strike_release_constraint = 3;
   */
  strikeReleaseConstraint?: StrikeReleaseConstraint;

  /**
   * Optional parameters associated with the Strike task.
   *
   * @generated from field: anduril.tasks.v2.StrikeParameters parameters = 4;
   */
  parameters?: StrikeParameters;
};

/**
 * Describes the message anduril.tasks.v2.Strike.
 * Use `create(StrikeSchema)` to create a new message.
 */
export declare const StrikeSchema: GenMessage<Strike>;

/**
 * Maps to UCI StrikeTaskReleaseConstraintsType.
 *
 * @generated from message anduril.tasks.v2.StrikeReleaseConstraint
 */
export declare type StrikeReleaseConstraint = Message<"anduril.tasks.v2.StrikeReleaseConstraint"> & {
  /**
   * @generated from oneof anduril.tasks.v2.StrikeReleaseConstraint.strike_release_constraint
   */
  strikeReleaseConstraint: {
    /**
     * @generated from field: anduril.tasks.v2.AreaConstraints release_area = 1;
     */
    value: AreaConstraints;
    case: "releaseArea";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.tasks.v2.StrikeReleaseConstraint.
 * Use `create(StrikeReleaseConstraintSchema)` to create a new message.
 */
export declare const StrikeReleaseConstraintSchema: GenMessage<StrikeReleaseConstraint>;

/**
 * @generated from message anduril.tasks.v2.StrikeParameters
 */
export declare type StrikeParameters = Message<"anduril.tasks.v2.StrikeParameters"> & {
  /**
   * @generated from field: repeated anduril.tasks.v2.PayloadConfiguration payloads_to_employ = 1;
   */
  payloadsToEmploy: PayloadConfiguration[];

  /**
   * GPS time at which the strike should be performed.
   *
   * @generated from field: google.protobuf.Duration desired_impact_time = 2;
   */
  desiredImpactTime?: Duration;

  /**
   * Bearing at which to perform the run in for a strike.
   *
   * @generated from field: double run_in_bearing = 3;
   */
  runInBearing: number;

  /**
   * Angle which to glide into the run in for a strike.
   *
   * @generated from field: double glide_slope_angle = 4;
   */
  glideSlopeAngle: number;
};

/**
 * Describes the message anduril.tasks.v2.StrikeParameters.
 * Use `create(StrikeParametersSchema)` to create a new message.
 */
export declare const StrikeParametersSchema: GenMessage<StrikeParameters>;

/**
 * Individual payload configuration, can represent a munition such as a missile, a gun, or a non-kinetic effect.
 *
 * @generated from message anduril.tasks.v2.PayloadConfiguration
 */
export declare type PayloadConfiguration = Message<"anduril.tasks.v2.PayloadConfiguration"> & {
  /**
   * Unique ID or descriptor for the capability.
   *
   * @generated from field: string capability_id = 1;
   */
  capabilityId: string;

  /**
   * @generated from field: uint32 quantity = 2;
   */
  quantity: number;
};

/**
 * Describes the message anduril.tasks.v2.PayloadConfiguration.
 * Use `create(PayloadConfigurationSchema)` to create a new message.
 */
export declare const PayloadConfigurationSchema: GenMessage<PayloadConfiguration>;

/**
 * Releases a payload from the vehicle
 *
 * @generated from message anduril.tasks.v2.ReleasePayload
 */
export declare type ReleasePayload = Message<"anduril.tasks.v2.ReleasePayload"> & {
  /**
   * The payload(s) that will be released
   *
   * @generated from field: repeated anduril.tasks.v2.PayloadConfiguration payloads = 1;
   */
  payloads: PayloadConfiguration[];

  /**
   * Optional objective, of where the payload should be dropped. If omitted the payload will drop the current location
   *
   * @generated from field: anduril.tasks.v2.Objective objective = 2;
   */
  objective?: Objective;

  /**
   * @generated from oneof anduril.tasks.v2.ReleasePayload.release_method
   */
  releaseMethod: {
    /**
     * Attempt to place the payload delicately from a standstill
     *
     * @generated from field: google.protobuf.Empty precision_release = 3;
     */
    value: Empty;
    case: "precisionRelease";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.tasks.v2.ReleasePayload.
 * Use `create(ReleasePayloadSchema)` to create a new message.
 */
export declare const ReleasePayloadSchema: GenMessage<ReleasePayload>;

