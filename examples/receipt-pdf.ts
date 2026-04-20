import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// 1) Thermal ESC/POS printer: wrap the PDF URL in <PDF>.
await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg: "<PDF>https://cdn.example.com/order-4521.pdf</PDF><CUT/>",
  origin: "example/receipt-pdf-thermal",
});

// 2) Label printer attached to a Raspberry Pi USB port: send the raw URL as
//    usb_msg, with no tag wrapper.
await client.devices.usb.createPrintJob(
  process.env.EXPEDY_DEVICE_UID!,
  Number(process.env.EXPEDY_USB_PORT ?? 1),
  {
    usb_msg: "https://cdn.example.com/shipping-label-4521.pdf",
    origin: "example/receipt-pdf-label",
  },
);
