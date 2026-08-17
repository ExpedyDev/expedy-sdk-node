# Security Policy

## Reporting a vulnerability

Please **do not** open a public GitHub issue for a suspected security vulnerability.
Instead, report it through the
[Expedy support portal](https://help.expedy.io/support/tickets/new), or through GitHub's
[private vulnerability reporting](https://github.com/ExpedyDev/expedy-sdk-node/security/advisories/new)
if enabled on this repository.

Include enough detail to reproduce the issue: affected version, environment, and a minimal
example.

## Credentials

`apiSid` and `apiToken` (the `Authorization: <SID>:<TOKEN>` pair) are secrets:

- Store them in a secrets manager or environment variable — never in a client bundle or
  committed to source control.
- Rotate the token from the [Expedy console](https://www.expedy.fr/console/) if it has ever
  been logged, committed, or shared by accident.
- This repository, its `docs/` and its `examples/` never contain real credentials —
  everything is a placeholder (`WP0RGS1SEDZ`, `MMAAZ112PI`, environment variable
  references).

## Supply chain

Releases are published from GitHub Actions with
[npm provenance](https://docs.npmjs.com/generating-provenance-statements) — a signed
attestation linking each published version to its source commit and build. Verify it with:

```bash
npm audit signatures
```

## Supported versions

Only the latest published `1.x` release is supported. Security fixes are released as a new
patch or minor version — please upgrade rather than pinning to an old version.
