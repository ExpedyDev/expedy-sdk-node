# Keep-alive — `<SETKEEPALIVE>`

Set the keep-alive interval used to maintain a stable connection between the printer and the Cloud Print server. Critical for reliable printing over mobile data or restrictive networks.

```text
<SETKEEPALIVE>300</SETKEEPALIVE>
```

| Parameter | Description |
| --- | --- |
| `<value>` | Interval in seconds between each ping. |

> ⚠️ The shorter the interval, the higher the mobile-data consumption.
> **45 seconds** is recommended — some routers and internet boxes drop connections that stay idle for more than 60 seconds.

## Node.js example

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<SETKEEPALIVE>45</SETKEEPALIVE>",
});
```
