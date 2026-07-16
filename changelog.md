# Changelog

## [4.21.0] - 2026-07-16
### Added
- **`server`** option on client options to select a named server that resolves into an `https://` base URL.

### Changed
- **`User-Agent`** header is no longer sent with requests; consumers relying on this header will observe its absence.

