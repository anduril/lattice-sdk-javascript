// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/entitymanager/v1/entity.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Location, LocationUncertainty } from "./location.pub_pb";
import type { GeoDetails, GeoShape } from "./geoentity.pub_pb";
import type { MilView, Ontology } from "./ontology.pub_pb";
import type { Sensors } from "./sensors.pub_pb";
import type { Payloads } from "./payloads.pub_pb";
import type { PowerState } from "./power.pub_pb";
import type { TargetPriority } from "./target_priority.pub_pb";
import type { LineOfBearing, Signal } from "./signal.pub_pb";
import type { TransponderCodes } from "./transponder_codes.pub_pb";
import type { Classification } from "./classification.pub_pb";
import type { TaskCatalog } from "../../tasks/v2/catalog.pub_pb";
import type { Relationships } from "./relationship.pub_pb";
import type { Dimensions } from "./dimensions.pub_pb";
import type { RouteDetails } from "./route_details.pub_pb";
import type { Schedules } from "./schedule.pub_pb";
import type { Health } from "./health_status.pub_pb";
import type { GroupDetails } from "./group.pub_pb";
import type { Supplies } from "./supplies.pub_pb";
import type { Orbit } from "./orbit.pub_pb";
import type { AltIdType, OverrideStatus, OverrideType, Source, UInt32Range } from "./types.pub_pb";
import type { Color } from "../../type/color.pub_pb";

/**
 * Describes the file anduril/entitymanager/v1/entity.pub.proto.
 */
export declare const file_anduril_entitymanager_v1_entity_pub: GenFile;

/**
 * The entity object represents a single known object within the Lattice operational environment. It contains
 * all data associated with the entity, such as its name, ID, and other relevant components.
 *
 * @generated from message anduril.entitymanager.v1.Entity
 */
