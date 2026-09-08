# Changelog

## [5.0.0] - 2026-09-04

### Breaking Changes
- **`video` namespace** — video request types are no longer exported under `video`; access functionality through the top-level client and reference types directly (e.g. `Lattice.GoogleRpcStatus` instead of `Lattice.video.GoogleRpcStatus`).
- **`client.video.video.*`** — the nested `.video` sub-client is removed; drop the extra segment and call methods directly, e.g. replace `client.video.video.listEgressStreams()` with `client.video.listEgressStreams()`.
- **`VideoClient.video`** — the nested getter is removed; call egress and ingress stream methods directly on the client instead.

### Added
- **Egress stream methods** — `listEgressStreams`, `createEgressStream`, `getEgressStream`, and `deleteEgressStream` for managing video egress streams.
- **Ingress stream methods** — `listIngressStreams`, `createIngressStream`, `getIngressStream`, and `deleteIngressStream`, with new `MpegTsIngress`, `MpegTsSettings`, and MPEG-TS support types.
- **Stream types** — `EgressStream`, `IngressStream`, and their list/get/create/delete response types are now available.
- **Typed video errors** — status-specific error classes (e.g. `BadRequestError`, `NotFoundError`, `ServiceUnavailableError`) are thrown for their respective HTTP status codes.
- **`requireAcknowledgement`** — new optional field on `DeliveryConstraints` requiring agent acknowledgement, plus a new `PlatformSubcomponents` group type on `GroupDetails`.

### Changed
- **`DeliveryError.Code`** — added new enum value `DELIVERY_ERROR_CODE_NOT_ACKNOWLEDGED`.
- **`CreateIngressStreamRequest.mpegTs`** — documentation clarified that MPEG-TS ingress is supported only at the edge in closed networks.

## [4.28.0] - 2026-09-03

**Added**

- VideoClient — new client (client.video.video) for managing live video streams with create, get, list, and delete operations for both ingress and egress streams.
- Ingress and egress stream types — added request/response and resource types such as CreateIngressStreamRequest, CreateEgressStreamResponse, IngressStream, and EgressStream.
- Transport support types — added settings types for RTSP, SRT, and MPEG-TS transports (RtspSettings, SrtSettings, MpegTsSettings) with ingress/egress variants.
- IngressStream.Status — new enum exposing stream lifecycle states such as StreamStatusLive, StreamStatusInactive, and StreamStatusArchived.
- Video error types — added BadRequestError, ConflictError, ForbiddenError, NotFoundError, UnauthorizedError, TooManyRequestsError, InternalServerError, and ServiceUnavailableError, most exposing a GoogleRpcStatus body, plus a new ./video subpath export.

## [4.27.0] - 2026-08-24

## [4.26.0] - 2026-08-12

## [4.25.0] - 2026-07-29

## [4.24.1] - 2026-07-28

## [4.24.0] - 2026-07-27
### Changed
- **Passthrough requests** — auth headers are now only sent when the resolved URL targets the configured base URL origin, preventing SDK credentials from leaking to cross-origin hosts.
- **Passthrough debug logging** — request URLs are now redacted to hide embedded credentials and sensitive query parameters.

## [4.23.0] - 2026-07-22

## [4.22.0] - 2026-07-21
### Added
- **`kinematics`** — optional field on `Entity` providing higher-granularity motion data as an alternative to `location`/`locationUncertainty`.
- **`Kinematics`, `KinematicsGeodetic`, `KinematicsGeocentric`** — new types for describing entity motion in geodetic and geocentric reference frames.
- **`Altitude`** family — including `AltitudeAboveWgs84Ellipsoid`, `AltitudeAboveSeaFloor`, `AltitudeBelowSeaSurface`, `AltitudeAboveMeanSeaLevelEgm96`, and `AltitudeProvenance` for representing altitude across multiple reference frames.
- **`LocationGeodetic`, `LocationGeocentricEcef`, `TMat3`, `Vec3`** — new geospatial helper types for location and covariance representations.

## [4.21.0] - 2026-07-16

