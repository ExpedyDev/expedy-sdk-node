# Open the cash drawer — `<PULSE/>`

Triggers the cash drawer to open by sending the appropriate command to the printer (typically via an RJ11/RJ12 connection). Used in point-of-sale workflows after a successful transaction.

```text
<PULSE/>
```

The tag is embedded in the same [`printer_msg`](../api/printers/create-print-job.md) as the rest of the receipt. You can emit it alone to only open the drawer, or combine it with a ticket.

## Node.js examples

Drawer only:

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<PULSE/>",
});
```

Ticket followed by drawer:

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: [
    "<C><BOLD>Order #4521</BOLD></C>",
    "<BR>",
    "Total: 12.50 EUR",
    "<BR>",
    "<CUT/>",
    "<PULSE/>",
  ].join(""),
});
```
