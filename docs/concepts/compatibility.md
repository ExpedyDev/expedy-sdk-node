# Printer compatibility

The Expedy tag language is designed for:

- **Expedy cloud thermal receipt printers** (official hardware).
- **ESC/POS-compatible thermal printers** in general.

Other printer families reached through a Raspberry Pi (`devices` resource) cover non-thermal media such as shipping labels, product labels with expiry date + weight, gift cards or photo prints.

> Other brands may be compatible — the list will be completed over time as more models are certified. If you need confirmation for a specific model, contact Expedy support.

## Known-good USB printer examples (as reported by the device scan endpoint)

These manufacturers/models have been returned by `GET /devices/{device_uid}/usb/conf` in live deployments — they are examples, **not an exhaustive compatibility matrix**:

- Datamax-O'Neil E-Class MarkIII
- Caysn thermal printers (80 mm)

Use [`GET /devices/{device_uid}/usb/scan`](../api/devices/usb/scan-ports.md) followed by [`GET /devices/{device_uid}/usb/scan/read`](../api/devices/usb/get-scan-result.md) to discover what your Raspberry Pi actually sees on each USB port.
