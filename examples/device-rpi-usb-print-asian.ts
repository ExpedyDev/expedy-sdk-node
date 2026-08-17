import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const deviceUid = process.env.EXPEDY_DEVICE_UID!;
const usbPort = Number(process.env.EXPEDY_USB_PORT ?? 1);

// Discover what is attached first, if needed.
const conf = await client.devices.usb.getConfiguration(deviceUid);
const port = conf.usb_conf.find((p) => p.usb_port === usbPort);
if (!port || port.usb_status !== 1) {
  throw new Error(`USB port ${usbPort} is not ready on device ${deviceUid}.`);
}

// `printer_han` works the same way on ESC/POS printers attached over USB as
// it does on Expedy cloud printers — required for Chinese, Japanese and
// Korean text, and the printer has to carry the matching font in ROM.
// See: docs/receipt-layout/asian-characters.md
const { request_uid } = await client.devices.usb.createPrintJob(
  deviceUid,
  usbPort,
  {
    usb_msg: "<C><BOLD>注文 #1234</BOLD></C><BR>コーヒー x1<BR><CUT/>",
    printer_han: "jp", // "cn" Chinese · "kr" Korean · "jp" Japanese
    notification_url: "https://api.example.com/webhooks/expedy",
    origin: "example/device-rpi-usb-print-asian",
  },
);

console.log(`Queued USB print job ${request_uid}`);
