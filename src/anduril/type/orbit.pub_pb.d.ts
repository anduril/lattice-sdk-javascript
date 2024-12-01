// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/type/orbit.pub.proto (package anduril.type, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Timestamp } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/type/orbit.pub.proto.
 */
export declare const file_anduril_type_orbit_pub: GenFile;

/**
 * Orbit Mean Elements data, analogous to the Orbit Mean Elements Message in CCSDS 502.0-B-3
 *
 * @generated from message anduril.type.OrbitMeanElements
 */
export declare type OrbitMeanElements = Message<"anduril.type.OrbitMeanElements"> & {
  /**
   * @generated from field: anduril.type.OrbitMeanElementsMetadata metadata = 1;
   */
  metadata?: OrbitMeanElementsMetadata;

  /**
   * @generated from field: anduril.type.MeanKeplerianElements mean_keplerian_elements = 2;
   */
  meanKeplerianElements?: MeanKeplerianElements;

  /**
   * @generated from field: anduril.type.TleParameters tle_parameters = 3;
   */
  tleParameters?: TleParameters;
};

/**
 * Describes the message anduril.type.OrbitMeanElements.
 * Use `create(OrbitMeanElementsSchema)` to create a new message.
 */
export declare const OrbitMeanElementsSchema: GenMessage<OrbitMeanElements>;

/**
 * @generated from message anduril.type.OrbitMeanElementsMetadata
 */
export declare type OrbitMeanElementsMetadata = Message<"anduril.type.OrbitMeanElementsMetadata"> & {
  /**
   * Creation date/time in UTC
   *
   * @generated from field: google.protobuf.Timestamp creation_date = 1;
   */
  creationDate?: Timestamp;

  /**
   * Creating agency or operator
   *
   * @generated from field: google.protobuf.StringValue originator = 2;
   */
  originator?: string;

  /**
   * ID that uniquely identifies a message from a given originator.
   *
   * @generated from field: google.protobuf.StringValue message_id = 3;
   */
  messageId?: string;

  /**
   * Reference frame, assumed to be Earth-centered
   *
   * @generated from field: anduril.type.EciReferenceFrame ref_frame = 4;
   */
  refFrame: EciReferenceFrame;

  /**
   * Reference frame epoch in UTC - mandatory only if not intrinsic to frame definition
   *
   * @generated from field: google.protobuf.Timestamp ref_frame_epoch = 5;
   */
  refFrameEpoch?: Timestamp;

  /**
   * @generated from field: anduril.type.MeanElementTheory mean_element_theory = 6;
   */
  meanElementTheory: MeanElementTheory;
};

/**
 * Describes the message anduril.type.OrbitMeanElementsMetadata.
 * Use `create(OrbitMeanElementsMetadataSchema)` to create a new message.
 */
export declare const OrbitMeanElementsMetadataSchema: GenMessage<OrbitMeanElementsMetadata>;

/**
 * @generated from message anduril.type.MeanKeplerianElements
 */
