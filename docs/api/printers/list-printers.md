# List printers

Return every Expedy cloud thermal printer owned by the authenticated account.

```
GET https://www.expedy.fr/api/v2/printers/all
```

## Authentication

See [Authentication](../../getting-started/authentication.md).

## Response — 200 OK

Array of printer objects.

| Field | Type | Description |
| --- | --- | --- |
| `printer_uid` | string | Unique ID used in [`POST /printers/{printer_uid}/print`](./create-print-job.md). |
| `printer_name` | string | Human name configured in the Expedy console (e.g. `"Lobby"`, `"Kitchen"`). |
| `printer_status` | string | `"1"` active, `"0"` suspended. |
| `printer_width` | string | Paper width in millimetres (`"58"`, `"80"`, `"104"`). |
| `printer_graphic_mode` | string | `"0"` Graphics (default), `"1"` BitImageRaster, `"2"` BitImageColumn. Set in the Expedy console. |
| `printer_print_mode` | string | Selected print mode. Set in the Expedy console. |

> ℹ️ **`printer_status` is an activation flag, not a live connectivity check.** It is an
> administrative flag controlled solely by ExpedyPRINT — `"0"` means the printer has been
> suspended (usually a billing issue) and will not print until reactivated. To verify that
> an active printer is physically reachable, send a test print rather than relying on this
> field.

```json
[
  { "printer_uid": "UP3VS5JXRYA", "printer_name": "Lobby",
    "printer_status": "1", "printer_width": "58",
    "printer_graphic_mode": "0", "printer_print_mode": "0" },
  { "printer_uid": "MMAAZ112PI", "printer_name": "Kitchen",
    "printer_status": "1", "printer_width": "80",
    "printer_graphic_mode": "0", "printer_print_mode": "0" },
  { "printer_uid": "8L35EGFH8S7", "printer_name": "Warehouse",
    "printer_status": "1", "printer_width": "104",
    "printer_graphic_mode": "0", "printer_print_mode": "1" }
]
```

## Examples

### curl

```bash
curl "https://www.expedy.fr/api/v2/printers/all" \
  -H "Authorization: $EXPEDY_API_SID:$EXPEDY_API_TOKEN"
```

### Node.js — SDK

```ts
import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const printers = await client.printers.list();
for (const p of printers) {
  console.log(`${p.printer_uid}\t${p.printer_name}\t${p.printer_width}mm`);
}
```
