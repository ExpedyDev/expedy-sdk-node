# Text layout tags

Receipts are built using XML-like tags embedded in the `printer_msg` (or `usb_msg` for ESC/POS printers attached to a Raspberry Pi).

> ✅ Compatible with ESC/POS printers and Expedy printers only. See [compatibility](../concepts/compatibility.md).

## Character limits

| Paper width | Max characters per line |
| --- | --- |
| 58 mm | 32 |
| 80 mm | 48 |

- A space counts as **1 character**.
- A line break is automatically treated as a new line.
- Some ESC/POS printers may have different limits depending on font size and encoding set in their firmware.

## Tags

### `<BR>` — Line break

```text
Hello<BR>John
```

### `<BOLD>` — Bold text

```text
<BOLD>Hello</BOLD>
```

### `<C>` — Centered text

```text
<C>Hello</C>
```

### `<CB>` — Centered + double height

```text
<CB>Hello</CB>
```

### `<L>` — Double height

```text
<L>Hello</L>
```

### `<W>` — Double width

```text
<W>Hello</W>
```

### `<QR>` — QR code

See the dedicated [QR code](./qr-code.md) page.

### `<EAN>` — EAN-13 barcode

See the dedicated [EAN-13](./ean13-barcode.md) page.

### `<IMG>` — Image / logo

See the dedicated [images and logos](./image-and-logo-printing.md) page.

### `<PDF>` — PDF document

See the dedicated [PDF](./print-pdf.md) page.

### `<CUT/>` — Paper cut

Triggers the printer's automatic cutter.

```text
<CUT/>
```

See the [autocut](../device-actions/autocut.md) page.

### `<PULSE/>` — Cash drawer

Opens the cash drawer connected to the printer.

```text
<PULSE/>
```

See the [open cash drawer](../device-actions/open-cash-drawer.md) page.

## Full example

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: [
    "<C><BOLD>ORDER #4521</BOLD></C>",
    "<BR>",
    "<L>Espresso x1</L>",
    "<BR>",
    "<W>3.50 EUR</W>",
    "<BR>",
    "<CUT/>",
  ].join(""),
});
```
