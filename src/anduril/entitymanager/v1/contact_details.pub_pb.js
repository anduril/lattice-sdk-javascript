// @generated by protoc-gen-es v1.7.2
// @generated from file anduril/entitymanager/v1/contact_details.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Contains details on how to make contact with an entity.
 *
 * @generated from message anduril.entitymanager.v1.ContactDetails
 */
export const ContactDetails = proto3.makeMessageType(
  "anduril.entitymanager.v1.ContactDetails",
  () => [
    { no: 1, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

