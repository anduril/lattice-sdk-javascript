//  This file was auto-generated from our API Definition.

import type * as Lattice from "../index.js";

/**
 * A component that describes an entity's security classification levels.
 */
export interface Classification {
    /**
     * The default classification information which should be assumed to apply to everything in
     *  the entity unless a specific field level classification is present.
     */
    default?: Lattice.ClassificationInformation | undefined;
    /**
     * The set of individual field classification information which should always precedence
     *  over the default classification information.
     */
    fields?: Lattice.FieldClassificationInformation[] | undefined;
}
