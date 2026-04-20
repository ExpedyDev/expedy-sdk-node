# Printer compatibility

## Expedy Cloud Printer (IoT device)

The Expedy cloud thermal receipt printer is a **connected IoT device** — unlike standard ticket printers on the market, it connects directly to the internet via **Ethernet or SIM 3G/4G**. This allows it to receive print jobs remotely without any intermediate computer or driver.

This is what makes the Expedy printer fundamentally different from all other ESC/POS receipt printers: a standard Epson, Citizen or Star ticket printer has no internet connectivity and cannot receive cloud print commands on its own.

## ESC/POS thermal receipt printers (via Raspberry Pi USB)

Thermal receipt printers that speak **ESC/P or ESC/POS** (the industry-standard command set) are compatible for:

- **Building and formatting receipts** using the Expedy tag language
- **Local USB printing** via a Raspberry Pi (`devices` resource)

However, these printers **cannot receive print jobs directly from the Expedy cloud** — they are not connected to the internet. A Raspberry Pi acts as the local bridge.

Common ESC/POS receipt printer brands and example models:

| Brand | Example models |
|-------|---------------|
| Epson | TM-T20, TM-T20II, TM-T88V, TM-T88VI, TM-T70, TM-U220 |
| Citizen | CT-S310, CT-S310II, CT-S651, CT-E351, CT-S4000 |
| Star Micronics | TSP143, TSP654, TSP700II, SP742 |
| Bixolon | SRP-350III, SRP-330II |
| Sewoo | LK-T212, LK-T312 |
| SNBC | BTP-R880NP |

## Label, document and photo printers (via Raspberry Pi USB)

The Raspberry Pi USB API (`devices` resource) also supports label and document printers, including brands such as **Netum**, **Zebra**, **Brother**, Datamax-O'Neil, and many others.

Use [`GET /devices/{device_uid}/usb/scan`](../api/devices/usb/scan-ports.md) followed by [`GET /devices/{device_uid}/usb/scan/read`](../api/devices/usb/get-scan-result.md) to discover what your Raspberry Pi sees on each USB port, then [`GET /devices/{device_uid}/usb/conf`](../api/devices/usb/get-configuration.md) to retrieve the detected printer model.

## USB-compatible printers (non-exhaustive list)

The following printers have been reported as compatible with the Raspberry Pi USB connection. This list is **not exhaustive and not guaranteed** — compatibility depends on your OS and driver availability.

<!-- PRINTER LIST START — paste the Brand/Model table here -->
