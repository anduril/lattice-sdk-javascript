// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/tasks/ad/desertguardian/rf/v1/rf_tasks.pub.proto (package anduril.tasks.ad.desertguardian.rf.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { proto3 } = require("@bufbuild/protobuf");

/**
 * @generated from enum anduril.tasks.ad.desertguardian.rf.v1.TransmitState
 */
const TransmitState = proto3.makeEnum(
  "anduril.tasks.ad.desertguardian.rf.v1.TransmitState",
  [
    {no: 0, name: "TRANSMIT_STATE_INVALID", localName: "INVALID"},
    {no: 1, name: "TRANSMIT_STATE_TRANSMITTING", localName: "TRANSMITTING"},
    {no: 2, name: "TRANSMIT_STATE_NOT_TRANSMITTING", localName: "NOT_TRANSMITTING"},
  ],
);

/**
 * @generated from enum anduril.tasks.ad.desertguardian.rf.v1.SurveillanceState
 */
const SurveillanceState = proto3.makeEnum(
  "anduril.tasks.ad.desertguardian.rf.v1.SurveillanceState",
  [
    {no: 0, name: "SURVEILLANCE_STATE_INVALID", localName: "INVALID"},
    {no: 1, name: "SURVEILLANCE_STATE_SURVEILLING", localName: "SURVEILLING"},
    {no: 2, name: "SURVEILLANCE_STATE_NOT_SURVEILLING", localName: "NOT_SURVEILLING"},
  ],
);

/**
 * @generated from enum anduril.tasks.ad.desertguardian.rf.v1.EmissionControlState
 */
const EmissionControlState = proto3.makeEnum(
  "anduril.tasks.ad.desertguardian.rf.v1.EmissionControlState",
  [
    {no: 0, name: "EMISSION_CONTROL_STATE_INVALID", localName: "INVALID"},
    {no: 1, name: "EMISSION_CONTROL_STATE_ALLOWED", localName: "ALLOWED"},
    {no: 2, name: "EMISSION_CONTROL_STATE_NOT_ALLOWED", localName: "NOT_ALLOWED"},
  ],
);

/**
 * Set the transmit state of an RF Platform such as a Radar, Beacon, or Radio.
 *
 * @generated from message anduril.tasks.ad.desertguardian.rf.v1.SetTransmitState
 */
const SetTransmitState = proto3.makeMessageType(
  "anduril.tasks.ad.desertguardian.rf.v1.SetTransmitState",
  () => [
    { no: 1, name: "transmit_state", kind: "enum", T: proto3.getEnumType(TransmitState) },
  ],
);

/**
 * Set the surveillance state of a passive (listen-only) RF Platform.
 *
 * @generated from message anduril.tasks.ad.desertguardian.rf.v1.SetSurveillanceState
 */
const SetSurveillanceState = proto3.makeMessageType(
  "anduril.tasks.ad.desertguardian.rf.v1.SetSurveillanceState",
  () => [
    { no: 1, name: "surveillance_state", kind: "enum", T: proto3.getEnumType(SurveillanceState) },
  ],
);

/**
 * Set whether or not an RF Platform has Emmission Control (EmCon).
 * If supported, RF platforms should only expose the SetTransmitState task when EmissionControlState is EMISSION_CONTROL_STATE_ALLOWED.
 * When in EMISSION_CONTROL_STATE_NOT_ALLOWED, the Platform should be in TRANSMIT_STATE_NOT_TRANSMITTING, and should remove SetTransmitState from the task Catalog.
 *
 * @generated from message anduril.tasks.ad.desertguardian.rf.v1.SetEmissionControlState
 */
const SetEmissionControlState = proto3.makeMessageType(
  "anduril.tasks.ad.desertguardian.rf.v1.SetEmissionControlState",
  () => [
    { no: 1, name: "emcon_state", kind: "enum", T: proto3.getEnumType(EmissionControlState) },
  ],
);


exports.TransmitState = TransmitState;
exports.SurveillanceState = SurveillanceState;
exports.EmissionControlState = EmissionControlState;
exports.SetTransmitState = SetTransmitState;
exports.SetSurveillanceState = SetSurveillanceState;
exports.SetEmissionControlState = SetEmissionControlState;