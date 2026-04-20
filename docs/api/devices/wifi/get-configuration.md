# Get Wi-Fi configuration

Return the Wi-Fi SSIDs currently stored on the device. PSKs are masked.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/wifi/conf
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
| `last_ping` | number | Unix timestamp (seconds) of the last device ping. |
| `wifi_conf` | array | One entry per stored SSID. |

Each `wifi_conf[]` entry:

| Field | Type | Description |
| --- | --- | --- |
| `wifi_id` | number | Unique ID used by [delete SSID](./delete-ssid.md). |
| `wifi_ssid` | string | Network name. |
| `wifi_psk` | string | Pre-shared key (masked with `*` in the response). |

```json
{
  "status": "ok",
  "last_ping": 1641490999,
  "wifi_conf": [
    { "wifi_id": 40, "wifi_ssid": "my_local_ssid",
      "wifi_psk": "***********************" }
  ]
}
```

## Examples

### Node.js — SDK

```ts
const conf = await client.devices.wifi.getConfiguration("MMAAZ112PI");
```
