//  This file was auto-generated from our API Definition.

export class LatticeTimeoutError extends Error {
    public readonly cause?: unknown;

    constructor(message: string, opts?: { cause?: unknown }) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }

        this.name = this.constructor.name;
        if (opts?.cause != null) {
            this.cause = opts.cause;
        }
    }
}
