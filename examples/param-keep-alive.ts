import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// 45s is the recommended interval: short enough that routers don't drop the
// connection, long enough to keep mobile-data usage modest.
await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg: "<SETKEEPALIVE>45</SETKEEPALIVE>",
  origin: "example/param-keep-alive",
});
