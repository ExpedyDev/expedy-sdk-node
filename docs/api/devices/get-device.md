# Get a device

Return the summary and status of a single Raspberry Pi gateway.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}
```

## Authentication

See [Authentication](../../getting-started/authentication.md).

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `device_uid` | string | yes | The device's unique ID, as found in your Expedy account. |

## Response — 200 OK

Same shape as one element of [List devices](./list-devices.md).

```json
{
  "device_uid": "MMAAZ112PI",
  "rpi_nickname": "Lobby welcome displays",
  "version": "4.5.1",
  "last_ping": "1657333235",
  "rpi_disk_size": "25",
  "rpi_vid_list": "1_8R9VAPYBY24;1_D5JNX9PASFM;1_K7Y26X3R7IQ;1_NY4RW9GHX96;"
}
```

## Examples

### curl

```bash
curl "https://www.expedy.fr/api/v2/devices/MMAAZ112PI" \
  -H "Authorization: $EXPEDY_API_SID:$EXPEDY_API_TOKEN"
```

### Node.js — SDK

```ts
const device = await client.devices.get("MMAAZ112PI");
```
