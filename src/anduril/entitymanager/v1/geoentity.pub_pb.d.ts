// @generated by protoc-gen-es v2.2.0 with parameter "import_extension=js"
// @generated from file anduril/entitymanager/v1/geoentity.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Position } from "./location.pub_pb.js";

/**
 * Describes the file anduril/entitymanager/v1/geoentity.pub.proto.
 */
export declare const file_anduril_entitymanager_v1_geoentity_pub: GenFile;

/**
 * A component that describes a geo-entity.
 *
 * @generated from message anduril.entitymanager.v1.GeoDetails
 */
export declare type GeoDetails = Message<"anduril.entitymanager.v1.GeoDetails"> & {
  /**
   * @generated from field: anduril.entitymanager.v1.GeoType type = 1;
   */
  type: GeoType;
};

/**
 * Describes the message anduril.entitymanager.v1.GeoDetails.
 * Use `create(GeoDetailsSchema)` to create a new message.
 */
export declare const GeoDetailsSchema: GenMessage<GeoDetails>;

/**
 * A component that describes the shape of a geo-entity.
 *
 * @generated from message anduril.entitymanager.v1.GeoShape
 */
export declare type GeoShape = Message<"anduril.entitymanager.v1.GeoShape"> & {
  /**
   * point, line_string, and polygon are convertible as a subset of GeoJSON
   *
   * @generated from oneof anduril.entitymanager.v1.GeoShape.shape
   */
  shape: {
    /**
     * @generated from field: anduril.entitymanager.v1.GeoPoint point = 1;
     */
    value: GeoPoint;
    case: "point";
  } | {
    /**
     * @generated from field: anduril.entitymanager.v1.GeoLine line = 2;
     */
    value: GeoLine;
    case: "line";
  } | {
    /**
     * @generated from field: anduril.entitymanager.v1.GeoPolygon polygon = 3;
     */
    value: GeoPolygon;
    case: "polygon";
  } | {
    /**
     * @generated from field: anduril.entitymanager.v1.GeoEllipse ellipse = 4;
     */
    value: GeoEllipse;
    case: "ellipse";
  } | {
    /**
     * @generated from field: anduril.entitymanager.v1.GeoEllipsoid ellipsoid = 5;
     */
    value: GeoEllipsoid;
    case: "ellipsoid";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.entitymanager.v1.GeoShape.
 * Use `create(GeoShapeSchema)` to create a new message.
 */
export declare const GeoShapeSchema: GenMessage<GeoShape>;

/**
 * A point shaped geo-entity.
 * See https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.2
 *
 * @generated from message anduril.entitymanager.v1.GeoPoint
 */
export declare type GeoPoint = Message<"anduril.entitymanager.v1.GeoPoint"> & {
  /**
   * @generated from field: anduril.entitymanager.v1.Position position = 1;
   */
  position?: Position;
};

/**
 * Describes the message anduril.entitymanager.v1.GeoPoint.
 * Use `create(GeoPointSchema)` to create a new message.
 */
export declare const GeoPointSchema: GenMessage<GeoPoint>;

/**
 * A line shaped geo-entity.
 * See https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.4
 *
 * @generated from message anduril.entitymanager.v1.GeoLine
 */
export declare type GeoLine = Message<"anduril.entitymanager.v1.GeoLine"> & {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.Position positions = 1;
   */
  positions: Position[];
};

/**
 * Describes the message anduril.entitymanager.v1.GeoLine.
 * Use `create(GeoLineSchema)` to create a new message.
 */
export declare const GeoLineSchema: GenMessage<GeoLine>;

/**
 * A polygon shaped geo-entity.
 * See https://datatracker.ietf.org/doc/html/rfc7946#section-3.1.6, only canonical representations accepted
 *
 * @generated from message anduril.entitymanager.v1.GeoPolygon
 */
export declare type GeoPolygon = Message<"anduril.entitymanager.v1.GeoPolygon"> & {
  /**
   * An array of LinearRings where the first item is the exterior ring and subsequent items are interior rings.
   *
   * @generated from field: repeated anduril.entitymanager.v1.LinearRing rings = 1;
   */
  rings: LinearRing[];

  /**
   * An extension hint that this polygon is a rectangle. When true this implies several things:
   * * exactly 1 linear ring with 5 points (starting corner, 3 other corners and start again)
   * * each point has the same altitude corresponding with the plane of the rectangle
   * * each point has the same height (either all present and equal, or all not present)
   *
   * @generated from field: bool is_rectangle = 2;
   */
  isRectangle: boolean;
};

/**
 * Describes the message anduril.entitymanager.v1.GeoPolygon.
 * Use `create(GeoPolygonSchema)` to create a new message.
 */
export declare const GeoPolygonSchema: GenMessage<GeoPolygon>;

/**
 * An ellipse shaped geo-entity.
 * For a circle, the major and minor axis would be the same values.
 * This shape is NOT Geo-JSON compatible.
 *
 * @generated from message anduril.entitymanager.v1.GeoEllipse
 */
export declare type GeoEllipse = Message<"anduril.entitymanager.v1.GeoEllipse"> & {
  /**
   * Defines the distance from the center point of the ellipse to the furthest distance on the perimeter in meters.
   *
   * @generated from field: google.protobuf.DoubleValue semi_major_axis_m = 2;
   */
  semiMajorAxisM?: number;

  /**
   * Defines the distance from the center point of the ellipse to the shortest distance on the perimeter in meters.
   *
   * @generated from field: google.protobuf.DoubleValue semi_minor_axis_m = 3;
   */
  semiMinorAxisM?: number;

  /**
   * The orientation of the semi-major relative to true north in degrees from clockwise: 0-180 due to symmetry across the semi-minor axis.
   *
   * @generated from field: google.protobuf.DoubleValue orientation_d = 4;
   */
  orientationD?: number;

  /**
   * Optional height above entity position to extrude in meters. A non-zero value creates an elliptic cylinder
   *
   * @generated from field: google.protobuf.DoubleValue height_m = 5;
   */
  heightM?: number;
};

/**
 * Describes the message anduril.entitymanager.v1.GeoEllipse.
 * Use `create(GeoEllipseSchema)` to create a new message.
 */
export declare const GeoEllipseSchema: GenMessage<GeoEllipse>;

/**
 * An ellipsoid shaped geo-entity.
 * Principal axis lengths are defined in entity body space
 * This shape is NOT Geo-JSON compatible.
 *
 * @generated from message anduril.entitymanager.v1.GeoEllipsoid
 */
export declare type GeoEllipsoid = Message<"anduril.entitymanager.v1.GeoEllipsoid"> & {
  /**
   * Defines the distance from the center point to the surface along the forward axis
   *
   * @generated from field: google.protobuf.DoubleValue forward_axis_m = 1;
   */
  forwardAxisM?: number;

  /**
   * Defines the distance from the center point to the surface along the side axis
   *
   * @generated from field: google.protobuf.DoubleValue side_axis_m = 2;
   */
  sideAxisM?: number;

  /**
   * Defines the distance from the center point to the surface along the up axis
   *
   * @generated from field: google.protobuf.DoubleValue up_axis_m = 3;
   */
  upAxisM?: number;
};

/**
 * Describes the message anduril.entitymanager.v1.GeoEllipsoid.
 * Use `create(GeoEllipsoidSchema)` to create a new message.
 */
export declare const GeoEllipsoidSchema: GenMessage<GeoEllipsoid>;

/**
 * A closed ring of points. The first and last point must be the same.
 *
 * @generated from message anduril.entitymanager.v1.LinearRing
 */
export declare type LinearRing = Message<"anduril.entitymanager.v1.LinearRing"> & {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.GeoPolygonPosition positions = 2;
   */
  positions: GeoPolygonPosition[];
};

/**
 * Describes the message anduril.entitymanager.v1.LinearRing.
 * Use `create(LinearRingSchema)` to create a new message.
 */
export declare const LinearRingSchema: GenMessage<LinearRing>;

/**
 * A position in a GeoPolygon with an optional extruded height.
 *
 * @generated from message anduril.entitymanager.v1.GeoPolygonPosition
 */
export declare type GeoPolygonPosition = Message<"anduril.entitymanager.v1.GeoPolygonPosition"> & {
  /**
   * base position. if no altitude set, its on the ground.
   *
   * @generated from field: anduril.entitymanager.v1.Position position = 1;
   */
  position?: Position;

  /**
   * optional height above base position to extrude in meters.
   * for a given polygon, all points should have a height or none of them.
   * strictly GeoJSON compatible polygons will not have this set.
   *
   * @generated from field: google.protobuf.FloatValue height_m = 2;
   */
  heightM?: number;
};

/**
 * Describes the message anduril.entitymanager.v1.GeoPolygonPosition.
 * Use `create(GeoPolygonPositionSchema)` to create a new message.
 */
export declare const GeoPolygonPositionSchema: GenMessage<GeoPolygonPosition>;

/**
 * The type of geo entity.
 *
 * @generated from enum anduril.entitymanager.v1.GeoType
 */
export enum GeoType {
  /**
   * @generated from enum value: GEO_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: GEO_TYPE_GENERAL = 1;
   */
  GENERAL = 1,

  /**
   * @generated from enum value: GEO_TYPE_HAZARD = 2;
   */
  HAZARD = 2,

  /**
   * @generated from enum value: GEO_TYPE_EMERGENCY = 3;
   */
  EMERGENCY = 3,

  /**
   * Engagement zones allow for engaging an entity if it comes within the zone of another entity.
   *
   * @generated from enum value: GEO_TYPE_ENGAGEMENT_ZONE = 5;
   */
  ENGAGEMENT_ZONE = 5,

  /**
   * @generated from enum value: GEO_TYPE_CONTROL_AREA = 6;
   */
  CONTROL_AREA = 6,

  /**
   * @generated from enum value: GEO_TYPE_BULLSEYE = 7;
   */
  BULLSEYE = 7,
}

/**
 * Describes the enum anduril.entitymanager.v1.GeoType.
 */
export declare const GeoTypeSchema: GenEnum<GeoType>;

