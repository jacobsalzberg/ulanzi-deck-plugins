# Changelog

All notable changes to this project will be documented in this file.

## [2026-05-02] - Antigravity Polish & Unified Repo
### Added
- **New Plugin**: Tesouro IPCA+ 2032 Monitor.
  - Implemented multi-tier fetching (Cloudflare Workers, CSV, Brapi).
  - Added custom chronological sorting for Tesouro Transparente CSV data.
- **New Plugin**: San Francisco Clock (Pacific Time).
  - Fixed the 24:00 midnight display bug using `hourCycle: h23`.
- **Integrated Repo**: Unified the USD/BRL Exchange Rate plugin from its standalone repository.
- **Documentation**: Created a comprehensive English `README.md` and this `CHANGELOG.md`.
- **CI/CD**: Set up local Git repository and pushed to GitHub using GitHub CLI.

### Fixed
- Fixed CORS issues for the Tesouro plugin using a Cloudflare Worker proxy.
- Fixed Pacific Time formatting to show `00:xx` instead of `24:xx` at midnight.
- Cleaned up debug logs and version strings in all plugin files.

## [2025-11-04] - Legacy USD/BRL
### Added
- Initial release of the USD/BRL exchange rate monitor.
- Added property inspector for currency settings.
