//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

export interface DecorrelatedSingle {
    /** The entity that was decorrelated against. */
    entityId?: string | undefined;
    /** Metadata about the decorrelation. */
    metadata?: Lattice.CorrelationMetadata | undefined;
}
