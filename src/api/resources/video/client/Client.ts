//  This file was auto-generated from our API Definition.

import type { BaseClientOptions } from "../../../../BaseClient.js";
import { type NormalizedClientOptionsWithAuth, normalizeClientOptionsWithAuth } from "../../../../BaseClient.js";
import { VideoClient as VideoClient_ } from "../resources/video/client/Client.js";

export declare namespace VideoClient {
    export type Options = BaseClientOptions;
}

export class VideoClient {
    protected readonly _options: NormalizedClientOptionsWithAuth<VideoClient.Options>;
    protected _video: VideoClient_ | undefined;

    constructor(options: VideoClient.Options) {
        this._options = normalizeClientOptionsWithAuth(options);
    }

    public get video(): VideoClient_ {
        return (this._video ??= new VideoClient_(this._options));
    }
}
