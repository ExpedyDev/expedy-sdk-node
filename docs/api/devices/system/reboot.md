# Reboot a device

Trigger a remote reboot of the Raspberry Pi.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/reboot
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
await client.devices.system.reboot("MMAAZ112PI");
```
