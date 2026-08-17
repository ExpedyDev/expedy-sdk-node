# Contributing

Thanks for considering a contribution to `expedy-sdk-node`.

## Development

```bash
npm ci
npm run typecheck        # type-check src/
npm run build             # compile to dist/
npm run typecheck:examples # type-check examples/ against the compiled types
npm test                  # build, then run the test suite
```

The test suite (`test/*.test.mjs`) uses Node's built-in test runner against the compiled
`dist/` output — no test framework dependency. `ExpedyClient` accepts a `fetch`
implementation in its config, which the tests use to mock HTTP calls without a network
connection.

## Keeping things in sync

This repository carries three parallel descriptions of the same API surface:

- `src/types/*.ts` — the TypeScript types the SDK actually returns/accepts.
- `openapi.yaml` — the machine-readable spec, used by tooling and by other-language clients.
- `docs/api/**/*.md` — the human-readable reference.

**If you add, rename, or change the semantics of a request/response field, update all
three in the same change.** A mismatch between the SDK types and `openapi.yaml` is worse
than no spec at all.

## Style

- No comments explaining *what* code does — names should do that. JSDoc is for the *why*
  or for behavior a reader could not otherwise guess (see the `printer_han` fields in
  `src/types/*.ts` for the bar to meet).
- Match the existing resource/method shape in `src/resources/*.ts` when adding an endpoint:
  one method per operation, `RequestOptions` as the last parameter, `encodeURIComponent`
  around every path segment.
- Examples under `examples/` must be runnable as-is with
  `node --experimental-strip-types examples/<name>.ts` given the right environment
  variables — keep them self-contained.

## This is a public repository

Never commit real credentials, UIDs, tokens, or internal URLs. Use the placeholder values
already used throughout the codebase (`WP0RGS1SEDZ`, `MMAAZ112PI`, `example.com`, …).

## Reporting a security issue

See [SECURITY.md](SECURITY.md) — please do not open a public issue for a vulnerability.
