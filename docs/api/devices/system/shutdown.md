# Shut a device down

Shut the Raspberry Pi down remotely.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/shutdown
```

> ⚠️ **Use with care.** Once shut down, the device cannot be started again without physical access. This endpoint is typically used to safely power the device off before physically relocating it.

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
await client.devices.system.shutdown("MMAAZ112PI");
```
