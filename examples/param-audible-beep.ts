import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// Silence the printer's audible alarm.
await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg: "<UNSETBEEP/>",
  origin: "example/param-audible-beep",
});
