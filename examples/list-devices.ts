import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const devices = await client.devices.list();

for (const device of devices) {
  console.log(
    `${device.device_uid}\t${device.rpi_nickname}\tv${device.version}\tlast_ping=${device.last_ping}`,
  );
}
