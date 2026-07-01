//  This file was auto-generated from our API Definition.

import * as Lattice from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface EntityStreamRequest {
    /** at what interval to send heartbeat events, defaults to 30s. */
    heartbeatIntervalMS?: number;
    /** only stream pre-existing entities in the environment and then close the connection, defaults to false. */
    preExistingOnly?: boolean;
    /** list of components to include, leave empty to include all components. */
    componentsToInclude?: string[];
    /**
     * Optional root of a Statement filter expression tree. If provided, only entities matching
     * the filter are streamed. Applied dynamically: an entity that begins matching is delivered
     * as a CREATE, and one that stops matching is delivered as a DELETE. Mirrors the filter on
     * the gRPC StreamEntityComponents endpoint.
     */
    filter?: Lattice.Statement;
}
