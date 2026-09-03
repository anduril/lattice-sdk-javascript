//  This file was auto-generated from our API Definition.

import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../../../BaseClient.js";
import { mergeHeaders } from "../../../../../../core/headers.js";
import * as core from "../../../../../../core/index.js";
import { mergeAdditionalBodyParameters } from "../../../../../../core/requestBody.js";
import * as environments from "../../../../../../environments.js";
import { handleNonStatusCodeError } from "../../../../../../errors/handleNonStatusCodeError.js";
import * as errors from "../../../../../../errors/index.js";
import * as Lattice from "../../../../../index.js";

export declare namespace VideoClient {
    export type Options = BaseClientOptions;

    export interface RequestOptions extends BaseRequestOptions {}
}

export class VideoClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VideoClient.Options>;

    constructor(options: VideoClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    /**
     * Returns a list of active egress stream objects.
     *  Results are ordered by egress stream create time. If the
     *  egress backend is unreachable, the listed streams might be stale or degraded.
     *
     * @param {Lattice.video.ListEgressStreamsRequest} request
     * @param {VideoClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Lattice.video.BadRequestError}
     * @throws {@link Lattice.video.UnauthorizedError}
     * @throws {@link Lattice.video.ForbiddenError}
     * @throws {@link Lattice.video.NotFoundError}
     * @throws {@link Lattice.video.ServiceUnavailableError}
     * @throws {@link errors.LatticeError}
     * @throws {@link errors.LatticeTimeoutError}
     *
     * @example
     *     await client.video.video.listEgressStreams()
     */
    public listEgressStreams(
        request: Lattice.video.ListEgressStreamsRequest = {},
        requestOptions?: VideoClient.RequestOptions,
    ): core.HttpResponsePromise<Lattice.video.ListEgressStreamsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listEgressStreams(request, requestOptions));
    }

    private async __listEgressStreams(
        request: Lattice.video.ListEgressStreamsRequest = {},
        requestOptions?: VideoClient.RequestOptions,
    ): Promise<core.WithRawResponse<Lattice.video.ListEgressStreamsResponse>> {
        const { pageSize, pageToken } = request;
        const _queryParams: Record<string, unknown> = {
            pageSize,
            pageToken,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LatticeEnvironment.Default,
                "api/v1/video/egress_streams",
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Lattice.video.ListEgressStreamsResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Lattice.video.BadRequestError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Lattice.video.UnauthorizedError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Lattice.video.ForbiddenError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Lattice.video.NotFoundError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 503:
                    throw new Lattice.video.ServiceUnavailableError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.LatticeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/api/v1/video/egress_streams");
    }

    /**
     * Creates an egress stream that publishes a live stream to a downstream consumer.
     *  A stream in `STREAM_STATUS_UNAVAILABLE` is rejected as not-live.
     *
     * @param {Lattice.video.CreateEgressStreamRequest} request
     * @param {VideoClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Lattice.video.BadRequestError}
     * @throws {@link Lattice.video.UnauthorizedError}
     * @throws {@link Lattice.video.ForbiddenError}
     * @throws {@link Lattice.video.NotFoundError}
     * @throws {@link Lattice.video.ConflictError}
     * @throws {@link Lattice.video.TooManyRequestsError}
     * @throws {@link Lattice.video.ServiceUnavailableError}
     * @throws {@link errors.LatticeError}
     * @throws {@link errors.LatticeTimeoutError}
     *
     * @example
     *     await client.video.video.createEgressStream()
     */
    public createEgressStream(
        request: Lattice.video.CreateEgressStreamRequest = {},
        requestOptions?: VideoClient.RequestOptions,
    ): core.HttpResponsePromise<Lattice.video.CreateEgressStreamResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createEgressStream(request, requestOptions));
    }

    private async __createEgressStream(
        request: Lattice.video.CreateEgressStreamRequest = {},
        requestOptions?: VideoClient.RequestOptions,
    ): Promise<core.WithRawResponse<Lattice.video.CreateEgressStreamResponse>> {
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LatticeEnvironment.Default,
                "api/v1/video/egress_streams",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(request, requestOptions?.additionalBodyParameters),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Lattice.video.CreateEgressStreamResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Lattice.video.BadRequestError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Lattice.video.UnauthorizedError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Lattice.video.ForbiddenError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Lattice.video.NotFoundError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 409:
                    throw new Lattice.video.ConflictError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 429:
                    throw new Lattice.video.TooManyRequestsError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 503:
                    throw new Lattice.video.ServiceUnavailableError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.LatticeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "POST", "/api/v1/video/egress_streams");
    }

    /**
     * Retrieves an egress stream object and its associated metadata.
     *
     * @param {Lattice.video.GetEgressStreamRequest} request
     * @param {VideoClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Lattice.video.BadRequestError}
     * @throws {@link Lattice.video.UnauthorizedError}
     * @throws {@link Lattice.video.ForbiddenError}
     * @throws {@link Lattice.video.NotFoundError}
     * @throws {@link Lattice.video.ServiceUnavailableError}
     * @throws {@link errors.LatticeError}
     * @throws {@link errors.LatticeTimeoutError}
     *
     * @example
     *     await client.video.video.getEgressStream({
     *         egressId: "egressId"
     *     })
     */
    public getEgressStream(
        request: Lattice.video.GetEgressStreamRequest,
        requestOptions?: VideoClient.RequestOptions,
    ): core.HttpResponsePromise<Lattice.video.GetEgressStreamResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getEgressStream(request, requestOptions));
    }

    private async __getEgressStream(
        request: Lattice.video.GetEgressStreamRequest,
        requestOptions?: VideoClient.RequestOptions,
    ): Promise<core.WithRawResponse<Lattice.video.GetEgressStreamResponse>> {
        const { egressId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LatticeEnvironment.Default,
                `api/v1/video/egress_streams/${core.url.encodePathParam(egressId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Lattice.video.GetEgressStreamResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Lattice.video.BadRequestError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Lattice.video.UnauthorizedError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Lattice.video.ForbiddenError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Lattice.video.NotFoundError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 503:
                    throw new Lattice.video.ServiceUnavailableError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.LatticeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/api/v1/video/egress_streams/{egressId}",
        );
    }

    /**
     * Deletes the egress stream for a live stream. Returns `NOT_FOUND` if no matching active
     *  egress stream exists.
     *
     * @param {Lattice.video.DeleteEgressStreamRequest} request
     * @param {VideoClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Lattice.video.BadRequestError}
     * @throws {@link Lattice.video.UnauthorizedError}
     * @throws {@link Lattice.video.ForbiddenError}
     * @throws {@link Lattice.video.NotFoundError}
     * @throws {@link Lattice.video.ServiceUnavailableError}
     * @throws {@link errors.LatticeError}
     * @throws {@link errors.LatticeTimeoutError}
     *
     * @example
     *     await client.video.video.deleteEgressStream({
     *         egressId: "egressId"
     *     })
     */
    public deleteEgressStream(
        request: Lattice.video.DeleteEgressStreamRequest,
        requestOptions?: VideoClient.RequestOptions,
    ): core.HttpResponsePromise<Lattice.video.DeleteEgressStreamResponse> {
        return core.HttpResponsePromise.fromPromise(this.__deleteEgressStream(request, requestOptions));
    }

    private async __deleteEgressStream(
        request: Lattice.video.DeleteEgressStreamRequest,
        requestOptions?: VideoClient.RequestOptions,
    ): Promise<core.WithRawResponse<Lattice.video.DeleteEgressStreamResponse>> {
        const { egressId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LatticeEnvironment.Default,
                `api/v1/video/egress_streams/${core.url.encodePathParam(egressId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Lattice.video.DeleteEgressStreamResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Lattice.video.BadRequestError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Lattice.video.UnauthorizedError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Lattice.video.ForbiddenError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Lattice.video.NotFoundError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 503:
                    throw new Lattice.video.ServiceUnavailableError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.LatticeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/api/v1/video/egress_streams/{egressId}",
        );
    }

    /**
     * Returns a list of top level ingress stream objects, including ingress streams and internal
     *  Anduril streams. Will only return active streams.
     *  Results are ordered by ingress stream create time.
     *
     * @param {Lattice.video.ListIngressStreamsRequest} request
     * @param {VideoClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Lattice.video.BadRequestError}
     * @throws {@link Lattice.video.UnauthorizedError}
     * @throws {@link Lattice.video.ForbiddenError}
     * @throws {@link Lattice.video.NotFoundError}
     * @throws {@link Lattice.video.InternalServerError}
     * @throws {@link Lattice.video.ServiceUnavailableError}
     * @throws {@link errors.LatticeError}
     * @throws {@link errors.LatticeTimeoutError}
     *
     * @example
     *     await client.video.video.listIngressStreams()
     */
    public listIngressStreams(
        request: Lattice.video.ListIngressStreamsRequest = {},
        requestOptions?: VideoClient.RequestOptions,
    ): core.HttpResponsePromise<Lattice.video.ListIngressStreamsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__listIngressStreams(request, requestOptions));
    }

    private async __listIngressStreams(
        request: Lattice.video.ListIngressStreamsRequest = {},
        requestOptions?: VideoClient.RequestOptions,
    ): Promise<core.WithRawResponse<Lattice.video.ListIngressStreamsResponse>> {
        const { pageSize, pageToken } = request;
        const _queryParams: Record<string, unknown> = {
            pageSize,
            pageToken,
        };
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LatticeEnvironment.Default,
                "api/v1/video/ingress_streams",
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url
                .queryBuilder()
                .addMany(_queryParams)
                .mergeAdditional(requestOptions?.queryParams)
                .build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Lattice.video.ListIngressStreamsResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Lattice.video.BadRequestError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Lattice.video.UnauthorizedError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Lattice.video.ForbiddenError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Lattice.video.NotFoundError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 500:
                    throw new Lattice.video.InternalServerError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 503:
                    throw new Lattice.video.ServiceUnavailableError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.LatticeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(_response.error, _response.rawResponse, "GET", "/api/v1/video/ingress_streams");
    }

    /**
     * Creates a video ingress stream, returning metadata that you can use to stream live video to
     *  Lattice. Exactly one of `rtsp` or `srt` must be set on the request.
     *
     * @param {Lattice.video.CreateIngressStreamRequest} request
     * @param {VideoClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Lattice.video.BadRequestError}
     * @throws {@link Lattice.video.UnauthorizedError}
     * @throws {@link Lattice.video.ForbiddenError}
     * @throws {@link Lattice.video.NotFoundError}
     * @throws {@link Lattice.video.ConflictError}
     * @throws {@link Lattice.video.TooManyRequestsError}
     * @throws {@link Lattice.video.ServiceUnavailableError}
     * @throws {@link errors.LatticeError}
     * @throws {@link errors.LatticeTimeoutError}
     *
     * @example
     *     await client.video.video.createIngressStream()
     */
    public createIngressStream(
        request: Lattice.video.CreateIngressStreamRequest = {},
        requestOptions?: VideoClient.RequestOptions,
    ): core.HttpResponsePromise<Lattice.video.CreateIngressStreamResponse> {
        return core.HttpResponsePromise.fromPromise(this.__createIngressStream(request, requestOptions));
    }

    private async __createIngressStream(
        request: Lattice.video.CreateIngressStreamRequest = {},
        requestOptions?: VideoClient.RequestOptions,
    ): Promise<core.WithRawResponse<Lattice.video.CreateIngressStreamResponse>> {
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LatticeEnvironment.Default,
                "api/v1/video/ingress_streams",
            ),
            method: "POST",
            headers: _headers,
            contentType: "application/json",
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            requestType: "json",
            body: mergeAdditionalBodyParameters(request, requestOptions?.additionalBodyParameters),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Lattice.video.CreateIngressStreamResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Lattice.video.BadRequestError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Lattice.video.UnauthorizedError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Lattice.video.ForbiddenError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Lattice.video.NotFoundError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 409:
                    throw new Lattice.video.ConflictError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 429:
                    throw new Lattice.video.TooManyRequestsError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 503:
                    throw new Lattice.video.ServiceUnavailableError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.LatticeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "POST",
            "/api/v1/video/ingress_streams",
        );
    }

    /**
     * Retrieves a top level ingress stream object and its associated metadata. This includes
     *  ingress streams and internal Anduril streams.
     *
     * @param {Lattice.video.GetIngressStreamRequest} request
     * @param {VideoClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Lattice.video.BadRequestError}
     * @throws {@link Lattice.video.UnauthorizedError}
     * @throws {@link Lattice.video.ForbiddenError}
     * @throws {@link Lattice.video.NotFoundError}
     * @throws {@link Lattice.video.ServiceUnavailableError}
     * @throws {@link errors.LatticeError}
     * @throws {@link errors.LatticeTimeoutError}
     *
     * @example
     *     await client.video.video.getIngressStream({
     *         ingressId: "ingressId"
     *     })
     */
    public getIngressStream(
        request: Lattice.video.GetIngressStreamRequest,
        requestOptions?: VideoClient.RequestOptions,
    ): core.HttpResponsePromise<Lattice.video.GetIngressStreamResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getIngressStream(request, requestOptions));
    }

    private async __getIngressStream(
        request: Lattice.video.GetIngressStreamRequest,
        requestOptions?: VideoClient.RequestOptions,
    ): Promise<core.WithRawResponse<Lattice.video.GetIngressStreamResponse>> {
        const { ingressId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LatticeEnvironment.Default,
                `api/v1/video/ingress_streams/${core.url.encodePathParam(ingressId)}`,
            ),
            method: "GET",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Lattice.video.GetIngressStreamResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Lattice.video.BadRequestError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Lattice.video.UnauthorizedError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Lattice.video.ForbiddenError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Lattice.video.NotFoundError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 503:
                    throw new Lattice.video.ServiceUnavailableError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.LatticeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "GET",
            "/api/v1/video/ingress_streams/{ingressId}",
        );
    }

    /**
     * Deletes a video ingress stream and transitions the stream to `STREAM_STATUS_ARCHIVED`.
     *  Any egress streams consuming this stream will be stopped automatically.
     *
     * @param {Lattice.video.DeleteIngressStreamRequest} request
     * @param {VideoClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Lattice.video.BadRequestError}
     * @throws {@link Lattice.video.UnauthorizedError}
     * @throws {@link Lattice.video.ForbiddenError}
     * @throws {@link Lattice.video.NotFoundError}
     * @throws {@link Lattice.video.ServiceUnavailableError}
     * @throws {@link errors.LatticeError}
     * @throws {@link errors.LatticeTimeoutError}
     *
     * @example
     *     await client.video.video.deleteIngressStream({
     *         ingressId: "ingressId"
     *     })
     */
    public deleteIngressStream(
        request: Lattice.video.DeleteIngressStreamRequest,
        requestOptions?: VideoClient.RequestOptions,
    ): core.HttpResponsePromise<Lattice.video.DeleteIngressStreamResponse> {
        return core.HttpResponsePromise.fromPromise(this.__deleteIngressStream(request, requestOptions));
    }

    private async __deleteIngressStream(
        request: Lattice.video.DeleteIngressStreamRequest,
        requestOptions?: VideoClient.RequestOptions,
    ): Promise<core.WithRawResponse<Lattice.video.DeleteIngressStreamResponse>> {
        const { ingressId } = request;
        const _authRequest: core.AuthRequest = await this._options.authProvider.getAuthRequest();
        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            _authRequest.headers,
            this._options?.headers,
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LatticeEnvironment.Default,
                `api/v1/video/ingress_streams/${core.url.encodePathParam(ingressId)}`,
            ),
            method: "DELETE",
            headers: _headers,
            queryString: core.url.queryBuilder().mergeAdditional(requestOptions?.queryParams).build(),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
            fetchFn: this._options?.fetch,
            logging: this._options.logging,
        });
        if (_response.ok) {
            return {
                data: _response.body as Lattice.video.DeleteIngressStreamResponse,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Lattice.video.BadRequestError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 401:
                    throw new Lattice.video.UnauthorizedError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 403:
                    throw new Lattice.video.ForbiddenError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 404:
                    throw new Lattice.video.NotFoundError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                case 503:
                    throw new Lattice.video.ServiceUnavailableError(
                        _response.error.body as Lattice.video.GoogleRpcStatus,
                        _response.rawResponse,
                    );
                default:
                    throw new errors.LatticeError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        return handleNonStatusCodeError(
            _response.error,
            _response.rawResponse,
            "DELETE",
            "/api/v1/video/ingress_streams/{ingressId}",
        );
    }
}
