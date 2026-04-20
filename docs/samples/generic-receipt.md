# Sample — generic receipt

Vendor-neutral end-to-end receipt. Shows a header logo, a bold title, a few lines of text, a centered QR code, and a cut.

> Business-specific samples (restaurant tickets, photo booth receipts, promo coupons, etc.) are intentionally **not** documented here — they ship in dedicated repositories.

```ts
import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const printer_msg = [
  "<IMG>https://cdn.example.com/logo-602px.png</IMG>",
  "<BR>",
  "<C><BOLD>RECEIPT</BOLD></C>",
  "<BR>",
  "Item A",
  "<BR>",
  "Item B",
  "<BR>",
  "Item C",
  "<BR>",
  "<C>Scan to leave a review</C>",
  "<BR>",
  "<C><QR>https://example.com/review</QR></C>",
  "<BR>",
  "<CUT/>",
].join("");

await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg,
  origin: "sample/generic-receipt",
});
```

Tag reference: [text layout](../receipt-layout/text-layout-tags.md) · [images](../receipt-layout/image-and-logo-printing.md) · [QR](../receipt-layout/qr-code.md) · [autocut](../device-actions/autocut.md).