export declare type MeanKeplerianElements = Message<"anduril.type.MeanKeplerianElements"> & {
  /**
   * UTC time of validity
   *
   * @generated from field: google.protobuf.Timestamp epoch = 1;
   */
  epoch?: Timestamp;

  /**
   * @generated from oneof anduril.type.MeanKeplerianElements.line2_field8
   */
  line2Field8: {
    /**
     * Preferred: semi major axis in kilometers
     *
     * @generated from field: double semi_major_axis_km = 2;
     */
    value: number;
    case: "semiMajorAxisKm";
  } | {
    /**
     * If using SGP/SGP4, provide the Keplerian Mean Motion in revolutions per day
     *
     * @generated from field: double mean_motion = 3;
     */
    value: number;
    case: "meanMotion";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: double eccentricity = 4;
   */
  eccentricity: number;

  /**
   * Angle of inclination in deg
   *
   * @generated from field: double inclination_deg = 5;
   */
  inclinationDeg: number;

  /**
   * Right ascension of the ascending node in deg
   *
   * @generated from field: double ra_of_asc_node_deg = 6;
   */
  raOfAscNodeDeg: number;

  /**
   * Argument of pericenter in deg
   *
   * @generated from field: double arg_of_pericenter_deg = 7;
   */
  argOfPericenterDeg: number;

  /**
   * Mean anomaly in deg
   *
   * @generated from field: double mean_anomaly_deg = 8;
   */
  meanAnomalyDeg: number;

  /**
   * Optional: gravitational coefficient (Gravitational Constant x central mass) in kg^3 / s^2
   *
   * @generated from field: google.protobuf.DoubleValue gm = 9;
   */
  gm?: number;
};

/**
 * Describes the message anduril.type.MeanKeplerianElements.
 * Use `create(MeanKeplerianElementsSchema)` to create a new message.
 */
export declare const MeanKeplerianElementsSchema: GenMessage<MeanKeplerianElements>;

/**
 * @generated from message anduril.type.TleParameters
 */
export declare type TleParameters = Message<"anduril.type.TleParameters"> & {
  /**
   * Integer specifying TLE ephemeris type
   *
   * @generated from field: google.protobuf.UInt32Value ephemeris_type = 1;
   */
  ephemerisType?: number;

  /**
   * User-defined free-text message classification/caveats of this TLE
   *
   * @generated from field: google.protobuf.StringValue classification_type = 2;
   */
  classificationType?: string;

  /**
   * Norad catalog number: integer up to nine digits.
   *
   * @generated from field: google.protobuf.UInt32Value norad_cat_id = 3;
   */
  noradCatId?: number;

  /**
   * @generated from field: google.protobuf.UInt32Value element_set_no = 4;
   */
  elementSetNo?: number;

  /**
   * Optional: revolution number
   *
   * @generated from field: google.protobuf.UInt32Value rev_at_epoch = 5;
   */
  revAtEpoch?: number;

  /**
   * Drag-like ballistic coefficient, required for SGP4 and SGP4-XP mean element models
   *
   * @generated from oneof anduril.type.TleParameters.line1_field11
   */
  line1Field11: {
    /**
     * Drag parameter for SGP-4 in units 1 / Earth radii
     *
     * @generated from field: double bstar = 6;
     */
    value: number;
    case: "bstar";
  } | {
    /**
     * Drag parameter for SGP4-XP in units m^2 / kg
     *
     * @generated from field: double bterm = 7;
     */
    value: number;
    case: "bterm";
  } | { case: undefined; value?: undefined };

  /**
   * First time derivative of mean motion in rev / day^2
   *
   * @generated from field: google.protobuf.DoubleValue mean_motion_dot = 8;
   */
  meanMotionDot?: number;

  /**
   * @generated from oneof anduril.type.TleParameters.line1_field10
   */
  line1Field10: {
    /**
     * Second time derivative of mean motion in rev / day^3. For use with SGP or PPT3.
     *
     * @generated from field: double mean_motion_ddot = 9;
     */
    value: number;
    case: "meanMotionDdot";
  } | {
    /**
     * Solar radiation pressure coefficient A_gamma / m in m^2 / kg. For use with SGP4-XP.
     *
     * @generated from field: double agom = 10;
     */
    value: number;
    case: "agom";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.type.TleParameters.
 * Use `create(TleParametersSchema)` to create a new message.
 */
export declare const TleParametersSchema: GenMessage<TleParameters>;

/**
 * @generated from enum anduril.type.MeanElementTheory
 */
export enum MeanElementTheory {
  /**
   * @generated from enum value: MEAN_ELEMENT_THEORY_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: MEAN_ELEMENT_THEORY_SGP4 = 1;
   */
  SGP4 = 1,
}

/**
 * Describes the enum anduril.type.MeanElementTheory.
 */
export declare const MeanElementTheorySchema: GenEnum<MeanElementTheory>;

/**
 * @generated from enum anduril.type.EciReferenceFrame
 */
export enum EciReferenceFrame {
  /**
   * @generated from enum value: ECI_REFERENCE_FRAME_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: ECI_REFERENCE_FRAME_TEME = 1;
   */
  TEME = 1,
}

/**
 * Describes the enum anduril.type.EciReferenceFrame.
 */
export declare const EciReferenceFrameSchema: GenEnum<EciReferenceFrame>;

