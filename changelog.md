# Changelog

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

