# EAN-13 barcode — `<EAN>`

Generate an EAN-13 barcode from a **13-digit numeric** string. The printer automatically encodes the data into a scannable barcode format.

```text
<EAN>0123456789012</EAN>
```

Only numeric values are supported and they must be exactly 13 digits long.

## Node.js example

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: [
    "<C>Product code</C>",
    "<BR>",
    "<C><EAN>0123456789012</EAN></C>",
    "<BR>",
    "<CUT/>",
  ].join(""),
});
```
