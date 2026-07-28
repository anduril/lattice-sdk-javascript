//  This file was auto-generated from our API Definition.

import { OAuthAuthProvider } from "./auth/OAuthAuthProvider.js";
import { mergeHeaders } from "./core/headers.js";
import * as core from "./core/index.js";
import * as environments from "./environments.js";

export type AuthOption =
    | false
    | core.AuthProvider["getAuthRequest"]
    | core.AuthProvider
    | OAuthAuthProvider.AuthOptions;

export type BaseClientOptions = {
    environment?: core.Supplier<environments.LatticeEnvironment | string>;
    /** Specify a custom URL to connect the client to. */
    baseUrl?: core.Supplier<string>;
    /** Defaults to "example.developer.anduril.com". */
    server?: string;
    /** Additional headers to include in requests. */
    headers?: Record<string, string | core.Supplier<string | null | undefined> | null | undefined>;
    /** The default maximum time to wait for a response in seconds. */
    timeoutInSeconds?: number;
    /** The default number of times to retry the request. Defaults to 2. */
    maxRetries?: number;
    /** Provide a custom fetch implementation. Useful for platforms that don't have a built-in fetch or need a custom implementation. */
    fetch?: typeof fetch;
    /** Configure logging for the client. */
    logging?: core.logging.LogConfig | core.logging.Logger;
    /** Default options for SSE stream reconnection behavior. Has no effect on non-resumable endpoints. */
    stream?: { reconnectionEnabled?: boolean; maxReconnectionAttempts?: number };
    /** Override auth. Pass false to disable, a function returning auth headers, an AuthProvider, or auth options. */
    auth?: AuthOption;
} & OAuthAuthProvider.AuthOptions;

export interface BaseRequestOptions {
    /** The maximum time to wait for a response in seconds. */
    timeoutInSeconds?: number;
    /** The number of times to retry the request. Defaults to 2. */
    maxRetries?: number;
    /** A hook to abort the request. */
    abortSignal?: AbortSignal;
    /** Additional query string parameters to include in the request. */
    queryParams?: Record<string, unknown>;
    /** A dictionary containing additional parameters to spread into the request's body. */
    additionalBodyParameters?: Record<string, unknown>;
    /** Additional headers to include in the request. */
    headers?: Record<string, string | core.Supplier<string | null | undefined> | null | undefined>;
    /** Options for SSE stream reconnection behavior. Has no effect on non-resumable endpoints. */
    stream?: { reconnectionEnabled?: boolean; maxReconnectionAttempts?: number };
}

export type NormalizedClientOptions<T extends BaseClientOptions = BaseClientOptions> = T & {
    logging: core.logging.Logger;
    authProvider?: core.AuthProvider;
};

export type NormalizedClientOptionsWithAuth<T extends BaseClientOptions = BaseClientOptions> =
    NormalizedClientOptions<T> & {
        authProvider: core.AuthProvider;
    };

export function normalizeClientOptions<T extends BaseClientOptions = BaseClientOptions>(
    options: T,
): NormalizedClientOptions<T> {
    const headers = mergeHeaders(
        {
            "X-Fern-Language": "JavaScript",
            "X-Fern-SDK-Name": "@anduril-industries/lattice-sdk",
            "X-Fern-SDK-Version": "4.24.1",
            "User-Agent": "@anduril-industries/lattice-sdk/4.24.1",
            "X-Fern-Runtime": core.RUNTIME.type,
            "X-Fern-Runtime-Version": core.RUNTIME.version,
        },
        options?.headers,
    );

    let baseUrl = options?.baseUrl;
    if (options?.server != null) {
        const _server = options?.server ?? "example.developer.anduril.com";
        if (baseUrl == null) {
            const _environmentUrls = new Map<unknown, string>([
                [environments.LatticeEnvironment.Default, `https://${_server}`],
            ]);
            baseUrl = _environmentUrls.get(options?.environment) ?? `https://${_server}`;
        }
    }

    return {
        ...options,
        baseUrl,
        logging: core.logging.createLogger(options?.logging),
        headers,
    } as NormalizedClientOptions<T>;
}

export function normalizeClientOptionsWithAuth<T extends BaseClientOptions = BaseClientOptions>(
    options: T,
): NormalizedClientOptionsWithAuth<T> {
    const normalized = normalizeClientOptions(options) as NormalizedClientOptionsWithAuth<T>;

    if (options.auth === false) {
        normalized.authProvider = new core.NoOpAuthProvider();
        return normalized;
    }
    if (options.auth != null) {
        if (typeof options.auth === "function") {
            normalized.authProvider = { getAuthRequest: options.auth };
            return normalized;
        }
        if (core.isAuthProvider(options.auth)) {
            normalized.authProvider = options.auth;
            return normalized;
        }
        Object.assign(normalized, options.auth);
    }

    const normalizedWithNoOpAuthProvider = withNoOpAuthProvider(normalized);
    normalized.authProvider ??= OAuthAuthProvider.createInstance(normalizedWithNoOpAuthProvider);
    return normalized;
}

function withNoOpAuthProvider<T extends BaseClientOptions = BaseClientOptions>(
    options: NormalizedClientOptions<T>,
): NormalizedClientOptionsWithAuth<T> {
    return {
        ...options,
        authProvider: new core.NoOpAuthProvider(),
    };
}
