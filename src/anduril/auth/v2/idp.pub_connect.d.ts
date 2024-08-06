// @generated by protoc-gen-connect-es v1.4.0 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/auth/v2/idp.pub.proto (package anduril.auth.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetSSOURLRequest, GetSSOURLResponse } from "./idp.pub_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service anduril.auth.v2.Idps
 */
export declare const Idps: {
  readonly typeName: "anduril.auth.v2.Idps",
  readonly methods: {
    /**
     * GetSSOURL returns an identity provider's single sign on (SSO) URL which a user should be redirected to
     * authenticate. If no IDP can be located for the email's domain then a NotFound error is returned.
     *
     * @generated from rpc anduril.auth.v2.Idps.GetSSOURL
     */
    readonly getSSOURL: {
      readonly name: "GetSSOURL",
      readonly I: typeof GetSSOURLRequest,
      readonly O: typeof GetSSOURLResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

