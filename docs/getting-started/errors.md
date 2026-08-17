# Errors

## SDK error types

`client.request()` throws one of two error classes, both exported from the package root.

### `ExpedyError`

Thrown for anything that happens **before** a response is available: a network failure, or
missing `apiSid` / `apiToken` at construction time.

```ts
export class ExpedyError extends Error {
  readonly cause?: unknown;
}
```

### `ExpedyApiError`

Thrown for any **non-2xx** HTTP response. Extends `ExpedyError`.

```ts
export class ExpedyApiError extends ExpedyError {
  readonly status: number;      // HTTP status code
  readonly rawBody: unknown;    // parsed JSON body, or the raw text if parsing failed
  readonly requestUid?: string; // present when the response body included a request_uid
}
```

```ts
import { ExpedyApiError, ExpedyError } from "expedy-sdk-node";

try {
  await client.printers.createPrintJob(printerUid, { printer_msg: "<C>Hi</C><CUT/>" });
} catch (err) {
  if (err instanceof ExpedyApiError) {
    console.error(`Expedy API ${err.status}: ${err.message}`);
  } else if (err instanceof ExpedyError) {
    console.error(`Network / config error: ${err.message}`, err.cause);
  } else {
    throw err;
  }
}
```

**Always read the `message` field rather than relying on the status code alone.** The API
returns a JSON envelope on every non-2xx response:

```json
{ "message": "Invalid printer" }
```

`err.message` (built by the SDK) already embeds this text; `err.rawBody` gives you the
parsed envelope if you need to branch on more than the message string.

## Status codes by endpoint

### `POST /printers/{printer_uid}/print`

| Status | Meaning |
| --- | --- |
| `401` / `403` | Missing or invalid credentials (`SID` / `TOKEN`). |
| `422` | The request could not be processed — e.g. an unknown `printer_uid` or a malformed body. |

### `GET /printers/all`

| Status | Meaning |
| --- | --- |
| `401` / `403` | Missing or invalid credentials. |

### `POST /devices/{device_uid}/usb/{usb_port}/print`

| Status | Meaning |
| --- | --- |
| `403` | Missing or invalid credentials, or the device does not belong to this account. |
| `404` | Unknown `device_uid`, or no configured printer on that `usb_port`. |
| `405` | Wrong HTTP method — this endpoint is `POST` only. |
| `422` | Empty or malformed `usb_msg`. |
| `500` | The job could not be handed to the device. Retry, then contact [support](https://help.expedy.io/support/tickets/new) if it persists. |

Other `devices` endpoints (`ping`, `reboot`, Wi-Fi configuration, …) share the same
`401` / `403` credential errors; consult each endpoint's page under
[`docs/api/devices/`](../api/devices/) for anything endpoint-specific.

## Retry guidance

Only retry on a network error (`ExpedyError` without a `status`) or a `5xx`
`ExpedyApiError`. A `4xx` means the request itself is invalid — retrying it unchanged will
fail again. See [delivery and idempotency](../concepts/delivery-and-idempotency.md) before
adding any retry logic, since the print endpoints do not de-duplicate.

## See also

- [Delivery and idempotency](../concepts/delivery-and-idempotency.md)
- [Create a print job](../api/printers/create-print-job.md)
- [Create a USB print job](../api/devices/usb/create-usb-print-job.md)
