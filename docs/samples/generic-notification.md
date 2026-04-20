# Sample — generic notification

A short information ticket useful for alerting an operator: one centered message, a line break, and a cut.

```ts
import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

await client.printers.createPrintJob(process.env.EXPEDY_PRINTER_UID!, {
  printer_msg: [
    "<CB>NEW EVENT</CB>",
    "<BR>",
    "Please check the queue.",
    "<BR>",
    "<CUT/>",
  ].join(""),
  origin: "sample/generic-notification",
});
```

If you want the printer to beep on every notification, leave the audible beep enabled (it is by default). To silence it, see [audible beep](../parameter-tags/audible-beep.md).
