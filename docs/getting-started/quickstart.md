# Quickstart

Send your first print job to an Expedy cloud thermal printer in ~10 lines of code.

## Prerequisites

- An Expedy account with at least one cloud printer paired.
- `API_SID` and `API_TOKEN` from the Expedy console.
- The `printer_uid` of the target printer (get it from `GET /printers/all` or from the console).
- Node.js ≥ 18.

## Install the SDK

```bash
npm install expedy-sdk-node
```

## Send "Hello, Expedy!"

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

Run it:

```bash
EXPEDY_API_SID=... \
EXPEDY_API_TOKEN=... \
EXPEDY_PRINTER_UID=... \
node --experimental-strip-types examples/quickstart.ts
```

A centered, bold **"Hello, Expedy!"** line should come out of the printer, followed by an automatic cut.

## What next?

- Build a realistic ticket with the [text layout tags](../receipt-layout/text-layout-tags.md) and a [logo](../receipt-layout/image-and-logo-printing.md).
- Drive the printer's peripherals: [open the cash drawer](../device-actions/open-cash-drawer.md), [autocut](../device-actions/autocut.md).
- Configure the printer remotely: [Wi-Fi](../parameter-tags/wifi.md), [NTP clock](../parameter-tags/ntp-clock.md), [keep-alive](../parameter-tags/keep-alive.md).
- Print to a **label / A4 / photo printer** over a Raspberry Pi gateway: see [create USB print job](../api/devices/usb/create-usb-print-job.md).
