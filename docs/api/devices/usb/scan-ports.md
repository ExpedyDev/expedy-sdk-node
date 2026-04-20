# Scan USB ports

Trigger a fresh scan of the device's USB ports for any compatible printer connected (up to 4, depending on the device model). Use [`GET /devices/{device_uid}/usb/scan/read`](./get-scan-result.md) afterwards to read the result.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/usb/scan
```

## Authentication

See [Authentication](../../../getting-started/authentication.md).

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `device_uid` | string | yes | The device's unique ID. |

## Response — 200 OK

```json
{ "last_ping": 1641509604 }
```

## Examples

### Node.js — SDK

```ts
await client.devices.usb.scan("MMAAZ112PI");
const scan = await client.devices.usb.readScan("MMAAZ112PI");
```
