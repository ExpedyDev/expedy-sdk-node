# Expedy Print API — Documentation

Welcome. This documentation covers the **Expedy Print API v2**, the HTTP surface you use to push print jobs to Expedy cloud thermal receipt printers or to Raspberry Pi gateways driving third-party USB printers.

> `displays` and `medias` are **out of scope** here. They will be documented in separate repositories.

## Reading order

1. [Concepts → Printers vs. devices](./concepts/printers-vs-devices.md) — the single most important page. It explains which resource to use and when.
2. [Concepts → Printer compatibility](./concepts/compatibility.md) — short, honest list of what's known to work today.
3. [Getting started → Authentication](./getting-started/authentication.md) — how the `Authorization` header is built.
4. [Getting started → Quickstart](./getting-started/quickstart.md) — send your first print job in ~10 lines of Node.

## API reference

### `printers` — Expedy cloud thermal receipt printer

- [`POST /printers/{printer_uid}/print` — Create a print job](./api/printers/create-print-job.md) ← flagship
- [`GET  /printers/all` — List printers](./api/printers/list-printers.md)

### `devices` — Raspberry Pi gateway

- [`GET  /devices/all` — List devices](./api/devices/list-devices.md)
- [`GET  /devices/{device_uid}` — Get a device](./api/devices/get-device.md)
- System: [`ping`](./api/devices/system/ping.md) · [`update`](./api/devices/system/update-firmware.md) · [`reboot`](./api/devices/system/reboot.md) · [`shutdown`](./api/devices/system/shutdown.md)
- USB printers: [`conf`](./api/devices/usb/get-configuration.md) · [`scan`](./api/devices/usb/scan-ports.md) · [`scan/read`](./api/devices/usb/get-scan-result.md) · [`{usb_port}/print`](./api/devices/usb/create-usb-print-job.md)
- Wi-Fi: [`conf`](./api/devices/wifi/get-configuration.md) · [`add`](./api/devices/wifi/add-ssid.md) · [`{wifi_id}/del`](./api/devices/wifi/delete-ssid.md) · [`update`](./api/devices/wifi/apply-update.md)

## Building a receipt payload

Everything below gets embedded **inside the `printer_msg` string** you POST to `/printers/{printer_uid}/print` (or `usb_msg` when printing via a USB-attached ESC/POS printer).

### Receipt layout

- [Text layout tags](./receipt-layout/text-layout-tags.md)
- [Images and logos](./receipt-layout/image-and-logo-printing.md)
- [QR code](./receipt-layout/qr-code.md)
- [EAN-13 barcode](./receipt-layout/ean13-barcode.md)
- [PDF](./receipt-layout/print-pdf.md)
- [Remove the "Printed using Expedy.io" footer](./receipt-layout/expedy-mention.md)

### Device actions

- [Open the cash drawer — `<PULSE/>`](./device-actions/open-cash-drawer.md)
- [Autocut — `<CUT/>`](./device-actions/autocut.md)

### Parameter tags (printer provisioning)

- [Wi-Fi — `<SETWIFI>`](./parameter-tags/wifi.md)
- [Audible beep — `<UNSETBEEP/>`](./parameter-tags/audible-beep.md)
- [NTP clock — `<SETSNTP>`](./parameter-tags/ntp-clock.md)
- [APN mobile data — `<SETAPN>`](./parameter-tags/apn-mobile-data.md)
- [Keep-alive — `<SETKEEPALIVE>`](./parameter-tags/keep-alive.md)

## Samples

- [Generic receipt](./samples/generic-receipt.md)
- [Generic notification](./samples/generic-notification.md)

Business-specific samples (restaurant, photo booth, promo QR, etc.) live in separate repositories.
