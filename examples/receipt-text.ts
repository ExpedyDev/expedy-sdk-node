import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const printer_msg = [
  "<C><BOLD>HELLO WORLD</BOLD></C>",
  "<BR>",
  "<L>Double height</L>",
  "<BR>",
  "<W>Double width</W>",
  "<BR>",
  "<CB>CENTERED + DOUBLE HEIGHT</CB>",
  "<BR>",
  "Plain line left-aligned.",
  "<BR>",
  "<CUT/>",
].join("");

await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg,
  origin: "example/receipt-text",
});
