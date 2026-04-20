# Get USB configuration

Return the last known USB port configuration of the device in JSON.

```
GET https://www.expedy.fr/api/v2/devices/{device_uid}/usb/conf
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
| `usb_conf` | array | One entry per USB port (up to 4, depending on the device model). |

Each `usb_conf[]` entry:

| Field | Type | Description |
| --- | --- | --- |
| `usb_port` | number | Port number (1–4). |
| `usb_status` | number | `1` if a printer is detected on this port, `0` otherwise. |
| `device_manufacturer` | string? | Manufacturer string reported by the attached printer. |
| `device_model` | string? | Model string reported by the attached printer. |
| `device_width` | number? | Printer paper width in millimetres, when detected. |

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
const conf = await client.devices.usb.getConfiguration("MMAAZ112PI");
for (const port of conf.usb_conf) {
  console.log(port.usb_port, port.usb_status, port.device_model ?? "-");
}
```
