# NTP clock — `<SETSNTP>`

Keep the printer's clock accurate by pointing it to an NTP server — essential for timestamped receipts, logs, and compliance.

```text
<SETSNTP>time.google.com</SETSNTP>
```

## Node.js example

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<SETSNTP>time.google.com</SETSNTP>",
});
```
