import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const { last_ping } = await client.devices.system.reboot(
  process.env.EXPEDY_DEVICE_UID!,
);

console.log(`Reboot requested — last_ping=${last_ping}`);