export declare type Entity = Message<"anduril.entitymanager.v1.Entity"> & {
  /**
   * A Globally Unique Identifier (GUID) for your entity. If this field is empty, the Entity API
   * automatically generates an ID when it creates the entity.
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * A human-readable entity description that's helpful for debugging purposes and human
   * traceability. If this field is empty, the Entity API generates one for you.
   *
   * @generated from field: string description = 2;
   */
  description: string;

  /**
   * Indicates the entity is active and should have lifecycle state of CREATE or UPDATE.
   * Set this field to true when publishing an entity.
   *
   * @generated from field: bool is_live = 3;
   */
  isLive: boolean;

  /**
   * The time when the entity was first known to the entity producer. If this field is empty, the Entity API uses the
   * current timestamp of when the entity is first received.
   * For example, when a drone is first powered on, it might report its startup time as the created time.
   * The timestamp doesn't change for the lifetime of an entity.
   *
   * @generated from field: google.protobuf.Timestamp created_time = 4;
   */
  createdTime?: Timestamp;

  /**
   * Future time that expires an entity and updates the is_live flag.
   * For entities that are constantly updating, the expiry time also updates.
   * In some cases, this may differ from is_live.
   * Example: Entities with tasks exported to an external system must remain
   * active even after they expire.
   * This field is required when publishing a prepopulated entity.
   * The expiry time must be in the future, but less than 30 days from the current time.
   *
   * @generated from field: google.protobuf.Timestamp expiry_time = 5;
   */
  expiryTime?: Timestamp;

  /**
   * Human-readable descriptions of what the entity is currently doing.
   *
   * @generated from field: anduril.entitymanager.v1.Status status = 19;
   */
  status?: Status;

  /**
   * Geospatial data related to the entity, including its position, kinematics, and orientation.
   *
   * @generated from field: anduril.entitymanager.v1.Location location = 6;
   */
  location?: Location;

  /**
   * Indicates uncertainty of the entity's position and kinematics.
   *
   * @generated from field: anduril.entitymanager.v1.LocationUncertainty location_uncertainty = 15;
   */
  locationUncertainty?: LocationUncertainty;

  /**
   * Geospatial representation of the entity, including entities that cover an area rather than a fixed point.
   *
   * @generated from field: anduril.entitymanager.v1.GeoShape geo_shape = 23;
   */
  geoShape?: GeoShape;

  /**
   * Additional details on what the geospatial area or point represents, along with visual display details.
   *
   * @generated from field: anduril.entitymanager.v1.GeoDetails geo_details = 24;
   */
  geoDetails?: GeoDetails;

  /**
   * Entity name displayed in the Lattice UI side panel. Also includes identifiers that other systems can use to reference the same entity.
   *
   * @generated from field: anduril.entitymanager.v1.Aliases aliases = 7;
   */
  aliases?: Aliases;

  /**
   * If this entity is tracked by another entity, this component contains data related to how it's being tracked.
   *
   * @generated from field: anduril.entitymanager.v1.Tracked tracked = 8;
   */
  tracked?: Tracked;

  /**
   * If this entity has been correlated or decorrelated to another one, this component contains information on the correlation or decorrelation.
   *
   * @generated from field: anduril.entitymanager.v1.Correlation correlation = 47;
   */
  correlation?: Correlation;

  /**
   * Military view of the entity.
   *
   * @generated from field: anduril.entitymanager.v1.MilView mil_view = 10;
   */
  milView?: MilView;

  /**
   * A standardized representation of the entity.
   *
   * @generated from field: anduril.entitymanager.v1.Ontology ontology = 11;
   */
  ontology?: Ontology;

  /**
   * Details an entity's available sensors.
   *
   * @generated from field: anduril.entitymanager.v1.Sensors sensors = 20;
   */
  sensors?: Sensors;

  /**
   * Details an entity's available payloads.
   *
   * @generated from field: anduril.entitymanager.v1.Payloads payloads = 21;
   */
  payloads?: Payloads;

  /**
   * Details the entity's power source.
   *
   * @generated from field: anduril.entitymanager.v1.PowerState power_state = 30;
   */
  powerState?: PowerState;

  /**
   * The primary data source provenance for this entity.
   *
   * @generated from field: anduril.entitymanager.v1.Provenance provenance = 12;
   */
  provenance?: Provenance;

  /**
   * Provenance of override data.
   *
   * @generated from field: anduril.entitymanager.v1.Overrides overrides = 13;
   */
  overrides?: Overrides;

  /**
   * Describes an entity's specific characteristics and the operations that can be performed on the entity.
   * For example, "simulated" informs the operator that the entity is from a simulation, and "deletable"
   * informs the operator (and system) that the delete operation is valid against the entity.
   *
   * @generated from field: anduril.entitymanager.v1.Indicators indicators = 14;
   */
  indicators?: Indicators;

  /**
   * The prioritization associated with an entity, such as if it's a threat or a high-value target.
   *
   * @generated from field: anduril.entitymanager.v1.TargetPriority target_priority = 22;
   */
  targetPriority?: TargetPriority;

  /**
   * Describes an entity's signal characteristics, primarily used when an entity is a signal of interest.
   *
   * @generated from field: anduril.entitymanager.v1.Signal signal = 25;
   */
  signal?: Signal;

  /**
   * A message describing any transponder codes associated with Mode 1, 2, 3, 4, 5, S interrogations. These are related to ADS-B modes.
   *
   * @generated from field: anduril.entitymanager.v1.TransponderCodes transponder_codes = 26;
   */
  transponderCodes?: TransponderCodes;

  /**
   * Describes an entity's security classification levels at an overall classification level and on a per
   * field level.
   *
   * @generated from field: anduril.entitymanager.v1.Classification data_classification = 29;
   */
  dataClassification?: Classification;

  /**
   * A catalog of tasks that can be performed by an entity.
   *
   * @generated from field: anduril.tasks.v2.TaskCatalog task_catalog = 31;
   */
  taskCatalog?: TaskCatalog;

  /**
   * The relationships between this entity and other entities in the battlespace.
   *
   * @generated from field: anduril.entitymanager.v1.Relationships relationships = 33;
   */
  relationships?: Relationships;

  /**
   * Visual details associated with the display of an entity in the client.
   *
   * @generated from field: anduril.entitymanager.v1.VisualDetails visual_details = 34;
   */
  visualDetails?: VisualDetails;

  /**
   * Physical dimensions of the entity.
   *
   * @generated from field: anduril.entitymanager.v1.Dimensions dimensions = 36;
   */
  dimensions?: Dimensions;

  /**
   * Additional information about an entity's route.
   *
   * @generated from field: anduril.entitymanager.v1.RouteDetails route_details = 37;
   */
  routeDetails?: RouteDetails;

  /**
   * Schedules associated with this entity.
   *
   * @generated from field: anduril.entitymanager.v1.Schedules schedules = 38;
   */
  schedules?: Schedules;

  /**
   * Health metrics or connection status reported by the entity.
   *
   * @generated from field: anduril.entitymanager.v1.Health health = 39;
   */
  health?: Health;

  /**
   * Details for the group associated with this entity.
   *
   * @generated from field: anduril.entitymanager.v1.GroupDetails group_details = 40;
   */
  groupDetails?: GroupDetails;

  /**
   * Contains relevant supply information for the entity, such as munitions and fuel.
   *
   * @generated from field: anduril.entitymanager.v1.Supplies supplies = 42;
   */
  supplies?: Supplies;

  /**
   * Orbit information for space objects.
   *
   * @generated from field: anduril.entitymanager.v1.Orbit orbit = 46;
   */
  orbit?: Orbit;
};

