# List devices

Return every Raspberry Pi gateway owned by the authenticated account.

```
GET https://www.expedy.fr/api/v2/devices/all
```

See the [printers vs. devices](../../concepts/printers-vs-devices.md) page if you're unsure whether to list devices or [printers](../printers/list-printers.md).

## Authentication

See [Authentication](../../getting-started/authentication.md).

## Response — 200 OK

Array of device objects.

| Field | Type | Description |
| --- | --- | --- |
| `device_uid` | string | Unique ID used in all `/devices/{device_uid}/…` endpoints. |
| `version` | string | Firmware version currently running on the Pi. |
| `last_ping` | string | Unix timestamp (seconds) of the last successful ping. |
| `rpi_nickname` | string | Human name configured in the Expedy console. |
| `rpi_disk_size` | string | Total disk size of the device, in GB. |
| `rpi_vid_list` | string | Semicolon-separated list of media/display IDs bound to this device. Belongs to the `displays` / `medias` resources, documented separately. |

```json
[
  {
    "device_uid": "MMAAZ112PI",
    "version": "4.5.1",
    "last_ping": "1657333235",
    "rpi_nickname": "Lobby welcome displays",
    "rpi_disk_size": "50",
    "rpi_vid_list": "1_8R9VAPYBY24;1_D5JNX9PASFM;1_K7Y26X3R7IQ;1_NY4RW9GHX96;"
  }
]
```

## Examples

### curl

```bash
curl "https://www.expedy.fr/api/v2/devices/all" \
  -H "Authorization: $EXPEDY_API_SID:$EXPEDY_API_TOKEN"
```

### Node.js — SDK

```ts
const devices = await client.devices.list();
```
