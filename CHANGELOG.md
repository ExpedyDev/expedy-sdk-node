# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/).

## [1.1.0]

### Added

- `printer_han` field on `CreatePrintJobRequest` and `CreateUsbPrintJobRequest` — required
  to print Chinese, Japanese or Korean text. Without it, CJK characters are silently
  replaced with `?` before the job reaches the printer. New `PrinterHan` /
  `PrinterHanScript` exported types, new
  [`docs/receipt-layout/asian-characters.md`](docs/receipt-layout/asian-characters.md)
  reference page, and two new runnable examples
  (`examples/receipt-asian-characters.ts`, `examples/device-rpi-usb-print-asian.ts`).
- `docs/getting-started/errors.md` — SDK error types, status codes by endpoint, retry
  guidance.
- `docs/concepts/delivery-and-idempotency.md` — what a `200` response actually guarantees,
  and how to avoid double prints.
- `docs/integrations.md` — index of no-code / e-commerce / delivery platforms that connect
  to Expedy PRINT.
- `openapi.yaml` — OpenAPI 3.1 description of all 16 API operations.
- `AGENTS.md` and `llms.txt` for coding agents and LLM-based tools.
- `CONTRIBUTING.md` and `SECURITY.md`.
- Test suite (`test/client.test.mjs`, Node's built-in test runner, no dependencies) and a
  `ci.yml` GitHub Actions workflow (Node 18 / 20 / 22).
- JSDoc across `src/types/*.ts` clarifying field semantics that were previously undocumented
  in code (e.g. `printer_status` as an activation flag, not a connectivity check).

### Changed

- `CreatePrintJobResponse.request_timestamp` is now optional. The field is returned by the
  API but is not part of the documented response contract.

## [1.0.2] — 2026-06-10

### Fixed

- Dropped `/fr/` from `expedy.io` links in the README (the site auto-localizes); fixed
  Cloud Print Box and support URLs.

## [1.0.1] — 2026-06-10

### Added

- Supply-chain / provenance verification note in the README (`npm audit signatures`).

## [1.0.0] — 2026-06-05

### Added

- Initial public release: `ExpedyClient` with `printers` and `devices` resources
  (`system`, `usb`, `wifi`), TypeScript types, and the full `docs/` reference.
- GitHub Actions publish workflow with npm provenance (OIDC trusted publishing).
