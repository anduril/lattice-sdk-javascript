//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * The entity object represents a single known object within the Lattice operational environment. It contains
 *  all data associated with the entity, such as its name, ID, and other relevant components.
 */
export interface Entity {
    /**
     * A Globally Unique Identifier (GUID) for your entity. This is a required
     *  field.
     */
    entityId?: string | undefined;
    /**
     * A human-readable entity description that's helpful for debugging purposes and human
     *  traceability. If this field is empty, the Entity Manager API generates one for you.
     */
    description?: string | undefined;
    /**
     * Indicates the entity is active and should have a lifecycle state of CREATE or UPDATE.
     *  Set this field to true when publishing an entity.
     */
    isLive?: boolean | undefined;
    /**
     * The time when the entity was first known to the entity producer. If this field is empty, the Entity Manager API uses the
     *  current timestamp of when the entity is first received.
     *  For example, when a drone is first powered on, it might report its startup time as the created time.
     *  The timestamp doesn't change for the lifetime of an entity.
     */
    createdTime?: string | undefined;
    /**
     * Future time that expires an entity and updates the is_live flag.
     *  For entities that are constantly updating, the expiry time also updates.
     *  In some cases, this may differ from is_live.
     *  Example: Entities with tasks exported to an external system must remain
     *  active even after they expire.
     *  This field is required when publishing a prepopulated entity.
     *  The expiry time must be in the future, but less than 30 days from the current time.
     */
    expiryTime?: string | undefined;
    /**
     * Use noExpiry only when the entity contains information that should be available to other
     *  tasks or integrations beyond its immediate operational context. For example, use noExpiry
     *  for long-living geographical entities that maintain persistent relevance across multiple
     *  operations or tasks.
     */
    noExpiry?: boolean | undefined;
    /** Human-readable descriptions of what the entity is currently doing. */
    status?: Lattice.Status | undefined;
    /** Geospatial data related to the entity, including its position, kinematics, and orientation. */
    location?: Lattice.Location | undefined;
    /** Indicates uncertainty of the entity's position and kinematics. */
    locationUncertainty?: Lattice.LocationUncertainty | undefined;
    /** Geospatial representation of the entity, including entities that cover an area rather than a fixed point. */
    geoShape?: Lattice.GeoShape | undefined;
    /** Additional details on what the geospatial area or point represents, along with visual display details. */
    geoDetails?: Lattice.GeoDetails | undefined;
    /** Entity name displayed in the Lattice UI side panel. Also includes identifiers that other systems can use to reference the same entity. */
    aliases?: Lattice.Aliases | undefined;
    /** If this entity is tracked by another entity, this component contains data related to how it's being tracked. */
    tracked?: Lattice.Tracked | undefined;
    /** If this entity has been correlated or decorrelated to another one, this component contains information on the correlation or decorrelation. */
    correlation?: Lattice.Correlation | undefined;
    /** View of the entity. */
    milView?: Lattice.MilView | undefined;
    /** Ontology defines an entity's categorization in Lattice, and improves data retrieval and integration. Builds a standardized representation of the entity. */
    ontology?: Lattice.Ontology | undefined;
    /** Details an entity's available sensors. */
    sensors?: Lattice.Sensors | undefined;
    /** Details an entity's available payloads. */
    payloads?: Lattice.Payloads | undefined;
    /** Details the entity's power source. */
    powerState?: Lattice.PowerState | undefined;
    /** The primary data source provenance for this entity. */
    provenance?: Lattice.Provenance | undefined;
    /** Provenance of override data. */
    overrides?: Lattice.Overrides | undefined;
    /**
     * Describes an entity's specific characteristics and the operations that can be performed on the entity.
     *  For example, "simulated" informs the operator that the entity is from a simulation, and "deletable"
     *  informs the operator (and system) that the delete operation is valid against the entity.
     */
    indicators?: Lattice.Indicators | undefined;
    /** The prioritization associated with an entity, such as if it's a threat or a high-value target. */
    targetPriority?: Lattice.TargetPriority | undefined;
    /** Describes an entity's signal characteristics, primarily used when an entity is a signal of interest. */
    signal?: Lattice.Signal | undefined;
    /** A message describing any transponder codes associated with Mode 1, 2, 3, 4, 5, S interrogations. These are related to ADS-B modes. */
    transponderCodes?: Lattice.TransponderCodes | undefined;
    /**
     * Describes an entity's security classification levels at an overall classification level and on a per
     *  field level.
     */
    dataClassification?: Lattice.Classification | undefined;
    /** A catalog of tasks that can be performed by an entity. */
    taskCatalog?: Lattice.TaskCatalog | undefined;
    /** Media associated with an entity, such as videos, images, or thumbnails. */
    media?: Lattice.Media | undefined;
    /** The relationships between this entity and other entities in the common operational picture (COP). */
    relationships?: Lattice.Relationships | undefined;
    /** Visual details associated with the display of an entity in the client. */
    visualDetails?: Lattice.VisualDetails | undefined;
    /** Physical dimensions of the entity. */
    dimensions?: Lattice.Dimensions | undefined;
    /** Additional information about an entity's route. */
    routeDetails?: Lattice.RouteDetails | undefined;
    /** Schedules associated with this entity. */
    schedules?: Lattice.Schedules | undefined;
    /** Health metrics or connection status reported by the entity. */
    health?: Lattice.Health | undefined;
    /** Details for the group associated with this entity. */
    groupDetails?: Lattice.GroupDetails | undefined;
    /** Contains relevant supply information for the entity, such as fuel. */
    supplies?: Lattice.Supplies | undefined;
    /** Orbit information for space objects. */
    orbit?: Lattice.Orbit | undefined;
    /** Symbology/iconography for the entity respecting an existing standard. */
    symbology?: Lattice.Symbology | undefined;
}
