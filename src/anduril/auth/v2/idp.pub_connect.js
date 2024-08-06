// @generated by protoc-gen-connect-es v1.4.0 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/auth/v2/idp.pub.proto (package anduril.auth.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { GetSSOURLRequest, GetSSOURLResponse } = require("./idp.pub_pb.js");
const { MethodKind } = require("@bufbuild/protobuf");

/**
 * @generated from service anduril.auth.v2.Idps
 */
const Idps = {
  typeName: "anduril.auth.v2.Idps",
  methods: {
    /**
     * GetSSOURL returns an identity provider's single sign on (SSO) URL which a user should be redirected to
     * authenticate. If no IDP can be located for the email's domain then a NotFound error is returned.
     *
     * @generated from rpc anduril.auth.v2.Idps.GetSSOURL
     */
    getSSOURL: {
      name: "GetSSOURL",
      I: GetSSOURLRequest,
      O: GetSSOURLResponse,
      kind: MethodKind.Unary,
    },
  }
};


exports.Idps = Idps;