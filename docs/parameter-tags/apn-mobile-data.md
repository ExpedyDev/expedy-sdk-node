# APN mobile data — `<SETAPN>`

Configure the APN used by the printer to connect to a mobile-data network.

```text
<SETAPN>apn</SETAPN>
```

| Parameter | Description |
| --- | --- |
| `apn` | The APN provided by your mobile carrier (e.g. `orange.fr`). |

## Node.js example

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<SETAPN>orange.fr</SETAPN>",
});
```
