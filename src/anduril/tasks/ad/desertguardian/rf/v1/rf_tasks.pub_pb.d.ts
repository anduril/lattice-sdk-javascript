// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/tasks/ad/desertguardian/rf/v1/rf_tasks.pub.proto (package anduril.tasks.ad.desertguardian.rf.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file anduril/tasks/ad/desertguardian/rf/v1/rf_tasks.pub.proto.
 */
export declare const file_anduril_tasks_ad_desertguardian_rf_v1_rf_tasks_pub: GenFile;

/**
 * Set the transmit state of an RF Platform such as a Radar, Beacon, or Radio.
 *
 * @generated from message anduril.tasks.ad.desertguardian.rf.v1.SetTransmitState
 */
export declare type SetTransmitState = Message<"anduril.tasks.ad.desertguardian.rf.v1.SetTransmitState"> & {
  /**
   * @generated from field: anduril.tasks.ad.desertguardian.rf.v1.TransmitState transmit_state = 1;
   */
  transmitState: TransmitState;
};

/**
 * Describes the message anduril.tasks.ad.desertguardian.rf.v1.SetTransmitState.
 * Use `create(SetTransmitStateSchema)` to create a new message.
 */
export declare const SetTransmitStateSchema: GenMessage<SetTransmitState>;

/**
 * Set the surveillance state of a passive (listen-only) RF Platform.
 *
 * @generated from message anduril.tasks.ad.desertguardian.rf.v1.SetSurveillanceState
 */
export declare type SetSurveillanceState = Message<"anduril.tasks.ad.desertguardian.rf.v1.SetSurveillanceState"> & {
  /**
   * @generated from field: anduril.tasks.ad.desertguardian.rf.v1.SurveillanceState surveillance_state = 1;
   */
  surveillanceState: SurveillanceState;
};

/**
 * Describes the message anduril.tasks.ad.desertguardian.rf.v1.SetSurveillanceState.
 * Use `create(SetSurveillanceStateSchema)` to create a new message.
 */
export declare const SetSurveillanceStateSchema: GenMessage<SetSurveillanceState>;

/**
 * Set whether or not an RF Platform has Emmission Control (EmCon).
 * If supported, RF platforms should only expose the SetTransmitState task when EmissionControlState is EMISSION_CONTROL_STATE_ALLOWED.
 * When in EMISSION_CONTROL_STATE_NOT_ALLOWED, the Platform should be in TRANSMIT_STATE_NOT_TRANSMITTING, and should remove SetTransmitState from the task Catalog.
 *
 * @generated from message anduril.tasks.ad.desertguardian.rf.v1.SetEmissionControlState
 */
export declare type SetEmissionControlState = Message<"anduril.tasks.ad.desertguardian.rf.v1.SetEmissionControlState"> & {
  /**
   * @generated from field: anduril.tasks.ad.desertguardian.rf.v1.EmissionControlState emcon_state = 1;
   */
  emconState: EmissionControlState;
};

/**
 * Describes the message anduril.tasks.ad.desertguardian.rf.v1.SetEmissionControlState.
 * Use `create(SetEmissionControlStateSchema)` to create a new message.
 */
export declare const SetEmissionControlStateSchema: GenMessage<SetEmissionControlState>;

/**
 * @generated from enum anduril.tasks.ad.desertguardian.rf.v1.TransmitState
 */
export enum TransmitState {
  /**
   * @generated from enum value: TRANSMIT_STATE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: TRANSMIT_STATE_TRANSMITTING = 1;
   */
  TRANSMITTING = 1,

  /**
   * @generated from enum value: TRANSMIT_STATE_NOT_TRANSMITTING = 2;
   */
  NOT_TRANSMITTING = 2,
}

/**
 * Describes the enum anduril.tasks.ad.desertguardian.rf.v1.TransmitState.
 */
export declare const TransmitStateSchema: GenEnum<TransmitState>;

/**
 * @generated from enum anduril.tasks.ad.desertguardian.rf.v1.SurveillanceState
 */
export enum SurveillanceState {
  /**
   * @generated from enum value: SURVEILLANCE_STATE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: SURVEILLANCE_STATE_SURVEILLING = 1;
   */
  SURVEILLING = 1,

  /**
   * @generated from enum value: SURVEILLANCE_STATE_NOT_SURVEILLING = 2;
   */
  NOT_SURVEILLING = 2,
}

/**
 * Describes the enum anduril.tasks.ad.desertguardian.rf.v1.SurveillanceState.
 */
export declare const SurveillanceStateSchema: GenEnum<SurveillanceState>;

/**
 * @generated from enum anduril.tasks.ad.desertguardian.rf.v1.EmissionControlState
 */
export enum EmissionControlState {
  /**
   * @generated from enum value: EMISSION_CONTROL_STATE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: EMISSION_CONTROL_STATE_ALLOWED = 1;
   */
  ALLOWED = 1,

  /**
   * @generated from enum value: EMISSION_CONTROL_STATE_NOT_ALLOWED = 2;
   */
  NOT_ALLOWED = 2,
}

/**
 * Describes the enum anduril.tasks.ad.desertguardian.rf.v1.EmissionControlState.
 */
export declare const EmissionControlStateSchema: GenEnum<EmissionControlState>;
