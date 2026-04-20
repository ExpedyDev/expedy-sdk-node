# Print PDF — `<PDF>`

Prints a PDF document directly from a provided HTTPS URL. The path differs depending on the target printer.

## ESC/POS thermal printers

For standard ESC/POS receipt printers, wrap the PDF URL with the `<PDF>` tag. The system fetches and processes the document.

```text
<PDF>https://www.example.com/document.pdf</PDF>
```

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<PDF>https://cdn.example.com/order-4521.pdf</PDF><CUT/>",
});
```

## Label printers (Raspberry Pi USB or Cloud Print USB Adapter)

For label printers connected via a Raspberry Pi USB port or the Cloud Print USB Adapter, the PDF must be sent **without any tag**. The URL is handled directly as a print job.

```text
https://www.example.com/label.pdf
```

```ts
await client.devices.usb.createPrintJob(deviceUid, 1, {
  usb_msg: "https://cdn.example.com/shipping-label-4521.pdf",
});
```

See [create a USB print job](../api/devices/usb/create-usb-print-job.md) for the full endpoint reference.
