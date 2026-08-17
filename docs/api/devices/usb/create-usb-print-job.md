# Create a USB print job

Queue a print job on a printer attached to one of the device's USB ports.

```
POST https://www.expedy.fr/api/v2/devices/{device_uid}/usb/{usb_port}/print
```

> Not sure whether to print through this endpoint or [`POST /printers/{printer_uid}/print`](../../printers/create-print-job.md)? See [printers vs. devices](../../../concepts/printers-vs-devices.md).

## Authentication

See [Authentication](../../../getting-started/authentication.md).

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `device_uid` | string | yes | The device's unique ID. |
| `usb_port` | string / number | yes | USB port number (typically `1` to `4`). Confirm what's attached via [`/usb/conf`](./get-configuration.md) or [`/usb/scan/read`](./get-scan-result.md). |

## Request body

Content-Type: `application/json`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `usb_msg` | string | yes | Payload sent to the printer. For ESC/POS thermal printers, this accepts the **same tag language** as [`printer_msg`](../../printers/create-print-job.md#building-the-printer_msg-payload). For label / PDF printers, send the **raw HTTPS URL** of the PDF (no tag wrapper — see [Print PDF](../../../receipt-layout/print-pdf.md)). |
| `notification_url` | string | no | URL the print service calls once it has handed the job to the printer. |
| `origin` | string | no | Free-form identifier echoed in the Expedy console. |
| `printer_han` | string | no | Script used to compose the receipt: `cn` Chinese, `kr` Korean, `jp` Japanese (`1` accepted as a synonym of `cn`). Omit for Latin scripts. Same rules as on the `printers` endpoint — see [Asian characters](../../../receipt-layout/asian-characters.md). |

```json
{
  "usb_msg": "https://cdn.example.com/shipping-label-4521.pdf",
  "notification_url": "https://api.example.com/webhooks/expedy",
  "origin": "warehouse/outbound"
}
```

### Chinese, Japanese and Korean text

CJK characters need the `printer_han` field or they print as `?` — see
[Asian characters](../../../receipt-layout/asian-characters.md) for the full explanation.

```ts
await client.devices.usb.createPrintJob(deviceUid, 1, {
  usb_msg: "<C><BOLD>注文 #1234</BOLD></C><BR><CUT/>",
  printer_han: "jp",
});
```

## Response — 200 OK

A `200` confirms the job was **accepted and queued**, not that it printed — delivery is
asynchronous and the printer may be offline. Pass `notification_url` to know what actually
happened. See [delivery and idempotency](../../../concepts/delivery-and-idempotency.md).

| Field | Type | Description |
| --- | --- | --- |
| `last_ping` | number | Unix timestamp (seconds) of the device's last contact with the server. A value far in the past means the device was not online when you sent the job. |
| `request_uid` | string | Unique identifier for the queued job. |

```json
{
  "last_ping": 1641509604,
  "request_uid": "1X5ERXL94BYVWHP92DK3MCASUGJ"
}
```

## Examples

### curl

```bash
curl -X POST "https://www.expedy.fr/api/v2/devices/MMAAZ112PI/usb/1/print" \
  -H "Authorization: $EXPEDY_API_SID:$EXPEDY_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"usb_msg":"https://cdn.example.com/shipping-label-4521.pdf"}'
```

### Node.js — SDK

```ts
await client.devices.usb.createPrintJob("MMAAZ112PI", 1, {
  usb_msg: "https://cdn.example.com/shipping-label-4521.pdf",
  origin: "warehouse/outbound",
});
```

## See also

- [Asian characters](../../../receipt-layout/asian-characters.md) — `printer_han` for Chinese, Japanese and Korean.
- [Delivery and idempotency](../../../concepts/delivery-and-idempotency.md)
- [Errors](../../../getting-started/errors.md)
