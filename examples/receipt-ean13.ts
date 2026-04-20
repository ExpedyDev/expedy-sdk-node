import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// EAN-13 requires exactly 13 numeric digits.
const printer_msg = [
  "<C>Product code</C>",
  "<BR>",
  "<C><EAN>0123456789012</EAN></C>",
  "<BR>",
  "<CUT/>",
].join("");

await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg,
  origin: "example/receipt-ean13",
});