/**
 * Describes the message anduril.entitymanager.v1.Entity.
 * Use `create(EntitySchema)` to create a new message.
 */
export declare const EntitySchema: GenMessage<Entity>;

/**
 * Contains status of entities.
 *
 * @generated from message anduril.entitymanager.v1.Status
 */
export declare type Status = Message<"anduril.entitymanager.v1.Status"> & {
  /**
   * A string that describes the activity that the entity is performing.
   * Examples include "RECONNAISSANCE", "INTERDICTION", "ELECTRONIC WARFARE (EW)", "RETURN TO BASE (RTB)", "PREPARING
   * FOR LAUNCH".
   *
   * @generated from field: string platform_activity = 1;
   */
  platformActivity: string;

  /**
   * A human-readable string that describes the role the entity is currently performing. E.g. "Team Member", "Commander".
   *
   * @generated from field: string role = 2;
   */
  role: string;
};

/**
 * Describes the message anduril.entitymanager.v1.Status.
 * Use `create(StatusSchema)` to create a new message.
 */
export declare const StatusSchema: GenMessage<Status>;

/**
 * Available for any Entities with alternate ids in other systems.
 *
 * @generated from message anduril.entitymanager.v1.Aliases
 */
export declare type Aliases = Message<"anduril.entitymanager.v1.Aliases"> & {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.AlternateId alternate_ids = 1;
   */
  alternateIds: AlternateId[];

  /**
   * The best available version of the entity's display name.
   *
   * @generated from field: string name = 2;
   */
  name: string;
};

/**
 * Describes the message anduril.entitymanager.v1.Aliases.
 * Use `create(AliasesSchema)` to create a new message.
 */
export declare const AliasesSchema: GenMessage<Aliases>;

/**
 * Available for Entities that are tracked.
 *
 * @generated from message anduril.entitymanager.v1.Tracked
 */
export declare type Tracked = Message<"anduril.entitymanager.v1.Tracked"> & {
  /**
   * Quality score, 0-15, nil if none
   *
   * @generated from field: google.protobuf.Int32Value track_quality_wrapper = 2;
   */
  trackQualityWrapper?: number;

  /**
   * Sensor hits aggregation on the tracked entity.
   *
   * @generated from field: google.protobuf.Int32Value sensor_hits = 3;
   */
  sensorHits?: number;

  /**
   * Estimated number of objects or units that are represented by this entity. Known as Strength in certain contexts (Link16)
   * if UpperBound == LowerBound; (strength = LowerBound)
   * If both UpperBound and LowerBound are defined; strength is between LowerBound and UpperBound (represented as string "Strength: 4-5")
   * If UpperBound is defined only (LowerBound unset), Strength ≤ UpperBound
   * If LowerBound is defined only (UpperBound unset), LowerBound ≤ Strength
   * 0 indicates unset.
   *
   * @generated from field: anduril.entitymanager.v1.UInt32Range number_of_objects = 4;
   */
  numberOfObjects?: UInt32Range;

  /**
   * The radar cross section (RCS) is a measure of how detectable an object is by radar. A large RCS indicates an object is more easily
   * detected. The unit is “decibels per square meter,” or dBsm
   *
   * @generated from field: google.protobuf.DoubleValue radar_cross_section = 6;
   */
  radarCrossSection?: number;

  /**
   * Timestamp of the latest tracking measurement for this entity.
   *
   * @generated from field: google.protobuf.Timestamp last_measurement_time = 7;
   */
  lastMeasurementTime?: Timestamp;

  /**
   * The relative position of a track with respect to the entity that is tracking it. Used for tracks that do not yet have a 3D position.
   * For this entity (A), being tracked by some entity (B), this LineOfBearing would express a ray from B to A.
   *
   * @generated from field: anduril.entitymanager.v1.LineOfBearing line_of_bearing = 9;
   */
  lineOfBearing?: LineOfBearing;
};

