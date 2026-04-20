import { ExpedyClient } from "expedy-sdk-node";

const client = new ExpedyClient({
  apiSid: process.env.EXPEDY_API_SID!,
  apiToken: process.env.EXPEDY_API_TOKEN!,
});

const deviceUid = process.env.EXPEDY_DEVICE_UID!;

await client.devices.wifi.addSsid(deviceUid, {
  wifi_ssid: "new_local_ssid",
  wifi_psk: "new_local_password",
});

// Apply the change on the device.
await client.devices.wifi.applyUpdate(deviceUid);

const conf = await client.devices.wifi.getConfiguration(deviceUid);
for (const entry of conf.wifi_conf) {
  console.log(`${entry.wifi_id}\t${entry.wifi_ssid}`);
}
