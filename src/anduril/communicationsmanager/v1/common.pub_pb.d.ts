// @generated by protoc-gen-es v2.0.0
// @generated from file anduril/communicationsmanager/v1/common.pub.proto (package anduril.communicationsmanager.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { EntityIntegrationRuleDetails } from "./entity.pub_pb";
import type { Statement } from "../../entitymanager/v1/filter.pub_pb";
import type { DynamicStatement } from "../../entitymanager/v1/filter_dynamic.pub_pb";
import type { Statement as Statement$1 } from "../../blobs/v1/filter.pub_pb";
import type { CdsDestination } from "./cross_domain.pub_pb";

/**
 * Describes the file anduril/communicationsmanager/v1/common.pub.proto.
 */
export declare const file_anduril_communicationsmanager_v1_common_pub: GenFile;

/**
 * Event representing a type of distribution rule change.
 *
 * @generated from message anduril.communicationsmanager.v1.DistributionRuleEvent
 */
export declare type DistributionRuleEvent = Message<"anduril.communicationsmanager.v1.DistributionRuleEvent"> & {
  /**
   * The type of distribution rule event.
   *
   * @generated from field: anduril.communicationsmanager.v1.EventType event_type = 1;
   */
  eventType: EventType;

  /**
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: Timestamp;

  /**
   * @generated from field: anduril.communicationsmanager.v1.DistributionRule distribution_rule = 3;
   */
  distributionRule?: DistributionRule;
};

/**
 * Describes the message anduril.communicationsmanager.v1.DistributionRuleEvent.
 * Use `create(DistributionRuleEventSchema)` to create a new message.
 */
export declare const DistributionRuleEventSchema: GenMessage<DistributionRuleEvent>;

/**
 * @generated from message anduril.communicationsmanager.v1.RuleEvent
 */
export declare type RuleEvent = Message<"anduril.communicationsmanager.v1.RuleEvent"> & {
  /**
   * @generated from field: anduril.communicationsmanager.v1.EventType event_type = 1;
   */
  eventType: EventType;

  /**
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: Timestamp;

  /**
   * @generated from field: anduril.communicationsmanager.v1.Rule rule = 3;
   */
  rule?: Rule;
};

/**
 * Describes the message anduril.communicationsmanager.v1.RuleEvent.
 * Use `create(RuleEventSchema)` to create a new message.
 */
export declare const RuleEventSchema: GenMessage<RuleEvent>;

/**
 * @generated from message anduril.communicationsmanager.v1.Rule
 */
export declare type Rule = Message<"anduril.communicationsmanager.v1.Rule"> & {
  /**
   * Uniquely identifies a rule across hosts. If unset, the operation is
   * treated as a creation operation by the implementing service.
   *
   * @generated from field: string rule_id = 1;
   */
  ruleId: string;

  /**
   * The version of this rule.
   *
   * @generated from field: int64 version_num = 2;
   */
  versionNum: bigint;

  /**
   * Whether or not this rule is enabled.
   *
   * @generated from field: bool enabled = 3;
   */
  enabled: boolean;

  /**
   * Human readable name associated with the rule.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * Type of rule and details regarding that rule.
   *
   * @generated from oneof anduril.communicationsmanager.v1.Rule.type
   */
  type: {
    /**
     * @generated from field: anduril.communicationsmanager.v1.DistributionRule distribution_rule = 5;
     */
    value: DistributionRule;
    case: "distributionRule";
  } | {
    /**
     * @generated from field: anduril.communicationsmanager.v1.IntegrationRule integration_rule = 6;
     */
    value: IntegrationRule;
    case: "integrationRule";
  } | {
    /**
     * @generated from field: anduril.communicationsmanager.v1.CrossDomainRule cross_domain_rule = 9;
     */
    value: CrossDomainRule;
    case: "crossDomainRule";
  } | { case: undefined; value?: undefined };

  /**
   * Email of the user who last modified the rule.
   *
   * @generated from field: string last_modified_by_user = 7;
   */
  lastModifiedByUser: string;

  /**
   * Unix epoch timestamp in milliseconds of when the rule was last modified.
   *
   * @generated from field: int64 last_modified_time_unix_epoch_ms = 8;
   */
  lastModifiedTimeUnixEpochMs: bigint;
};