/**
 * Describes the message anduril.entitymanager.v1.Tracked.
 * Use `create(TrackedSchema)` to create a new message.
 */
export declare const TrackedSchema: GenMessage<Tracked>;

/**
 * Data provenance.
 *
 * @generated from message anduril.entitymanager.v1.Provenance
 */
export declare type Provenance = Message<"anduril.entitymanager.v1.Provenance"> & {
  /**
   * Name of the integration that produced this entity
   *
   * @generated from field: string integration_name = 5;
   */
  integrationName: string;

  /**
   * Source data type of this entity. Examples: ADSB, Link16, etc.
   *
   * @generated from field: string data_type = 6;
   */
  dataType: string;

  /**
   * Enum defining the source TO BE DEPRECATED
   *
   * @generated from field: anduril.entitymanager.v1.Source source = 1;
   */
  source: Source;

  /**
   * An ID that allows an element from a source to be uniquely identified
   *
   * @generated from field: string source_id = 3;
   */
  sourceId: string;

  /**
   * The time, according to the source system, that the data in the entity was last modified. Generally, this should
   * be the time that the source-reported time of validity of the data in the entity. This field must be
   * updated with every change to the entity or else Entity Manager will discard the update.
   *
   * @generated from field: google.protobuf.Timestamp source_update_time = 2;
   */
  sourceUpdateTime?: Timestamp;

  /**
   * Description of the modification source. In the case of a user this is the email address.
   *
   * @generated from field: string source_description = 4;
   */
  sourceDescription: string;
};

/**
 * Describes the message anduril.entitymanager.v1.Provenance.
 * Use `create(ProvenanceSchema)` to create a new message.
 */
export declare const ProvenanceSchema: GenMessage<Provenance>;

/**
 * Indicators to describe entity to consumers.
 *
 * @generated from message anduril.entitymanager.v1.Indicators
 */
export declare type Indicators = Message<"anduril.entitymanager.v1.Indicators"> & {
  /**
   * @generated from field: google.protobuf.BoolValue simulated = 1;
   */
  simulated?: boolean;

  /**
   * @generated from field: google.protobuf.BoolValue exercise = 2;
   */
  exercise?: boolean;

  /**
   * @generated from field: google.protobuf.BoolValue emergency = 3;
   */
  emergency?: boolean;

  /**
   * @generated from field: google.protobuf.BoolValue c2 = 4;
   */
  c2?: boolean;

  /**
   * Indicates the Entity should be egressed to external sources.
   * Integrations choose how the egressing happens (e.g. if an Entity needs fuzzing).
   *
   * @generated from field: google.protobuf.BoolValue egressable = 6;
   */
  egressable?: boolean;

  /**
   * A signal of arbitrary importance such that the entity should be globally marked for all users
   *
   * @generated from field: google.protobuf.BoolValue starred = 7;
   */
  starred?: boolean;
};

/**
 * Describes the message anduril.entitymanager.v1.Indicators.
 * Use `create(IndicatorsSchema)` to create a new message.
 */
export declare const IndicatorsSchema: GenMessage<Indicators>;

/**
 * Metadata about entity overrides present.
 *
 * @generated from message anduril.entitymanager.v1.Overrides
 */
export declare type Overrides = Message<"anduril.entitymanager.v1.Overrides"> & {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.Override override = 2;
   */
  override: Override[];
};

/**
 * Describes the message anduril.entitymanager.v1.Overrides.
 * Use `create(OverridesSchema)` to create a new message.
 */
export declare const OverridesSchema: GenMessage<Overrides>;

/**
 * Details about an override. Last write wins.
 *
 * @generated from message anduril.entitymanager.v1.Override
 */
