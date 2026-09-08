//  This file was auto-generated from our API Definition.

import type * as core from "../../../../core/index.js";
import * as errors from "../../../../errors/index.js";
import type * as Lattice from "../../../index.js";

export class ServiceUnavailableError extends errors.LatticeError {
    public declare readonly body: Lattice.GoogleRpcStatus;

    constructor(body: Lattice.GoogleRpcStatus, rawResponse?: core.RawResponse) {
        super({
            message: "ServiceUnavailableError",
            statusCode: 503,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }

        this.name = "ServiceUnavailableError";
    }
}
