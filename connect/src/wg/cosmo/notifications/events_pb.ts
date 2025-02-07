// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file wg/cosmo/notifications/events.proto (package wg.cosmo.notifications, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum wg.cosmo.notifications.PlatformEventName
 */
export enum PlatformEventName {
  /**
   * @generated from enum value: USER_REGISTER_SUCCESS = 0;
   */
  USER_REGISTER_SUCCESS = 0,

  /**
   * @generated from enum value: APOLLO_MIGRATE_INIT = 1;
   */
  APOLLO_MIGRATE_INIT = 1,

  /**
   * @generated from enum value: APOLLO_MIGRATE_SUCCESS = 2;
   */
  APOLLO_MIGRATE_SUCCESS = 2,

  /**
   * @generated from enum value: USER_DELETE_SUCCESS = 3;
   */
  USER_DELETE_SUCCESS = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(PlatformEventName)
proto3.util.setEnumType(PlatformEventName, "wg.cosmo.notifications.PlatformEventName", [
  { no: 0, name: "USER_REGISTER_SUCCESS" },
  { no: 1, name: "APOLLO_MIGRATE_INIT" },
  { no: 2, name: "APOLLO_MIGRATE_SUCCESS" },
  { no: 3, name: "USER_DELETE_SUCCESS" },
]);

/**
 * @generated from enum wg.cosmo.notifications.OrganizationEventName
 */
export enum OrganizationEventName {
  /**
   * @generated from enum value: FEDERATED_GRAPH_SCHEMA_UPDATED = 0;
   */
  FEDERATED_GRAPH_SCHEMA_UPDATED = 0,

  /**
   * @generated from enum value: MONOGRAPH_SCHEMA_UPDATED = 1;
   */
  MONOGRAPH_SCHEMA_UPDATED = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(OrganizationEventName)
proto3.util.setEnumType(OrganizationEventName, "wg.cosmo.notifications.OrganizationEventName", [
  { no: 0, name: "FEDERATED_GRAPH_SCHEMA_UPDATED" },
  { no: 1, name: "MONOGRAPH_SCHEMA_UPDATED" },
]);

/**
 * @generated from message wg.cosmo.notifications.GraphSchemaUpdatedMeta
 */
export class GraphSchemaUpdatedMeta extends Message<GraphSchemaUpdatedMeta> {
  /**
   * @generated from field: repeated string graphIds = 1;
   */
  graphIds: string[] = [];

  constructor(data?: PartialMessage<GraphSchemaUpdatedMeta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wg.cosmo.notifications.GraphSchemaUpdatedMeta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "graphIds", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GraphSchemaUpdatedMeta {
    return new GraphSchemaUpdatedMeta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GraphSchemaUpdatedMeta {
    return new GraphSchemaUpdatedMeta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GraphSchemaUpdatedMeta {
    return new GraphSchemaUpdatedMeta().fromJsonString(jsonString, options);
  }

  static equals(a: GraphSchemaUpdatedMeta | PlainMessage<GraphSchemaUpdatedMeta> | undefined, b: GraphSchemaUpdatedMeta | PlainMessage<GraphSchemaUpdatedMeta> | undefined): boolean {
    return proto3.util.equals(GraphSchemaUpdatedMeta, a, b);
  }
}

/**
 * @generated from message wg.cosmo.notifications.EventMeta
 */
export class EventMeta extends Message<EventMeta> {
  /**
   * @generated from field: wg.cosmo.notifications.OrganizationEventName event_name = 1;
   */
  eventName = OrganizationEventName.FEDERATED_GRAPH_SCHEMA_UPDATED;

  /**
   * @generated from oneof wg.cosmo.notifications.EventMeta.meta
   */
  meta: {
    /**
     * @generated from field: wg.cosmo.notifications.GraphSchemaUpdatedMeta federated_graph_schema_updated = 2;
     */
    value: GraphSchemaUpdatedMeta;
    case: "federatedGraphSchemaUpdated";
  } | {
    /**
     * @generated from field: wg.cosmo.notifications.GraphSchemaUpdatedMeta monograph_schema_updated = 3;
     */
    value: GraphSchemaUpdatedMeta;
    case: "monographSchemaUpdated";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<EventMeta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wg.cosmo.notifications.EventMeta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_name", kind: "enum", T: proto3.getEnumType(OrganizationEventName) },
    { no: 2, name: "federated_graph_schema_updated", kind: "message", T: GraphSchemaUpdatedMeta, oneof: "meta" },
    { no: 3, name: "monograph_schema_updated", kind: "message", T: GraphSchemaUpdatedMeta, oneof: "meta" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventMeta {
    return new EventMeta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventMeta {
    return new EventMeta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventMeta {
    return new EventMeta().fromJsonString(jsonString, options);
  }

  static equals(a: EventMeta | PlainMessage<EventMeta> | undefined, b: EventMeta | PlainMessage<EventMeta> | undefined): boolean {
    return proto3.util.equals(EventMeta, a, b);
  }
}

