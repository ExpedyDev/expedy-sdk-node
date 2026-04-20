# Create a print job

Queue a ticket on an Expedy cloud thermal receipt printer. This is the most-used endpoint of the API.

```
POST https://www.expedy.fr/api/v2/printers/{printer_uid}/print
```

## Authentication

Requires an `Authorization` header — see [Authentication](../../getting-started/authentication.md).

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `printer_uid` | string | yes | Unique ID of the target printer. Obtain it from [`GET /printers/all`](./list-printers.md) or the Expedy console. |

## Request body

Content-Type: `application/json`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `printer_msg` | string | yes | The ticket content. Plain UTF-8 text mixed with XML-like tags that drive layout, actions and printer parameters. See [how to build a ticket](#building-the-printer_msg-payload). |
| `origin` | string | no | Free-form identifier echoed in the Expedy console — useful to trace which system / feature / order emitted the job (e.g. `"pos/checkout"`, `"kitchen/prep-slip"`). |

### Building the `printer_msg` payload

`printer_msg` carries **everything**: text, line breaks, images, QR codes, cut, cash-drawer pulse, and even one-shot printer configuration (Wi-Fi, NTP, APN, keep-alive).

Full tag reference:

- [Text layout tags](../../receipt-layout/text-layout-tags.md) — `<BR>`, `<BOLD>`, `<C>`, `<CB>`, `<L>`, `<W>`
- [Images and logos](../../receipt-layout/image-and-logo-printing.md) — `<IMG>`
- [QR code](../../receipt-layout/qr-code.md) — `<QR>`
- [EAN-13 barcode](../../receipt-layout/ean13-barcode.md) — `<EAN>`
- [PDF](../../receipt-layout/print-pdf.md) — `<PDF>`
- [Open cash drawer](../../device-actions/open-cash-drawer.md) — `<PULSE/>`
- [Autocut](../../device-actions/autocut.md) — `<CUT/>`
- Parameter tags: [Wi-Fi](../../parameter-tags/wifi.md), [audible beep](../../parameter-tags/audible-beep.md), [NTP](../../parameter-tags/ntp-clock.md), [APN](../../parameter-tags/apn-mobile-data.md), [keep-alive](../../parameter-tags/keep-alive.md)

## Response — 200 OK

| Field | Type | Description |
| --- | --- | --- |
| `request_uid` | string | Unique identifier for the queued print job. |
| `request_timestamp` | string | Unix timestamp (seconds) when the platform accepted the job. |

```json
{
  "request_uid": "2XVXPN95E7RHYFJZCGMK8DSB634",
  "request_timestamp": "1776680582"
}
```

## Examples

### curl

```bash
curl -X POST "https://www.expedy.fr/api/v2/printers/XG9DMFPKB2C/print" \
  -H "Authorization: $EXPEDY_API_SID:$EXPEDY_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "printer_msg": "<C><BOLD>Order #4521</BOLD></C><BR>Coffee x1<BR>Croissant x2<BR><CUT/>",
    "origin": "pos/checkout"
  }'
```

### Node.js — SDK

```ts
import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const { request_uid, request_timestamp } = await client.printers.createPrintJob(
  "XG9DMFPKB2C",
  {
    printer_msg:
      "<C><BOLD>Order #4521</BOLD></C><BR>Coffee x1<BR>Croissant x2<BR><CUT/>",
    origin: "pos/checkout",
  },
);
```

### Node.js — raw `fetch`

```ts
const response = await fetch(
  `https://www.expedy.fr/api/v2/printers/${printerUid}/print`,
  {
    method: "POST",
    headers: {
      Authorization: `${process.env.EXPEDY_API_SID}:${process.env.EXPEDY_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ printer_msg: "<C>Hello</C><BR><CUT/>" }),
  },
);
```

## See also

- [Printers vs. devices](../../concepts/printers-vs-devices.md) — when to use this endpoint instead of the USB variant.
- [Generic receipt sample](../../samples/generic-receipt.md) — a full `printer_msg` with logo, text, QR and cut.
