# Delete an SSID

Remove an SSID from the device's Wi-Fi configuration. The change is not applied until you call [apply update](./apply-update.md).

```
PATCH https://www.expedy.fr/api/v2/devices/{device_uid}/wifi/{wifi_id}/del
```

## Authentication

See [Authentication](../../../getting-started/authentication.md).

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `device_uid` | string | yes | The device's unique ID. |
| `wifi_id` | number | yes | ID of the SSID entry to remove, as returned by [`/wifi/conf`](./get-configuration.md). |

## Response — 200 OK

Same shape as [`GET /wifi/conf`](./get-configuration.md).

```json
{
  "last_ping": 1641491009,
  "wifi_conf": [
    { "wifi_id": 41, "wifi_ssid": "my_new_local_ssid",
      "wifi_psk": "***********************" }
  ]
}
```

## Examples

### Node.js — SDK

```ts
await client.devices.wifi.deleteSsid("MMAAZ112PI", 40);
await client.devices.wifi.applyUpdate("MMAAZ112PI");
```
