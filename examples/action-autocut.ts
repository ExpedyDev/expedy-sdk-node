import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// Two cuts on the same job: one after the main ticket, one after the coupon.
const printer_msg = [
  "<C><BOLD>Order #4521</BOLD></C>",
  "<BR>",
  "Coffee x1",
  "<BR>",
  "<CUT/>",
  "<C>Promo — 10% off next visit</C>",
  "<BR>",
  "<C><QR>https://example.com/promo/XYZ</QR></C>",
  "<BR>",
  "<CUT/>",
].join("");

await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg,
  origin: "example/action-autocut",
});
