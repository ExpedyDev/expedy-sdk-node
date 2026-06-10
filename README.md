# expedy-sdk-node

[![npm version](https://img.shields.io/npm/v/expedy-sdk-node.svg)](https://www.npmjs.com/package/expedy-sdk-node)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/LICENSE)
[![types: TypeScript](https://img.shields.io/badge/types-TypeScript-3178c6.svg)](https://www.typescriptlang.org/)

Official Node.js SDK + API documentation for the **Expedy Print API v2**. Send print jobs to Expedy cloud thermal receipt printers and to Raspberry Pi gateways driving third-party USB printers (labels, inkjet, laser, photo). Alternative to Google Cloud Print.

- **Printers (`printers`)** — Expedy cloud thermal receipt printers ([product page](https://www.expedy.io/fr/product)).
- **Devices (`devices`)** — Expedy Raspberry Pi gateways ([product page](https://www.expedy.io/fr/raspberry-pi)) driving USB printers.

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

## Documentation

The complete reference lives under [`docs/`](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/README.md). Key entry points:

- [Printers vs. devices](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/concepts/printers-vs-devices.md) — which resource to use.
- [Authentication](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/getting-started/authentication.md) — `Authorization: <API_SID>:<API_TOKEN>`.
- [Create a print job](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/api/printers/create-print-job.md) — flagship endpoint.
- [Text layout tags](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/receipt-layout/text-layout-tags.md) — full tag reference.
- [Device actions](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/device-actions/autocut.md) — `<CUT/>`, `<PULSE/>`.
- [Parameter tags](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/parameter-tags/wifi.md) — Wi-Fi, NTP, APN, keep-alive, audible beep.

## SDK surface

```ts
client.printers.list();
client.printers.createPrintJob(printerUid, { printer_msg, origin? });

client.devices.list();
client.devices.get(deviceUid);

client.devices.system.ping(deviceUid);
client.devices.system.update(deviceUid);
client.devices.system.reboot(deviceUid);
client.devices.system.shutdown(deviceUid);

client.devices.usb.getConfiguration(deviceUid);
client.devices.usb.scan(deviceUid);
client.devices.usb.readScan(deviceUid);
client.devices.usb.createPrintJob(deviceUid, usbPort, { usb_msg, notification_url?, origin? });

client.devices.wifi.getConfiguration(deviceUid);
client.devices.wifi.addSsid(deviceUid, { wifi_ssid, wifi_psk });
client.devices.wifi.deleteSsid(deviceUid, wifiId);
client.devices.wifi.applyUpdate(deviceUid);
```

Runnable examples live under [`examples/`](https://github.com/ExpedyDev/expedy-sdk-node/tree/main/examples).

## Compatibility

The Expedy tag language targets **Expedy cloud thermal printers** and **ESC/POS-compatible printers**. Other brands may be compatible through the Raspberry Pi gateway — the supported list will be completed over time. See [docs/concepts/compatibility.md](https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/concepts/compatibility.md).

## License

MIT
