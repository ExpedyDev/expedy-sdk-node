# Update device firmware

Initiate a software update on the device if any is available.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/update
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
await client.devices.system.update("MMAAZ112PI");
```