export declare type Override = Message<"anduril.entitymanager.v1.Override"> & {
  /**
   * override request id for an override request
   *
   * @generated from field: string request_id = 1;
   */
  requestId: string;

  /**
   * proto field path which is the string representation of a field.
   * example: correlated.primary_entity_id would be primary_entity_id in correlated component
   *
   * @generated from field: string field_path = 2;
   */
  fieldPath: string;

  /**
   * new field value corresponding to field path. In the shape of an empty entity with only the changed value.
   * example: entity: { mil_view: { disposition: Disposition_DISPOSITION_HOSTILE } }
   *
   * @generated from field: anduril.entitymanager.v1.Entity masked_field_value = 3;
   */
  maskedFieldValue?: Entity;

  /**
   * status of the override
   *
   * @generated from field: anduril.entitymanager.v1.OverrideStatus status = 4;
   */
  status: OverrideStatus;

  /**
   * @generated from field: anduril.entitymanager.v1.Provenance provenance = 5;
   */
  provenance?: Provenance;

  /**
   * The type of the override, defined by the stage of the entity lifecycle that the entity was in when the override
   * was requested.
   *
   * @generated from field: anduril.entitymanager.v1.OverrideType type = 6;
   */
  type: OverrideType;

  /**
   * Timestamp of the override request. The timestamp is generated by the Entity Manager instance that receives the request.
   *
   * @generated from field: google.protobuf.Timestamp request_timestamp = 7;
   */
  requestTimestamp?: Timestamp;
};

/**
 * Describes the message anduril.entitymanager.v1.Override.
 * Use `create(OverrideSchema)` to create a new message.
 */
export declare const OverrideSchema: GenMessage<Override>;

/**
 * An alternate id for an Entity.
 *
 * @generated from message anduril.entitymanager.v1.AlternateId
 */
export declare type AlternateId = Message<"anduril.entitymanager.v1.AlternateId"> & {
  /**
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * @generated from field: anduril.entitymanager.v1.AltIdType type = 3;
   */
  type: AltIdType;
};

/**
 * Describes the message anduril.entitymanager.v1.AlternateId.
 * Use `create(AlternateIdSchema)` to create a new message.
 */
export declare const AlternateIdSchema: GenMessage<AlternateId>;

/**
 * Visual details associated with the display of an entity in the client.
 *
 * @generated from message anduril.entitymanager.v1.VisualDetails
 */
export declare type VisualDetails = Message<"anduril.entitymanager.v1.VisualDetails"> & {
  /**
   * The range rings to display around an entity.
   *
   * @generated from field: anduril.entitymanager.v1.RangeRings range_rings = 1;
   */
  rangeRings?: RangeRings;
};

/**
 * Describes the message anduril.entitymanager.v1.VisualDetails.
 * Use `create(VisualDetailsSchema)` to create a new message.
 */
export declare const VisualDetailsSchema: GenMessage<VisualDetails>;

/**
 * Range rings allow visual assessment of map distance at varying zoom levels.
 *
 * @generated from message anduril.entitymanager.v1.RangeRings
 */
export declare type RangeRings = Message<"anduril.entitymanager.v1.RangeRings"> & {
  /**
   * The minimum range ring distance, specified in meters.
   *
   * @generated from field: google.protobuf.DoubleValue min_distance_m = 1;
   */
  minDistanceM?: number;

  /**
   * The maximum range ring distance, specified in meters.
   *
   * @generated from field: google.protobuf.DoubleValue max_distance_m = 2;
   */
  maxDistanceM?: number;

  /**
   * The count of range rings.
   *
   * @generated from field: uint32 ring_count = 3;
   */
  ringCount: number;

  /**
   * The color of range rings, specified in hex string.
   *
   * @generated from field: anduril.type.Color ring_line_color = 4;
   */
  ringLineColor?: Color;
};

/**
 * Describes the message anduril.entitymanager.v1.RangeRings.
 * Use `create(RangeRingsSchema)` to create a new message.
 */
export declare const RangeRingsSchema: GenMessage<RangeRings>;

/**
 * Available for Entities that are a correlated (N to 1) set of entities. This will be present on
 * each entity in the set.
 *
 * @generated from message anduril.entitymanager.v1.Correlation
 */