/**
 * Describes the message anduril.communicationsmanager.v1.Rule.
 * Use `create(RuleSchema)` to create a new message.
 */
export declare const RuleSchema: GenMessage<Rule>;

/**
 * @generated from message anduril.communicationsmanager.v1.IntegrationRule
 */
export declare type IntegrationRule = Message<"anduril.communicationsmanager.v1.IntegrationRule"> & {
  /**
   * Uniquely identifies an integration on a node.
   *
   * @generated from field: string integration_name = 1;
   */
  integrationName: string;

  /**
   * Producer hostId, equivalent to the rule's source.
   *
   * @generated from field: string host_id = 2;
   */
  hostId: string;

  /**
   * @generated from oneof anduril.communicationsmanager.v1.IntegrationRule.details
   */
  details: {
    /**
     * @generated from field: anduril.communicationsmanager.v1.EntityIntegrationRuleDetails entity_integration_rule_details = 3;
     */
    value: EntityIntegrationRuleDetails;
    case: "entityIntegrationRuleDetails";
  } | {
    /**
     * @generated from field: anduril.communicationsmanager.v1.BlobDistributionRuleDetails blob_integration_rule_details = 4;
     */
    value: BlobDistributionRuleDetails;
    case: "blobIntegrationRuleDetails";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.communicationsmanager.v1.IntegrationRule.
 * Use `create(IntegrationRuleSchema)` to create a new message.
 */
export declare const IntegrationRuleSchema: GenMessage<IntegrationRule>;

/**
 * Distribution rules are conjunctive (AND) when applied at the producer.
 * This implies that given a primitive datum, if the datum satisfies a
 * producer rule AND a consumer rule, it will be broadcast to the network.
 *
 * @generated from message anduril.communicationsmanager.v1.DistributionRule
 */
export declare type DistributionRule = Message<"anduril.communicationsmanager.v1.DistributionRule"> & {
  /**
   * Uniquely identifies a rule across hosts. If unset, the operation is
   * treated as a creation operation by the implementing service.
   *
   * TO BE DEPRECATED
   *
   * @generated from field: string rule_id = 1;
   */
  ruleId: string;

  /**
   * Deprecated: use version_num instead.
   *
   * @generated from field: string version = 2 [deprecated = true];
   * @deprecated
   */
  version: string;

  /**
   * Whether or not this rule is enabled.
   *
   * TO BE DEPRECATED
   *
   * @generated from field: bool enabled = 3;
   */
  enabled: boolean;

  /**
   * Deprecated: use sources instead.
   *
   * @generated from field: anduril.communicationsmanager.v1.Source source = 4 [deprecated = true];
   * @deprecated
   */
  source?: Source;

  /**
   * Used by consumer nodes to identify the source of the data to which they
   * are subscribing. In the case of an 'all' source, only a single entry should be present.
   *
   * @generated from field: repeated anduril.communicationsmanager.v1.Source sources = 8 [deprecated = true];
   * @deprecated
   */
  sources: Source[];

  /**
   * Used by producers to direct publish traffic. If unset, publish for this
   * rule may be directed to all consumers.
   *
   * @generated from field: anduril.communicationsmanager.v1.Destination destination = 5 [deprecated = true];
   * @deprecated
   */
  destination?: Destination;

  /**
   * The details which inform how this primitive data is distributed.
   *
   * @generated from oneof anduril.communicationsmanager.v1.DistributionRule.details
   */
  details: {
    /**
     * Provides the fine-grained details controlling how entities are distributed.
     *
     * @generated from field: anduril.communicationsmanager.v1.EntityDistributionRuleDetails entity_details = 6;
     */
    value: EntityDistributionRuleDetails;
    case: "entityDetails";
  } | {
    /**
     * Provides the fine-grained detials controlling how blobs are distributed.
     *
     * @generated from field: anduril.communicationsmanager.v1.BlobDistributionRuleDetails blob_details = 13;
     */
    value: BlobDistributionRuleDetails;
    case: "blobDetails";
  } | { case: undefined; value?: undefined };

  /**
   * Determines the priority with which messages passing this rule are sent. Valid values are in the range of [0, 7].
   * 0 is the lowest and 7 is the highest priority.
   *
   * @generated from field: uint32 priority = 7;
   */
  priority: number;

  /**
   * Human readable description describing the DistributionRule.
   *
   * TO BE DEPRECATED
   *
   * @generated from field: string description = 9;
   */
  description: string;

  /**
   * Human readable name associated with the rule.
   *
   * TO BE DEPRECATED
   *
   * @generated from field: string name = 10;
   */
  name: string;

  /**
   * The version of this distribution rule.
   *
   * TO BE DEPRECATED
   *
   * @generated from field: int64 version_num = 11;
   */
  versionNum: bigint;

  /**
   * Contains the definition for either an inbound rule []source -> destination relationship or an outbound rule
   * source -> []destinations relationship. This will define the rule mechanism, where outbound rules are a deny-list
   * and inbound rules are an allow-list.
   *
   * @generated from field: anduril.communicationsmanager.v1.SourceDestinationDirectionalControl source_destination_directional_control = 12;
   */
  sourceDestinationDirectionalControl?: SourceDestinationDirectionalControl;
};

/**
 * Describes the message anduril.communicationsmanager.v1.DistributionRule.
 * Use `create(DistributionRuleSchema)` to create a new message.
 */
export declare const DistributionRuleSchema: GenMessage<DistributionRule>;

/**
 * @generated from message anduril.communicationsmanager.v1.SourceDestinationDirectionalControl
 */
export declare type SourceDestinationDirectionalControl = Message<"anduril.communicationsmanager.v1.SourceDestinationDirectionalControl"> & {
  /**
   * @generated from oneof anduril.communicationsmanager.v1.SourceDestinationDirectionalControl.source_destination
   */
  sourceDestination: {
    /**
     * @generated from field: anduril.communicationsmanager.v1.InboundRuleSourceDestination inbound_rule_source_destination = 1;
     */
    value: InboundRuleSourceDestination;
    case: "inboundRuleSourceDestination";
  } | {
    /**
     * @generated from field: anduril.communicationsmanager.v1.OutboundRuleSourceDestination outbound_rule_source_destination = 2;
     */
    value: OutboundRuleSourceDestination;
    case: "outboundRuleSourceDestination";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.communicationsmanager.v1.SourceDestinationDirectionalControl.
 * Use `create(SourceDestinationDirectionalControlSchema)` to create a new message.
 */
export declare const SourceDestinationDirectionalControlSchema: GenMessage<SourceDestinationDirectionalControl>;

/**
 * Many destinations to one source. The source will block data from being sent to the destinations when matched by
 * a filter statement. Rule is owned by the source.
 *
 * @generated from message anduril.communicationsmanager.v1.OutboundRuleSourceDestination
 */
export declare type OutboundRuleSourceDestination = Message<"anduril.communicationsmanager.v1.OutboundRuleSourceDestination"> & {
  /**
   * @generated from field: anduril.communicationsmanager.v1.Source source = 1;
   */
  source?: Source;

  /**
   * @generated from field: repeated anduril.communicationsmanager.v1.Destination destinations = 2;
   */
  destinations: Destination[];
};

/**
 * Describes the message anduril.communicationsmanager.v1.OutboundRuleSourceDestination.
 * Use `create(OutboundRuleSourceDestinationSchema)` to create a new message.
 */
export declare const OutboundRuleSourceDestinationSchema: GenMessage<OutboundRuleSourceDestination>;

/**
 * Many sources to one Destination. The destination will request data from the sources
 * when matched by a filter statement. Rule is owned by the destination.
 *
 * @generated from message anduril.communicationsmanager.v1.InboundRuleSourceDestination
 */
export declare type InboundRuleSourceDestination = Message<"anduril.communicationsmanager.v1.InboundRuleSourceDestination"> & {
  /**
   * @generated from field: repeated anduril.communicationsmanager.v1.Source sources = 1;
   */
  sources: Source[];

  /**
   * @generated from field: anduril.communicationsmanager.v1.Destination destination = 2;
   */
  destination?: Destination;
};

/**
 * Describes the message anduril.communicationsmanager.v1.InboundRuleSourceDestination.
 * Use `create(InboundRuleSourceDestinationSchema)` to create a new message.
 */
export declare const InboundRuleSourceDestinationSchema: GenMessage<InboundRuleSourceDestination>;

/**
 * A source from which primitive data are routed.
 *
 * @generated from message anduril.communicationsmanager.v1.Source
 */
export declare type Source = Message<"anduril.communicationsmanager.v1.Source"> & {
  /**
   * The type of source.
   *
   * @generated from oneof anduril.communicationsmanager.v1.Source.source
   */
  source: {
    /**
     * The source is a particular asset ID.
     *
     * @generated from field: string asset_id = 1 [deprecated = true];
     * @deprecated
     */
    value: string;
    case: "assetId";
  } | {
    /**
     * The source is all sources. This selection is only used for inbound rules.
     *
     * @generated from field: bool all = 2;
     */
    value: boolean;
    case: "all";
  } | {
    /**
     * The source is a particular host ID.
     *
     * @generated from field: string host_id = 3;
     */
    value: string;
    case: "hostId";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.communicationsmanager.v1.Source.
 * Use `create(SourceSchema)` to create a new message.
 */
export declare const SourceSchema: GenMessage<Source>;

/**
 * A destination to which data are routed.
 *
 * @generated from message anduril.communicationsmanager.v1.Destination
 */
export declare type Destination = Message<"anduril.communicationsmanager.v1.Destination"> & {
  /**
   * The type of destination.
   *
   * @generated from oneof anduril.communicationsmanager.v1.Destination.destination
   */
  destination: {
    /**
     * The destination is a particular asset ID.
     *
     * @generated from field: string asset_id = 1 [deprecated = true];
     * @deprecated
     */
    value: string;
    case: "assetId";
  } | {
    /**
     * The destination is a particular host ID.
     *
     * @generated from field: string host_id = 2;
     */
    value: string;
    case: "hostId";
  } | {
    /**
     * The destination is all destinations. This selection is only used for outbound rules.
     *
     * @generated from field: bool all = 3;
     */
    value: boolean;
    case: "all";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.communicationsmanager.v1.Destination.
 * Use `create(DestinationSchema)` to create a new message.
 */
export declare const DestinationSchema: GenMessage<Destination>;

/**
 * Message to contain additional business logic for entities. Entity_Filter and Dynamic Statement are ANDed together
 * when both are present.
 *
 * @generated from message anduril.communicationsmanager.v1.EntityDistributionRuleDetails
 */
export declare type EntityDistributionRuleDetails = Message<"anduril.communicationsmanager.v1.EntityDistributionRuleDetails"> & {
  /**
   * Controls the filtering which should be applied in the compliant service.
   * TO BE DEPRECATED, use entity_filter_selection
   *
   * @generated from field: anduril.entitymanager.v1.Statement entity_filter = 1;
   */
  entityFilter?: Statement;

  /**
   * @generated from oneof anduril.communicationsmanager.v1.EntityDistributionRuleDetails.entity_filter_selection
   */
  entityFilterSelection: {
    /**
     * Controls the filtering which should be applied in the compliant service.
     *
     * @generated from field: anduril.entitymanager.v1.Statement static_statement = 2;
     */
    value: Statement;
    case: "staticStatement";
  } | {
    /**
     * Used for matching location details.
     *
     * @generated from field: anduril.entitymanager.v1.DynamicStatement dynamic_statement = 3;
     */
    value: DynamicStatement;
    case: "dynamicStatement";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message anduril.communicationsmanager.v1.EntityDistributionRuleDetails.
 * Use `create(EntityDistributionRuleDetailsSchema)` to create a new message.
 */
export declare const EntityDistributionRuleDetailsSchema: GenMessage<EntityDistributionRuleDetails>;

/**
 * @generated from message anduril.communicationsmanager.v1.BlobDistributionRuleDetails
 */
export declare type BlobDistributionRuleDetails = Message<"anduril.communicationsmanager.v1.BlobDistributionRuleDetails"> & {
  /**
   * @generated from field: anduril.blobs.v1.Statement blob_filter = 1 [deprecated = true];
   * @deprecated
   */
  blobFilter?: Statement$1;

  /**
   * Controls blob filtering using disjoint matching, meaning only 1 statement needs to match.
   *
   * @generated from field: repeated anduril.blobs.v1.Statement blob_filters = 2;
   */
  blobFilters: Statement$1[];
};

/**
 * Describes the message anduril.communicationsmanager.v1.BlobDistributionRuleDetails.
 * Use `create(BlobDistributionRuleDetailsSchema)` to create a new message.
 */
export declare const BlobDistributionRuleDetailsSchema: GenMessage<BlobDistributionRuleDetails>;

/**
 * CommunicationsManagerError message contents.
 *
 * @generated from message anduril.communicationsmanager.v1.CommunicationsManagerError
 */
export declare type CommunicationsManagerError = Message<"anduril.communicationsmanager.v1.CommunicationsManagerError"> & {
  /**
   * @generated from field: string message = 1;
   */
  message: string;
};

/**
 * Describes the message anduril.communicationsmanager.v1.CommunicationsManagerError.
 * Use `create(CommunicationsManagerErrorSchema)` to create a new message.
 */
export declare const CommunicationsManagerErrorSchema: GenMessage<CommunicationsManagerError>;

/**
 * Rule to apply to Cross Domain, will function as an inbound filter which allows matching entities to pass through.
 *
 * @generated from message anduril.communicationsmanager.v1.CrossDomainRule
 */
export declare type CrossDomainRule = Message<"anduril.communicationsmanager.v1.CrossDomainRule"> & {
  /**
   * @generated from oneof anduril.communicationsmanager.v1.CrossDomainRule.details
   */
  details: {
    /**
     * @generated from field: anduril.communicationsmanager.v1.EntityDistributionRuleDetails entity_details = 1;
     */
    value: EntityDistributionRuleDetails;
    case: "entityDetails";
  } | { case: undefined; value?: undefined };

  /**
   * Destination CDS to apply the rule to.
   *
   * @generated from field: anduril.communicationsmanager.v1.CdsDestination cds_destination = 2;
   */
  cdsDestination?: CdsDestination;
};

/**
 * Describes the message anduril.communicationsmanager.v1.CrossDomainRule.
 * Use `create(CrossDomainRuleSchema)` to create a new message.
 */
export declare const CrossDomainRuleSchema: GenMessage<CrossDomainRule>;

/**
 * The type of distribution rule event.
 *
 * @generated from enum anduril.communicationsmanager.v1.EventType
 */
export enum EventType {
  /**
   * @generated from enum value: EVENT_TYPE_INVALID = 0;
   */
  INVALID = 0,

  /**
   * Rule was created.
   *
   * @generated from enum value: EVENT_TYPE_CREATED = 1;
   */
  CREATED = 1,

  /**
   * Rule was updated.
   *
   * @generated from enum value: EVENT_TYPE_UPDATE = 2;
   */
  UPDATE = 2,

  /**
   * Rule was deleted.
   *
   * @generated from enum value: EVENT_TYPE_DELETED = 3;
   */
  DELETED = 3,

  /**
   * Rule already existed, but sent on a new stream connection.
   *
   * @generated from enum value: EVENT_TYPE_PREEXISTING = 4;
   */
  PREEXISTING = 4,
}

/**
 * Describes the enum anduril.communicationsmanager.v1.EventType.
 */
export declare const EventTypeSchema: GenEnum<EventType>;

