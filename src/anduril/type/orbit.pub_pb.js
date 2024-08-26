// @generated by protoc-gen-es v1.7.2 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/type/orbit.pub.proto (package anduril.type, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { DoubleValue, proto3, StringValue, Timestamp, UInt32Value } = require("@bufbuild/protobuf");

/**
 * @generated from enum anduril.type.MeanElementTheory
 */
const MeanElementTheory = proto3.makeEnum(
  "anduril.type.MeanElementTheory",
  [
    {no: 0, name: "MEAN_ELEMENT_THEORY_INVALID", localName: "INVALID"},
    {no: 1, name: "MEAN_ELEMENT_THEORY_SGP4", localName: "SGP4"},
  ],
);

/**
 * @generated from enum anduril.type.EciReferenceFrame
 */
const EciReferenceFrame = proto3.makeEnum(
  "anduril.type.EciReferenceFrame",
  [
    {no: 0, name: "ECI_REFERENCE_FRAME_INVALID", localName: "INVALID"},
    {no: 1, name: "ECI_REFERENCE_FRAME_TEME", localName: "TEME"},
  ],
);

/**
 * Orbit Mean Elements data, analogous to the Orbit Mean Elements Message in CCSDS 502.0-B-3
 *
 * @generated from message anduril.type.OrbitMeanElements
 */
const OrbitMeanElements = proto3.makeMessageType(
  "anduril.type.OrbitMeanElements",
  () => [
    { no: 1, name: "metadata", kind: "message", T: OrbitMeanElementsMetadata },
    { no: 2, name: "mean_keplerian_elements", kind: "message", T: MeanKeplerianElements },
    { no: 3, name: "tle_parameters", kind: "message", T: TleParameters },
  ],
);

/**
 * @generated from message anduril.type.OrbitMeanElementsMetadata
 */
const OrbitMeanElementsMetadata = proto3.makeMessageType(
  "anduril.type.OrbitMeanElementsMetadata",
  () => [
    { no: 1, name: "creation_date", kind: "message", T: Timestamp },
    { no: 2, name: "originator", kind: "message", T: StringValue },
    { no: 3, name: "message_id", kind: "message", T: StringValue },
    { no: 4, name: "ref_frame", kind: "enum", T: proto3.getEnumType(EciReferenceFrame) },
    { no: 5, name: "ref_frame_epoch", kind: "message", T: Timestamp },
    { no: 6, name: "mean_element_theory", kind: "enum", T: proto3.getEnumType(MeanElementTheory) },
  ],
);

/**
 * @generated from message anduril.type.MeanKeplerianElements
 */
const MeanKeplerianElements = proto3.makeMessageType(
  "anduril.type.MeanKeplerianElements",
  () => [
    { no: 1, name: "epoch", kind: "message", T: Timestamp },
    { no: 2, name: "semi_major_axis_km", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "line2_field8" },
    { no: 3, name: "mean_motion", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "line2_field8" },
    { no: 4, name: "eccentricity", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "inclination_deg", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 6, name: "ra_of_asc_node_deg", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 7, name: "arg_of_pericenter_deg", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 8, name: "mean_anomaly_deg", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 9, name: "gm", kind: "message", T: DoubleValue },
  ],
);

/**
 * @generated from message anduril.type.TleParameters
 */
const TleParameters = proto3.makeMessageType(
  "anduril.type.TleParameters",
  () => [
    { no: 1, name: "ephemeris_type", kind: "message", T: UInt32Value },
    { no: 2, name: "classification_type", kind: "message", T: StringValue },
    { no: 3, name: "norad_cat_id", kind: "message", T: UInt32Value },
    { no: 4, name: "element_set_no", kind: "message", T: UInt32Value },
    { no: 5, name: "rev_at_epoch", kind: "message", T: UInt32Value },
    { no: 6, name: "bstar", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "line1_field11" },
    { no: 7, name: "bterm", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "line1_field11" },
    { no: 8, name: "mean_motion_dot", kind: "message", T: DoubleValue },
    { no: 9, name: "mean_motion_ddot", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "line1_field10" },
    { no: 10, name: "agom", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "line1_field10" },
  ],
);


exports.MeanElementTheory = MeanElementTheory;
exports.EciReferenceFrame = EciReferenceFrame;
exports.OrbitMeanElements = OrbitMeanElements;
exports.OrbitMeanElementsMetadata = OrbitMeanElementsMetadata;
exports.MeanKeplerianElements = MeanKeplerianElements;
exports.TleParameters = TleParameters;