export declare type Correlation = Message<"anduril.entitymanager.v1.Correlation"> & {
  /**
   * If an entity is correlated, it is either the primary or a secondary.
   *
   * @generated from oneof anduril.entitymanager.v1.Correlation.correlation
   */
  correlation: {
    /**
     * This entity is the primary of a correlation meaning that it serves as the representative
     * entity of the correlation set.
     *
     * @generated from field: anduril.entitymanager.v1.PrimaryCorrelation primary = 1;
     */
    value: PrimaryCorrelation;
    case: "primary";
  } | {
    /**
     * This entity is a secondary of a correlation meaning that it will be represented by the
     * primary of the correlation set.
     *
     * @generated from field: anduril.entitymanager.v1.SecondaryCorrelation secondary = 2;
     */
    value: SecondaryCorrelation;
    case: "secondary";
  } | { case: undefined; value?: undefined };

  /**
   * If present, this entity was explicitly decorrelated from one or more entities.
   * An entity can be both correlated and decorrelated as long as they are disjoint sets.
   * An example would be if a user in the UI decides that two tracks are not actually the
   * same despite an automatic correlator having correlated them. The user would then
   * decorrelate the two tracks and this decorrelation would be preserved preventing the
   * correlator from re-correlating them at a later time.
   *
   * @generated from field: anduril.entitymanager.v1.Decorrelation decorrelation = 3;
   */
  decorrelation?: Decorrelation;
};

/**
 * Describes the message anduril.entitymanager.v1.Correlation.
 * Use `create(CorrelationSchema)` to create a new message.
 */
export declare const CorrelationSchema: GenMessage<Correlation>;

/**
 * @generated from message anduril.entitymanager.v1.PrimaryCorrelation
 */
export declare type PrimaryCorrelation = Message<"anduril.entitymanager.v1.PrimaryCorrelation"> & {
  /**
   * The secondary entity IDs part of this correlation.
   *
   * @generated from field: repeated string secondary_entity_ids = 1;
   */
  secondaryEntityIds: string[];
};

/**
 * Describes the message anduril.entitymanager.v1.PrimaryCorrelation.
 * Use `create(PrimaryCorrelationSchema)` to create a new message.
 */
export declare const PrimaryCorrelationSchema: GenMessage<PrimaryCorrelation>;

/**
 * @generated from message anduril.entitymanager.v1.SecondaryCorrelation
 */
export declare type SecondaryCorrelation = Message<"anduril.entitymanager.v1.SecondaryCorrelation"> & {
  /**
   * The primary of this correlation.
   *
   * @generated from field: string primary_entity_id = 1;
   */
  primaryEntityId: string;

  /**
   * Metadata about the correlation.
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationMetadata metadata = 2;
   */
  metadata?: CorrelationMetadata;
};

/**
 * Describes the message anduril.entitymanager.v1.SecondaryCorrelation.
 * Use `create(SecondaryCorrelationSchema)` to create a new message.
 */
export declare const SecondaryCorrelationSchema: GenMessage<SecondaryCorrelation>;

/**
 * @generated from message anduril.entitymanager.v1.Decorrelation
 */
export declare type Decorrelation = Message<"anduril.entitymanager.v1.Decorrelation"> & {
  /**
   * This will be specified if this entity was decorrelated against all other entities.
   *
   * @generated from field: anduril.entitymanager.v1.DecorrelatedAll all = 1;
   */
  all?: DecorrelatedAll;

  /**
   * A list of decorrelated entities that have been explicitly decorrelated against this entity
   * which prevents lower precedence correlations from overriding it in the future.
   * For example, if an operator in the UI decorrelated tracks A and B, any automated
   * correlators would be unable to correlate them since manual decorrelations have
   * higher precedence than automatic ones. Precedence is determined by both correlation
   * type and replication mode.
   *
   * @generated from field: repeated anduril.entitymanager.v1.DecorrelatedSingle decorrelated_entities = 2;
   */
  decorrelatedEntities: DecorrelatedSingle[];
};

/**
 * Describes the message anduril.entitymanager.v1.Decorrelation.
 * Use `create(DecorrelationSchema)` to create a new message.
 */
export declare const DecorrelationSchema: GenMessage<Decorrelation>;

/**
 * @generated from message anduril.entitymanager.v1.DecorrelatedAll
 */
export declare type DecorrelatedAll = Message<"anduril.entitymanager.v1.DecorrelatedAll"> & {
  /**
   * Metadata about the decorrelation.
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationMetadata metadata = 1;
   */
  metadata?: CorrelationMetadata;
};

/**
 * Describes the message anduril.entitymanager.v1.DecorrelatedAll.
 * Use `create(DecorrelatedAllSchema)` to create a new message.
 */
