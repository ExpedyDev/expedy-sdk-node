# QR code — `<QR>`

Generate a QR code from the provided content (URL, phone number, email, or plain text). The printer automatically encodes the data into a scannable format.

```text
<QR>https://www.example.com</QR>
<QR>tel:+12025550147</QR>
<QR>mailto:hello@example.com</QR>
```

Any string is supported — common prefixes are just examples.

## Centering

Wrap the `<QR>` tag in `<C>` to center it on the receipt. Ideal for call-to-action content such as directions, reviews, digital menus, or promo codes.

```text
<C><QR>https://www.google.com/maps/dir/?api=1&destination=Disneyland+Park,+Anaheim,+CA</QR></C>
```

## Node.js example

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: [
    "<C>Scan to open the menu</C>",
    "<BR>",
    "<C><QR>https://menu.example.com/table/12</QR></C>",
    "<BR>",
    "<CUT/>",
  ].join(""),
});
```
