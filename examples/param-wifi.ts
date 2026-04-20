import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// Provision the printer's Wi-Fi directly from a print job payload.
await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg: "<SETWIFI>MyCafeSSID<ssid/pwd>MyCafePassword</SETWIFI>",
  origin: "example/param-wifi",
});
