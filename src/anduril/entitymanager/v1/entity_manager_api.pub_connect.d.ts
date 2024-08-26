// @generated by protoc-gen-connect-es v1.4.0 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/entity_manager_api.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteEntityRequest, DeleteEntityResponse, GetEntityRequest, GetEntityResponse, OverrideEntityRequest, OverrideEntityResponse, PublishEntitiesRequest, PublishEntitiesResponse, PutEntityRequest, PutEntityResponse, RelateEntityRequest, RelateEntityResponse, RemoveEntityOverrideRequest, RemoveEntityOverrideResponse, StreamEntityComponentsRequest, StreamEntityComponentsResponse, UnrelateEntityRequest, UnrelateEntityResponse } from "./entity_manager_api.pub_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The EntityManager provides a UI centric data model for understanding the entities in a battle space.
 *
 * Every object in a battle space is represented as an "Entity". Each Entity is essentially an ID, with a life cycle,
 * and a collection of data components. Each data component is a separate protobuf message definition.
 *
 * EntityManager provides a way to query the currently live set of entities within a set of filter constraints,
 * as well as a limited set of management APIs to change the grouping or relationships between entities.
 *
 * @generated from service anduril.entitymanager.v1.EntityManagerAPI
 */
export declare const EntityManagerAPI: {
  readonly typeName: "anduril.entitymanager.v1.EntityManagerAPI",
  readonly methods: {
    /**
     * Get a entity based on an entityId.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.GetEntity
     */
    readonly getEntity: {
      readonly name: "GetEntity",
      readonly I: typeof GetEntityRequest,
      readonly O: typeof GetEntityResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns a stream of entity with specified components populated.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.StreamEntityComponents
     */
    readonly streamEntityComponents: {
      readonly name: "StreamEntityComponents",
      readonly I: typeof StreamEntityComponentsRequest,
      readonly O: typeof StreamEntityComponentsResponse,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * Create or Update an Entity. This should be used by low update rate situations where Entity Manager is
     * the source of truth, rather than an aggregator. The canonical example is a manually created entity.
     * Entities created in this fashion are stored as a Base entity, overrides on top are still possible.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.PutEntity
     */
    readonly putEntity: {
      readonly name: "PutEntity",
      readonly I: typeof PutEntityRequest,
      readonly O: typeof PutEntityResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create or Update one or more Entities. This should be used during high update rate situations where the originator
     * is both the aggregator and source of truth for the published entities, and the originator does not have
     * the ability to directly publish to Flux.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.PublishEntities
     */
    readonly publishEntities: {
      readonly name: "PublishEntities",
      readonly I: typeof PublishEntitiesRequest,
      readonly O: typeof PublishEntitiesResponse,
      readonly kind: MethodKind.ClientStreaming,
    },
    /**
     * Override an Entity Component. Only fields marked with overridable can be overwritten.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.OverrideEntity
     */
    readonly overrideEntity: {
      readonly name: "OverrideEntity",
      readonly I: typeof OverrideEntityRequest,
      readonly O: typeof OverrideEntityResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Remove an override for an Entity component.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.RemoveEntityOverride
     */
    readonly removeEntityOverride: {
      readonly name: "RemoveEntityOverride",
      readonly I: typeof RemoveEntityOverrideRequest,
      readonly O: typeof RemoveEntityOverrideResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Delete an Entity - only works on entities created by PutEntity.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.DeleteEntity
     */
    readonly deleteEntity: {
      readonly name: "DeleteEntity",
      readonly I: typeof DeleteEntityRequest,
      readonly O: typeof DeleteEntityResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Creates or Updates relationships on an Entity. All relationships that are being added in the request
     * succeed or fail as a batch (i.e. if any one relationship is invalid, the request will fail).
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.RelateEntity
     */
    readonly relateEntity: {
      readonly name: "RelateEntity",
      readonly I: typeof RelateEntityRequest,
      readonly O: typeof RelateEntityResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Deletes relationships on an Entity.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.UnrelateEntity
     */
    readonly unrelateEntity: {
      readonly name: "UnrelateEntity",
      readonly I: typeof UnrelateEntityRequest,
      readonly O: typeof UnrelateEntityResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

