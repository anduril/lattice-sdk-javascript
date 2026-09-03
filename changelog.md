# Changelog

## [5.0.0] - 2026-09-03

### Breaking Changes
- **`client.video.video.*`** — the nested `.video` accessor was removed; call egress and ingress methods directly, e.g. replace `client.video.video.listEgressStreams()` with `client.video.listEgressStreams()`.
- **`video` namespace re-exports** — the nested `video.*` re-exports and their request types are no longer exported from the video resource module; import them from their new location.

### Added
- **Egress stream methods** — `listEgressStreams`, `createEgressStream`, `getEgressStream`, and `deleteEgressStream` are now available directly on `VideoClient`.
- **Ingress stream methods** — `listIngressStreams`, `createIngressStream`, `getIngressStream`, and `deleteIngressStream` are now available directly on `VideoClient`.
- **`DeliveryConstraints.requireAcknowledgement`** — optional field requiring agent acknowledgement before a task is considered delivered.
- **`DELIVERY_ERROR_CODE_NOT_ACKNOWLEDGED`** — new value in the `DeliveryError.Code` enum.
- **`PlatformSubcomponents`** — new type and optional field on `GroupDetails`.

### Changed
- **`MpegTsSettings`, `MpegTsIngress`, `CreateIngressStreamResponse`** — documentation clarified that MPEG-TS ingress is edge-only and may be disabled in cloud deployments.

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

