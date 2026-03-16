//  This file was auto-generated from our API Definition.

import type * as core from "../../core/index.js";
import * as errors from "../../errors/index.js";
import type * as Lattice from "../index.js";

export class InsufficientStorageError extends errors.LatticeError {
    constructor(body: Lattice.object.Error_, rawResponse?: core.RawResponse) {
        super({
            message: "InsufficientStorageError",
            statusCode: 507,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }

        this.name = this.constructor.name;
    }
}
