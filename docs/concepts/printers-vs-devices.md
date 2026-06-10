# Printers vs. devices

The Expedy API splits its hardware into two resources. Picking the right one is the single most important decision when you integrate.

| | `printers` | `devices` |
| --- | --- | --- |
| **What it is** | A direct connection to an **Expedy cloud thermal receipt printer**. | A connection to an **Expedy-managed gateway** (today: Raspberry Pi) driving a third-party USB printer. |
| **Hardware** | [Expedy cloud printer](https://www.expedy.io/product) (thermal). | [Expedy Raspberry Pi](https://www.expedy.io/raspberry-pi) + any supported USB printer plugged into it. |
| **Print endpoint** | `POST /printers/{printer_uid}/print` | `POST /devices/{device_uid}/usb/{usb_port}/print` |
| **Payload field** | `printer_msg` | `usb_msg` |
| **Typical media** | 58 / 80 / 104 mm thermal receipt paper. | Labels (shipping, product, gift card), A4 paper, photo paper — anything the attached printer supports. |
| **Typical use cases** | Order tickets, preparation slips, POS receipts, information notifications — **restaurants, hospitality**. | Scenarios that need a non-thermal medium: transport labels, personalized gift cards, bulk-product labels with expiry date + weight, photo prints… |

## How to choose

- **If it's a receipt** (ticket, order, info notification, coupon), use **`printers`**.
- **If it's a label or any other non-thermal medium**, use **`devices` + a USB port** on the Raspberry Pi.

The tag language used inside `printer_msg` — layout, actions, parameter tags — works identically inside `usb_msg` **when the attached printer is ESC/POS**. For label / PDF printers attached to the Pi, `usb_msg` is simply the raw URL of the PDF to print (see [Print PDF](../receipt-layout/print-pdf.md)).

## Related

- [Printer compatibility](./compatibility.md)
- [Create a print job (`printers`)](../api/printers/create-print-job.md)
- [Create a USB print job (`devices`)](../api/devices/usb/create-usb-print-job.md)
