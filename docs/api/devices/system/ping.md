# Ping a device

Ask the device to ping back the platform. Combined with a subsequent read of `last_ping`, this is a reliable way to confirm the device is online.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/ping
```

## Authentication

See [Authentication](../../../getting-started/authentication.md).

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `device_uid` | string | yes | The device's unique ID. |

## Response — 200 OK

| Field | Type | Description |
| --- | --- | --- |
| `last_ping` | number | Unix timestamp (seconds) of the ping acknowledged by the platform. |

```json
{ "last_ping": 1641509604 }
```

## Examples

### Node.js — SDK

```ts
const { last_ping } = await client.devices.system.ping("MMAAZ112PI");
```
