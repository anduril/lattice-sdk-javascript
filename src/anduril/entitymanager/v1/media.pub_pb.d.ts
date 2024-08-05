// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/entitymanager/v1/media.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file anduril/entitymanager/v1/media.pub.proto.
 */
export declare const file_anduril_entitymanager_v1_media_pub: GenFile;

/**
 * Media associated with an entity.
 *
 * @generated from message anduril.entitymanager.v1.Media
 */
export declare type Media = Message<"anduril.entitymanager.v1.Media"> & {
  /**
   * @generated from field: repeated anduril.entitymanager.v1.MediaItem media = 1;
   */
  media: MediaItem[];
};

/**
 * Describes the message anduril.entitymanager.v1.Media.
 * Use `create(MediaSchema)` to create a new message.
 */
export declare const MediaSchema: GenMessage<Media>;

/**
 * @generated from message anduril.entitymanager.v1.MediaItem
 */
export declare type MediaItem = Message<"anduril.entitymanager.v1.MediaItem"> & {
  /**
   * To Be Deprecated, use relative_path.
   * The url where the media related to an entity can be accessed
   *
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * @generated from field: anduril.entitymanager.v1.MediaType type = 2;
   */
  type: MediaType;

  /**
   * The relative path where the media related to an entity can be accessed when used to query against a blobs service
   * node.
   *
   * @generated from field: string relative_path = 3;
   */
  relativePath: string;
};

/**
 * Describes the message anduril.entitymanager.v1.MediaItem.
 * Use `create(MediaItemSchema)` to create a new message.
 */
export declare const MediaItemSchema: GenMessage<MediaItem>;

/**
 * @generated from enum anduril.entitymanager.v1.MediaType
 */
export enum MediaType {
  /**
   * @generated from enum value: MEDIA_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: MEDIA_TYPE_THUMBNAIL = 1;
   */
  THUMBNAIL = 1,

  /**
   * @generated from enum value: MEDIA_TYPE_IMAGE = 2;
   */
  IMAGE = 2,

  /**
   * @generated from enum value: MEDIA_TYPE_VIDEO = 3;
   */
  VIDEO = 3,

  /**
   * @generated from enum value: MEDIA_TYPE_SLIPPY_TILES = 4;
   */
  SLIPPY_TILES = 4,
}

/**
 * Describes the enum anduril.entitymanager.v1.MediaType.
 */
export declare const MediaTypeSchema: GenEnum<MediaType>;
