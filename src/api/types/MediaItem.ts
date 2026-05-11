//  This file was auto-generated from our API Definition.

export interface MediaItem {
    /** A unique identifier for this mediaItem. */
    itemIdentifier?: string | undefined;
    /** The type of media for this item. */
    type?: MediaItem.Type | undefined;
    /** The path, relative to the environment base URL, where media related to an entity can be accessed */
    relativePath?: string | undefined;
}

export namespace MediaItem {
    /** The type of media for this item. */
    export const Type = {
        MediaTypeInvalid: "MEDIA_TYPE_INVALID",
        MediaTypeImage: "MEDIA_TYPE_IMAGE",
        MediaTypeVideo: "MEDIA_TYPE_VIDEO",
    } as const;
    export type Type = (typeof Type)[keyof typeof Type];
}
