# AGENTS.md

Guidance for coding agents (Claude Code, Cursor, GitHub Copilot, …) working in or against
this repository, and a condensed reference for agents integrating `expedy-sdk-node` into
someone else's codebase.

## What this is

Official Node.js SDK + API documentation for the **Expedy Print API v2**. It sends print
jobs to two kinds of hardware:

| Resource | Hardware | Print method |
| --- | --- | --- |
| `printers` | Expedy cloud thermal receipt printer (own internet connection) | `client.printers.createPrintJob(printerUid, { printer_msg, ... })` |
| `devices` | Raspberry Pi gateway + a third-party USB printer plugged into it | `client.devices.usb.createPrintJob(deviceUid, usbPort, { usb_msg, ... })` |

Read [`docs/concepts/printers-vs-devices.md`](docs/concepts/printers-vs-devices.md) before
writing code against either endpoint — picking the wrong one is the most common mistake.

`displays` and `medias` are **out of scope** for this repository.

## Non-obvious things to get right

- **Authentication is not Bearer.** The `Authorization` header is the raw
  `<API_SID>:<API_TOKEN>` value, colon-separated, **no prefix**. `ExpedyClient` builds this
  automatically — never hand-construct the header.
- **`printer_han` for Chinese/Japanese/Korean.** Without this field, CJK characters are
  silently replaced with `?` **before the job reaches the printer** — no error is raised.
  If a user asks to print non-Latin text and the code doesn't set `printer_han`, that's a
  bug. See [`docs/receipt-layout/asian-characters.md`](docs/receipt-layout/asian-characters.md).
  Values: `"cn"` Chinese, `"kr"` Korean, `"jp"` Japanese. Omit for Latin scripts.
- **`200` means accepted, not printed.** Both print endpoints are asynchronous. Don't tell a
  user "your ticket printed" based on the SDK call resolving — see
  [`docs/concepts/delivery-and-idempotency.md`](docs/concepts/delivery-and-idempotency.md).
- **No de-duplication.** Retrying a print request after a network error can produce two
  physical tickets. Track `request_uid` if you add retry logic.
- **`printer_msg` / `usb_msg` carries an XML-like tag language**, not HTML — `<C>`, `<BOLD>`,
  `<IMG>`, `<QR>`, `<CUT/>`, `<PULSE/>`, plus one-shot provisioning tags
  (`<SETWIFI>`, `<SETSNTP>`, `<SETAPN>`, `<SETKEEPALIVE>`, `<UNSETBEEP/>`). Full reference:
  [`docs/receipt-layout/text-layout-tags.md`](docs/receipt-layout/text-layout-tags.md).
- **`printer_status` is an activation flag**, not connectivity. `"0"` means suspended by
  ExpedyPRINT (usually billing), not "printer is offline".
- Errors are `ExpedyError` (network/config) or `ExpedyApiError` (`status`, `rawBody`,
  `requestUid`), both exported from the package root. Always read `err.message` /
  `rawBody.message` rather than branching on `status` alone.

## Where to look

- **Full API reference**: [`docs/README.md`](docs/README.md) — reading order included.
- **Machine-readable spec**: [`openapi.yaml`](openapi.yaml) — all 16 operations, request/
  response schemas, `printer_han` enum.
- **Runnable examples**: [`examples/`](examples/) — one file per feature, each a complete
  standalone script (`node --experimental-strip-types examples/<name>.ts`).
- **SDK source**: `src/client.ts` (HTTP layer, ~130 lines), `src/resources/*.ts` (one
  method per endpoint), `src/types/*.ts` (request/response shapes with JSDoc).
- **Canonical docs site**: <https://docs.expedy.io/> — same content as `docs/`, plus
  hardware setup guides and ~190 integration guides out of this repo's scope (see
  [`docs/integrations.md`](docs/integrations.md) for the index).

## Working on this repository

- `npm run typecheck` — type-check `src/` only.
- `npm run build` — compile to `dist/`.
- `npm run typecheck:examples` — type-check `examples/` against the compiled types.
- `npm test` — build, then run the test suite (`node --test`, no test framework
  dependency).
- Touching a field in `src/types/*.ts`? Update the matching schema in `openapi.yaml` and the
  matching page under `docs/api/` in the same change — see
  [`CONTRIBUTING.md`](CONTRIBUTING.md).
- This is a **public** repository. Never commit real credentials, UIDs, or internal URLs —
  use the placeholder values already used throughout `docs/` and `examples/`
  (`WP0RGS1SEDZ`, `MMAAZ112PI`, `example.com`, …).
