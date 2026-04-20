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

// Send a shipping label (raw PDF URL — label printers don't use <PDF>).
const { request_uid } = await client.devices.usb.createPrintJob(
  deviceUid,
  usbPort,
  {
    usb_msg: "https://cdn.example.com/shipping-label-4521.pdf",
    notification_url: "https://api.example.com/webhooks/expedy",
    origin: "example/device-rpi-usb-print",
  },
);

console.log(`Queued USB print job ${request_uid}`);
