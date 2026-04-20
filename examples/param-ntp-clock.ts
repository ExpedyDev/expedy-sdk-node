import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// Point the printer's clock to a public NTP server.
await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg: "<SETSNTP>time.google.com</SETSNTP>",
  origin: "example/param-ntp-clock",
});
