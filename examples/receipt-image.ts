import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// The <IMG> URL must be served over HTTPS, be a flat-black-on-white JPG/GIF/PNG,
// and match the target paper width (58=398 px, 80=602 px, 104=1002 px).
const printer_msg = [
  "<IMG>https://cdn.example.com/logo-602px.png</IMG>",
  "<BR>",
  "<C>Thank you for your visit.</C>",
  "<BR>",
  "<CUT/>",
].join("");

await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg,
  origin: "example/receipt-image",
});
