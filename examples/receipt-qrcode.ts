import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const printer_msg = [
  "<C>Scan to open the menu</C>",
  "<BR>",
  "<C><QR>https://menu.example.com/table/12</QR></C>",
  "<BR>",
  "<CUT/>",
].join("");

await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg,
  origin: "example/receipt-qrcode",
});
