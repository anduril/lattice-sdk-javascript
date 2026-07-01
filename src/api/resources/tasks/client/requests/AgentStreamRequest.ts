//  This file was auto-generated from our API Definition.

import * as Lattice from "../../../../index.js";

/**
 * @example
 *     {}
 */
export interface AgentStreamRequest {
    /** The selector criteria to determine which tasks the agent receives. */
    agentSelector?: Lattice.EntityIdsSelector;
    /** The time interval, in milliseconds, that determines the frequency at which to send heartbeat events. Defaults to 30000 (30 seconds). */
    heartbeatIntervalMs?: number;
}
