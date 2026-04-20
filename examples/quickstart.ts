import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const { request_uid, request_timestamp } = await client.printers.createPrintJob(
  process.env.EXPEDY_PRINTER_UID!,
  {
    printer_msg: "<C><BOLD>Hello, Expedy!</BOLD></C><BR><BR><CUT/>",
    origin: "quickstart",
  },
);

console.log(`Queued print job ${request_uid} at ${request_timestamp}`);
