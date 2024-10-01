// @generated by protoc-gen-connect-es v1.4.0 with parameter "js_import_style=legacy_commonjs"
// @generated from file anduril/entitymanager/v1/entity_manager_api.pub.proto (package anduril.entitymanager.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const { GetEntityRequest, GetEntityResponse, OverrideEntityRequest, OverrideEntityResponse, PublishEntitiesRequest, PublishEntitiesResponse, PublishEntityRequest, PublishEntityResponse, RemoveEntityOverrideRequest, RemoveEntityOverrideResponse, StreamEntityComponentsRequest, StreamEntityComponentsResponse } = require("./entity_manager_api.pub_pb.js");
const { MethodKind } = require("@bufbuild/protobuf");

/**
 * The Entity Manager provides a UI centric data model for understanding the entities in a battle space.
 *
 * Every object in a battle space is represented as an "Entity". Each Entity is essentially an ID, with a life cycle,
 * and a collection of data components. Each data component is a separate protobuf message definition.
 *
 * EntityManager provides a way to query the currently live set of entities within a set of filter constraints,
 * as well as a limited set of management APIs to change the grouping or relationships between entities.
 *
 * @generated from service anduril.entitymanager.v1.EntityManagerAPI
 */
const EntityManagerAPI = {
  typeName: "anduril.entitymanager.v1.EntityManagerAPI",
  methods: {
    /**
     * Unary RPC to publish an entity for ingest into Entity Manager. This is the preferred RPC to integrate entities
     * and should be used by most integrations to publish high- or low-update rate entities. Entities created with this
     * method are "owned" by the originator: other sources, such as the UI, may not edit or delete these entities.
     * Entities are validated at RPC call time and an error is returned if the entity is invalid.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.PublishEntity
     */
    publishEntity: {
      name: "PublishEntity",
      I: PublishEntityRequest,
      O: PublishEntityResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Create or Update one or more Entities. Prefer PublishEntity instead. The same caveats of PublishEntity apply.
     * This RPC does not return error messages for invalid entities or any other feedback from the server.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.PublishEntities
     */
    publishEntities: {
      name: "PublishEntities",
      I: PublishEntitiesRequest,
      O: PublishEntitiesResponse,
      kind: MethodKind.ClientStreaming,
    },
    /**
     * Get a entity based on an entityId.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.GetEntity
     */
    getEntity: {
      name: "GetEntity",
      I: GetEntityRequest,
      O: GetEntityResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Override an Entity Component. An override is a definitive change to entity data. Any authorized user of service
     * can override overridable components on any entity. Only fields marked with overridable can be overridden.
     * When setting an override, the user or service setting the override is asserting that they are certain of the change
     * and the truth behind it.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.OverrideEntity
     */
    overrideEntity: {
      name: "OverrideEntity",
      I: OverrideEntityRequest,
      O: OverrideEntityResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Remove an override for an Entity component.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.RemoveEntityOverride
     */
    removeEntityOverride: {
      name: "RemoveEntityOverride",
      I: RemoveEntityOverrideRequest,
      O: RemoveEntityOverrideResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Returns a stream of entity with specified components populated.
     *
     * @generated from rpc anduril.entitymanager.v1.EntityManagerAPI.StreamEntityComponents
     */
    streamEntityComponents: {
      name: "StreamEntityComponents",
      I: StreamEntityComponentsRequest,
      O: StreamEntityComponentsResponse,
      kind: MethodKind.ServerStreaming,
    },
  }
};


exports.EntityManagerAPI = EntityManagerAPI;
