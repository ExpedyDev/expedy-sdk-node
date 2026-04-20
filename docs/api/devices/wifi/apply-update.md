# Apply Wi-Fi update

Push any pending Wi-Fi configuration change (add / delete SSID) to the device.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/wifi/update
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
await client.devices.wifi.applyUpdate("MMAAZ112PI");
```
