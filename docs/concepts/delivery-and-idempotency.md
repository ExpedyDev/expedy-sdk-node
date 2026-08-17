# Delivery and idempotency

## A `200` means "accepted", not "printed"

Both print endpoints are asynchronous. A `200 OK` confirms the job was **received and
queued** by the Expedy platform — it does not guarantee paper output.

- **`printers`** — the server hands the job to the cloud printer the next time it connects.
  The printer may be offline, out of paper, powered off, or unreachable on its network / SIM
  at that moment.
- **`devices`** (Raspberry Pi + USB printer) — same asynchronous handoff, plus the extra hop
  from the Pi to the USB printer. Pass `notification_url` to be told once the job has
  actually been handed to the printer, rather than assuming it printed.

Use the returned `request_uid` to reference the job in your own logs and in support
requests — it is your correlation ID between "I sent this" and "what actually happened".

## No de-duplication

Every accepted request produces a print. **Neither endpoint de-duplicates.** If you retry a
request after a network error, and the first attempt actually reached the server, you will
get two tickets.

Guard against this on your side:

- Track `request_uid` per business event (order, ticket, label) and skip re-sending once
  you have one.
- Mark the order "printed" only after a `200` — not optimistically before the call.
- Only retry on a network error or a `5xx` — see [Errors](../getting-started/errors.md). A
  `4xx` will not become printable by resending the same body.

## Signals to watch

| Signal | Endpoint | What it tells you |
| --- | --- | --- |
| `request_uid` | both | Correlate the call with what shows up in the [console](https://www.expedy.fr/console/) print history. |
| `last_ping` | `devices` | Unix timestamp of the device's last contact with the server. Far in the past ⇒ the device was not online when you sent the job. |
| `notification_url` callback | `devices` | Fired once the job is actually handed to the USB printer — the closest thing to a delivery confirmation available today. |
| `printer_status` | `GET /printers/all` | An **administrative** activation flag (`"1"` active, `"0"` suspended), not live connectivity. Send a test print to check reachability. |

## USB ports need prior configuration

A USB port on a Raspberry Pi gateway only accepts jobs once a printer has been **detected
and configured** on it. If the port is empty, or was never configured, the job is rejected.
Use [`GET /devices/{device_uid}/usb/scan`](../api/devices/usb/scan-ports.md) followed by
[`GET /devices/{device_uid}/usb/scan/read`](../api/devices/usb/get-scan-result.md) to
discover what is plugged in, then [`GET /devices/{device_uid}/usb/conf`](../api/devices/usb/get-configuration.md)
to confirm the saved configuration before printing — see
[`examples/device-rpi-usb-print.ts`](../../examples/device-rpi-usb-print.ts) for the pattern.

## Keep content within the paper width

`printer_msg` / `usb_msg` is not wrapped for you: 32 characters per line at 58 mm, 48 at
80 mm (fewer for CJK text — see [Asian characters](../receipt-layout/asian-characters.md)).
See the [layout reference](../receipt-layout/text-layout-tags.md).

## See also

- [Errors](../getting-started/errors.md)
- [Create a print job](../api/printers/create-print-job.md)
- [Create a USB print job](../api/devices/usb/create-usb-print-job.md)
