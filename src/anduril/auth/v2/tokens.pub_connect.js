// @generated by protoc-gen-connect-es v1.4.0
// @generated from file anduril/auth/v2/tokens.pub.proto (package anduril.auth.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { RefreshOidcTokensRequest, RefreshOidcTokensResponse } from "./tokens.pub_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service anduril.auth.v2.Tokens
 */
export const Tokens = {
  typeName: "anduril.auth.v2.Tokens",
  methods: {
    /**
     * RefreshSessionToken attempts to retrieve new OIDC tokens from a user's refresh token. May also return a new
     * refresh_token with which future RefreshOidcTokens requests should use
     *
     * @generated from rpc anduril.auth.v2.Tokens.RefreshOidcTokens
     */
    refreshOidcTokens: {
      name: "RefreshOidcTokens",
      I: RefreshOidcTokensRequest,
      O: RefreshOidcTokensResponse,
      kind: MethodKind.Unary,
    },
  }
};

