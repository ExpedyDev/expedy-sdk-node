# Add an SSID

Add a new SSID to the device's Wi-Fi configuration. The change is not applied until you call [apply update](./apply-update.md).

```
PUT https://www.expedy.fr/api/v2/devices/{device_uid}/wifi/add
```

## Authentication

See [Authentication](../../../getting-started/authentication.md).

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `device_uid` | string | yes | The device's unique ID. |

## Request body

Content-Type: `application/json`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `wifi_ssid` | string | yes | Network name. |
| `wifi_psk` | string | yes | Pre-shared key. |

```json
{
  "wifi_ssid": "my_new_local_ssid",
  "wifi_psk": "my_new_ssid_password"
}
```

## Response — 200 OK

Same shape as [`GET /wifi/conf`](./get-configuration.md).

```json
{
  "status": "ok",
  "last_ping": 1641491009,
  "wifi_conf": [
    { "wifi_id": 40, "wifi_ssid": "my_local_ssid",
      "wifi_psk": "***********************" },
    { "wifi_id": 41, "wifi_ssid": "my_new_local_ssid",
      "wifi_psk": "***********************" }
  ]
}
```

## Examples

### Node.js — SDK

```ts
await client.devices.wifi.addSsid("MMAAZ112PI", {
  wifi_ssid: "my_new_local_ssid",
  wifi_psk: "my_new_ssid_password",
});
await client.devices.wifi.applyUpdate("MMAAZ112PI");
```
