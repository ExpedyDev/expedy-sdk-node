# Asian characters — `printer_han`

Chinese, Japanese and Korean need the `printer_han` field, set to the script you are
printing. It is accepted on **both** print endpoints:

- [`POST /printers/{printer_uid}/print`](../api/printers/create-print-job.md) — cloud thermal printer
- [`POST /devices/{device_uid}/usb/{usb_port}/print`](../api/devices/usb/create-usb-print-job.md) — printer plugged into a Raspberry Pi gateway

| Value | Script |
| --- | --- |
| `cn` | Chinese (Hanzi) |
| `kr` | Korean (Hangul) |
| `jp` | Japanese (Kana / Kanji) |

`1` is still accepted as a synonym of `cn`, for older integrations.

## Why your CJK text prints as `?`

By default the receipt is composed in **single-byte mode**: each character is mapped
through one of the printer's code pages. No single-byte code page contains Hanzi, Kana or
Hangul, so **without this field every such character is replaced with a `?` before the job
even reaches the device**.

This is the single most common cause of a ticket full of `????` — the printer is fine, the
job was already mangled server-side.

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<C><BOLD>주문 #1234</BOLD></C><BR><CUT/>",
  printer_han: "kr",
});
```

## Three rules

### 1. The value has to match the script

Each value selects a different encoding and they do not overlap. Korean sent as `cn` comes
out as `?`, exactly as if the field had been left out.

```ts
// ❌ Korean text, Chinese encoding → ?
{ printer_msg: "주문 #1234", printer_han: "cn" }

// ✅
{ printer_msg: "주문 #1234", printer_han: "kr" }
```

If a single receipt mixes scripts, only the one matching `printer_han` renders — split the
job or keep the other script out of the ticket.

### 2. The printer has to carry the matching font

`printer_han` switches the data stream to multi-byte mode; the glyphs themselves come from
the **printer's font ROM**. A model shipped without that font will not print the characters
even with the right value — and a printer sold for the Chinese market carries Hanzi, which
does not mean it carries Hangul or Kana.

Test the exact script you need on the exact model you deploy. If the result is not
readable, [contact support](https://help.expedy.io/support/tickets/new).

### 3. Latin text does not need it

Leave `printer_han` out for European languages — accented characters (`é`, `ü`, `ñ`, `ç`)
are handled in the default single-byte mode.

If accents specifically come out wrong on an Expedy cloud printer, that is a **code page**
problem, not a `printer_han` one: set the printer's code page to `CP437` with the
PrinterSetting software. See
[Text encoding settings](https://docs.expedy.io/expedy-print/installation/text-encoding-settings).

## Always send UTF-8

Send your content as UTF-8 in every mode. The SDK serializes the request body with
`JSON.stringify` and `fetch` encodes it as UTF-8, so a JavaScript string containing CJK
needs no special handling on your side.

The API stores and returns exactly what it receives, so the **print history in the
[console](https://www.expedy.fr/console/) shows the text as it arrived** — the quickest way
to tell a data problem from a printer one:

- History shows `????` → the problem is upstream of Expedy (your encoding, your database).
- History shows `주문 #1234` but the paper shows `????` → `printer_han` is missing or wrong.
- History and paper both show `주문 #1234`, paper shows blanks or garbage glyphs → the
  printer is missing the font.

## Line width

The 32 / 48 characters-per-line limits documented in
[text layout tags](./text-layout-tags.md) describe single-byte Latin text. In multi-byte
mode a CJK glyph typically occupies the width of two Latin characters, and the exact
result depends on the printer's font. Lay out CJK receipts conservatively and confirm on
the target model.

## Full examples

### Cloud thermal printer

```ts
import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg: [
    "<C><BOLD>주문 #1234</BOLD></C>",
    "<BR>",
    "<C>테이블 7</C>",
    "<BR>",
    "비빔밥 x1",
    "<BR>",
    "김치찌개 x2",
    "<BR>",
    "<CUT/>",
  ].join(""),
  printer_han: "kr",
  origin: "pos/kitchen",
});
```

### ESC/POS printer on a Raspberry Pi gateway

```ts
await client.devices.usb.createPrintJob(deviceUid, 1, {
  usb_msg: "<C><BOLD>注文 #1234</BOLD></C><BR><CUT/>",
  printer_han: "jp",
  origin: "pos/kitchen",
});
```

### Typed values

`printer_han` is typed, so a typo is caught at compile time:

```ts
import type { PrinterHanScript } from "expedy-sdk-node";

const script: PrinterHanScript = "kr"; // "cn" | "kr" | "jp"
```

## See also

- [Create a print job](../api/printers/create-print-job.md)
- [Create a USB print job](../api/devices/usb/create-usb-print-job.md)
- [Text layout tags](./text-layout-tags.md)
- [Delivery and idempotency](../concepts/delivery-and-idempotency.md)
