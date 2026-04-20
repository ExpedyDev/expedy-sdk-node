# Get USB scan result

Return the device's last known USB scan result in JSON.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/usb/scan/read
```

## Authentication

See [Authentication](../../../getting-started/authentication.md).

## Path parameters

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `device_uid` | string | yes | The device's unique ID. |

## Response — 200 OK

Same shape as [`/usb/conf`](./get-configuration.md).

```json
{
  "last_ping": 1641511426,
  "usb_conf": [
    { "usb_port": 1, "usb_status": 1,
      "device_manufacturer": "Datamax-O`Neil",
      "device_model": "Datamax-O'Neil E-Class MarkIII" },
    { "usb_port": 2, "usb_status": 0 },
    { "usb_port": 3, "usb_status": 1,
      "device_manufacturer": "Caysn",
      "device_model": "Thermal Printer",
      "device_width": 80 },
    { "usb_port": 4, "usb_status": 0 }
  ]
}
```

## Examples

### Node.js — SDK

```ts
const scan = await client.devices.usb.readScan("MMAAZ112PI");
```