export declare const DecorrelatedAllSchema: GenMessage<DecorrelatedAll>;

/**
 * @generated from message anduril.entitymanager.v1.DecorrelatedSingle
 */
export declare type DecorrelatedSingle = Message<"anduril.entitymanager.v1.DecorrelatedSingle"> & {
  /**
   * The entity that was decorrelated against.
   *
   * @generated from field: string entity_id = 1;
   */
  entityId: string;

  /**
   * Metadata about the decorrelation.
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationMetadata metadata = 2;
   */
  metadata?: CorrelationMetadata;
};

/**
 * Describes the message anduril.entitymanager.v1.DecorrelatedSingle.
 * Use `create(DecorrelatedSingleSchema)` to create a new message.
 */
export declare const DecorrelatedSingleSchema: GenMessage<DecorrelatedSingle>;

/**
 * @generated from message anduril.entitymanager.v1.CorrelationMetadata
 */
export declare type CorrelationMetadata = Message<"anduril.entitymanager.v1.CorrelationMetadata"> & {
  /**
   * Who or what added this entity to the (de)correlation.
   *
   * @generated from field: anduril.entitymanager.v1.Provenance provenance = 1;
   */
  provenance?: Provenance;

  /**
   * Indicates how the correlation will be distributed. Because a correlation is composed of
   * multiple secondaries, each of which may have been correlated with different replication
   * modes, the distribution of the correlation is composed of distributions of the individual
   * entities within the correlation set.
   * For example, if there are two secondary entities A and B correlated against a primary C,
   * with A having been correlated globally and B having been correlated locally, then the
   * correlation set that is distributed globally than what is known locally in the node.
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationReplicationMode replication_mode = 2;
   */
  replicationMode: CorrelationReplicationMode;

  /**
   * What type of (de)correlation was this entity added with.
   *
   * @generated from field: anduril.entitymanager.v1.CorrelationType type = 3;
   */
  type: CorrelationType;
};

/**
 * Describes the message anduril.entitymanager.v1.CorrelationMetadata.
 * Use `create(CorrelationMetadataSchema)` to create a new message.
 */
export declare const CorrelationMetadataSchema: GenMessage<CorrelationMetadata>;

/**
 * The type of correlation indicating how it was made.
 *
 * @generated from enum anduril.entitymanager.v1.CorrelationType
 */
export enum CorrelationType {
  /**
   * @generated from enum value: CORRELATION_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * The correlation was made manually by a human.
   * Manual is higher precedence than automated assuming the same replication mode.
   *
   * @generated from enum value: CORRELATION_TYPE_MANUAL = 1;
   */
  MANUAL = 1,

  /**
   * The correlation was automatically made by a service or some other automated process.
   * Automated is lower precedence than manual assuming the same replication mode.
   *
   * @generated from enum value: CORRELATION_TYPE_AUTOMATED = 2;
   */
  AUTOMATED = 2,
}

/**
 * Describes the enum anduril.entitymanager.v1.CorrelationType.
 */
export declare const CorrelationTypeSchema: GenEnum<CorrelationType>;

/**
 * The replication mode of the correlation indicating how the correlation will be replication to
 * other nodes in the mesh.
 *
 * @generated from enum anduril.entitymanager.v1.CorrelationReplicationMode
 */
export enum CorrelationReplicationMode {
  /**
   * @generated from enum value: CORRELATION_REPLICATION_MODE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * The correlation is local only to the originating node and will not be distributed to other
   * nodes in the mesh. In the case of conflicts, this correlation will override ones coming from
   * other nodes. Local is always higher precedence than global regardless of the correlation type.
   *
   * @generated from enum value: CORRELATION_REPLICATION_MODE_LOCAL = 1;
   */
  LOCAL = 1,

  /**
   * The correlation is distributed globally across all nodes in the mesh. Because an entity can
   * only be part of one correlation, this is based on last-write-wins semantics, however, the
   * correlation will also be stored locally in the originating node preventing any overrides.
   * Global is always lower precedence than local regardless of the correlation type.
   *
   * @generated from enum value: CORRELATION_REPLICATION_MODE_GLOBAL = 2;
   */
  GLOBAL = 2,
}

/**
 * Describes the enum anduril.entitymanager.v1.CorrelationReplicationMode.
 */
export declare const CorrelationReplicationModeSchema: GenEnum<CorrelationReplicationMode>;

