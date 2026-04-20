import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// <PULSE/> triggers the cash drawer via the printer's RJ11/RJ12 output.
await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg: "<PULSE/>",
  origin: "example/action-open-cash-drawer",
});
