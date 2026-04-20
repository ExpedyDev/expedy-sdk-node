import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const printers = await client.printers.list();

for (const printer of printers) {
  console.log(
    `${printer.printer_uid}\t${printer.printer_name}\t${printer.printer_width}mm`,
  );
}
