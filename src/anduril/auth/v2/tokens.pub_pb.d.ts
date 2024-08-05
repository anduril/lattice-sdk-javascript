// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/auth/v2/tokens.pub.proto (package anduril.auth.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Duration } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file anduril/auth/v2/tokens.pub.proto.
 */
export declare const file_anduril_auth_v2_tokens_pub: GenFile;

/**
 * @generated from message anduril.auth.v2.RefreshOidcTokensRequest
 */
export declare type RefreshOidcTokensRequest = Message<"anduril.auth.v2.RefreshOidcTokensRequest"> & {
  /**
   * @generated from field: string refresh_token = 1;
   */
  refreshToken: string;
};

/**
 * Describes the message anduril.auth.v2.RefreshOidcTokensRequest.
 * Use `create(RefreshOidcTokensRequestSchema)` to create a new message.
 */
export declare const RefreshOidcTokensRequestSchema: GenMessage<RefreshOidcTokensRequest>;

/**
 * @generated from message anduril.auth.v2.RefreshOidcTokensResponse
 */
export declare type RefreshOidcTokensResponse = Message<"anduril.auth.v2.RefreshOidcTokensResponse"> & {
  /**
   * The length of time that the token is valid for. User agents must refresh the user's token within this time
   * period.
   *
   * @generated from field: google.protobuf.Duration token_validity_duration = 1;
   */
  tokenValidityDuration?: Duration;

  /**
   * @generated from field: string refresh_token = 2;
   */
  refreshToken: string;

  /**
   * @generated from field: string id_token = 3;
   */
  idToken: string;
};

/**
 * Describes the message anduril.auth.v2.RefreshOidcTokensResponse.
 * Use `create(RefreshOidcTokensResponseSchema)` to create a new message.
 */
export declare const RefreshOidcTokensResponseSchema: GenMessage<RefreshOidcTokensResponse>;

/**
 * @generated from service anduril.auth.v2.Tokens
 */
export declare const Tokens: GenService<{
  /**
   * RefreshSessionToken attempts to retrieve new OIDC tokens from a user's refresh token. May also return a new
   * refresh_token with which future RefreshOidcTokens requests should use
   *
   * @generated from rpc anduril.auth.v2.Tokens.RefreshOidcTokens
   */
  refreshOidcTokens: {
    methodKind: "unary";
    input: typeof RefreshOidcTokensRequestSchema;
    output: typeof RefreshOidcTokensResponseSchema;
  },
}>;
