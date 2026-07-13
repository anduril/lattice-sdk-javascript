# Changelog

## [4.20.0] - 2026-07-13
### Added
- **`additionalBodyParameters`** request option lets you spread extra properties into a request body via `requestOptions.additionalBodyParameters`.

### Changed
- **`User-Agent`** header now uses a structured format including OS, architecture, and runtime version.
- **File uploads** now throw a descriptive error when passed `null` or `undefined` instead of failing later.

