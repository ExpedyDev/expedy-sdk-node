import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

// Chinese, Japanese and Korean text needs `printer_han`, or every such
// character is replaced with `?` before the job reaches the printer.
// See: docs/receipt-layout/asian-characters.md

const printer_msg = [
  "<C><BOLD>주문 #1234</BOLD></C>",
  "<BR>",
  "<C>테이블 7</C>",
  "<BR>",
  "비빔밥 x1",
  "<BR>",
  "김치찌개 x2",
  "<BR>",
  "<CUT/>",
].join("");

const { request_uid } = await client.printers.createPrintJob(
  process.env.EXPEDY_PRINTER_UID!,
  {
    printer_msg,
    printer_han: "kr", // "cn" Chinese · "kr" Korean · "jp" Japanese
    origin: "example/receipt-asian-characters",
  },
);

console.log(`Queued print job ${request_uid}`);

// Japanese:
// await client.printers.createPrintJob(printerUid, {
//   printer_msg: "<C><BOLD>注文 #1234</BOLD></C><BR><CUT/>",
//   printer_han: "jp",
// });

// Chinese:
// await client.printers.createPrintJob(printerUid, {
//   printer_msg: "<C><BOLD>订单 #1234</BOLD></C><BR><CUT/>",
//   printer_han: "cn",
// });

// Latin text (accented characters included) never needs `printer_han` —
// leave the field out entirely.
