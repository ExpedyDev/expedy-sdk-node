# Audible beep — `<UNSETBEEP/>`

Disable the audible alarm on compatible printers.

```text
<UNSETBEEP/>
```

## Node.js example

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<UNSETBEEP/>",
});
```
