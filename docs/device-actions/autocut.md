# Autocut — `<CUT/>`

Triggers the receipt printer to cut the paper.

```text
<CUT/>
```

You can place `<CUT/>` at the end of your receipt, or several times in the same job — for example the order first, followed by a second ticket with a promotional QR code.

## Examples

Single cut at the end:

```text
ORDER #4521<BR>
Coffee x1<BR>
<CUT/>
```

Two tickets in one job:

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: [
    "<C><BOLD>Order #4521</BOLD></C>",
    "<BR>",
    "Coffee x1",
    "<BR>",
    "<CUT/>",
    "<C>Promo — 10% off next visit</C>",
    "<BR>",
    "<C><QR>https://example.com/promo/XYZ</QR></C>",
    "<BR>",
    "<CUT/>",
  ].join(""),
});
```
