# expedy-sdk-node

[![npm version](https://img.shields.io/npm/v/expedy-sdk-node.svg)](https://www.npmjs.com/package/expedy-sdk-node)
[![npm downloads](https://img.shields.io/npm/dm/expedy-sdk-node.svg)](https://www.npmjs.com/package/expedy-sdk-node)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/LICENSE)
[![types: TypeScript](https://img.shields.io/badge/types-TypeScript-3178c6.svg)](https://www.typescriptlang.org/)

Official Node.js SDK + API documentation for the **Expedy Print API v2**. Send print jobs to Expedy cloud thermal receipt printers and to Raspberry Pi gateways driving third-party USB printers (labels, inkjet, laser, photo). Alternative to Google Cloud Print.

- **Printers (`printers`)** — Expedy cloud thermal receipt printers ([product page](https://www.expedy.io/product)).
- **Devices (`devices`)** — Expedy Raspberry Pi gateways ([product page](https://www.expedy.io/raspberry-pi)) driving USB printers.

> `displays` and `medias` are **out of scope** for this repository — they will be documented separately.

## Install

```bash
npm install expedy-sdk-node
```

Requires Node.js ≥ 18.

## Quickstart

```ts
import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const { request_uid } = await client.printers.createPrintJob(
  process.env.EXPEDY_PRINTER_UID!,
  {
    printer_msg: "<C><BOLD>Hello, Expedy!</BOLD></C><BR><BR><CUT/>",
    origin: "quickstart",
  },
);

console.log(`Queued job ${request_uid}`);
```

Full walkthrough: [docs/getting-started/quickstart.md](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/getting-started/quickstart.md).

## Chinese, Japanese, Korean

CJK text needs the `printer_han` field or it prints as `?` — no single-byte code page
carries Hanzi, Kana or Hangul, so without it every such character is silently replaced
before the job reaches the printer.

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<C><BOLD>주문 #1234</BOLD></C><BR><CUT/>",
  printer_han: "kr", // "cn" Chinese · "kr" Korean · "jp" Japanese
});
```

Details, gotchas and examples: [docs/receipt-layout/asian-characters.md](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/receipt-layout/asian-characters.md).

## Documentation

The complete reference lives under [`docs/`](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/README.md), and the same content is published at [docs.expedy.io](https://docs.expedy.io/). Key entry points:

- [Printers vs. devices](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/concepts/printers-vs-devices.md) — which resource to use.
- [Authentication](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/getting-started/authentication.md) — `Authorization: <API_SID>:<API_TOKEN>`.
- [Create a print job](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/api/printers/create-print-job.md) — flagship endpoint.
- [Text layout tags](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/receipt-layout/text-layout-tags.md) — full tag reference.
- [Asian characters](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/receipt-layout/asian-characters.md) — `printer_han` for Chinese, Japanese, Korean.
- [Device actions](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/device-actions/autocut.md) — `<CUT/>`, `<PULSE/>`.
- [Parameter tags](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/parameter-tags/wifi.md) — Wi-Fi, NTP, APN, keep-alive, audible beep.
- [Delivery and idempotency](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/concepts/delivery-and-idempotency.md) — what `200` means, and how to avoid double prints.
- [Errors](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/getting-started/errors.md) — status codes and the `ExpedyApiError` shape.
- [Integrations index](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/integrations.md) — no-code / e-commerce / delivery platforms (Zapier, Shopify, WooCommerce, Uber Eats, …).
- [`openapi.yaml`](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/openapi.yaml) — OpenAPI 3.1 spec for all 14 endpoints.
- [`AGENTS.md`](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/AGENTS.md) — condensed reference for coding agents (Claude Code, Cursor, Copilot…).

## SDK surface

```ts
client.printers.list();
client.printers.createPrintJob(printerUid, { printer_msg, origin?, printer_han? });

client.devices.list();
client.devices.get(deviceUid);

client.devices.system.ping(deviceUid);
client.devices.system.update(deviceUid);
client.devices.system.reboot(deviceUid);
client.devices.system.shutdown(deviceUid);

client.devices.usb.getConfiguration(deviceUid);
client.devices.usb.scan(deviceUid);
client.devices.usb.readScan(deviceUid);
client.devices.usb.createPrintJob(deviceUid, usbPort, { usb_msg, notification_url?, origin?, printer_han? });

client.devices.wifi.getConfiguration(deviceUid);
client.devices.wifi.addSsid(deviceUid, { wifi_ssid, wifi_psk });
client.devices.wifi.deleteSsid(deviceUid, wifiId);
client.devices.wifi.applyUpdate(deviceUid);
```

Runnable examples live under [`examples/`](https://github.com/ExpedyDev/expedy-sdk-node/tree/main/examples).

## Compatibility

The Expedy tag language targets **Expedy cloud thermal printers** and **ESC/POS-compatible printers**. Other brands may be compatible through the Raspberry Pi gateway — the supported list will be completed over time. See [docs/concepts/compatibility.md](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/concepts/compatibility.md).

## Supply chain

Releases are published from GitHub Actions with [npm provenance](https://docs.npmjs.com/generating-provenance-statements) — a signed attestation linking each version to its source commit and build. Verify it with:

```bash
npm audit signatures
```

## License

MIT
