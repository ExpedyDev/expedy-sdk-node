# Wi-Fi — `<SETWIFI>`

Connect your printer to a Wi-Fi network by setting the SSID and password directly from a print request. Useful for deploying printers remotely or moving them between networks without touching the device manually.

```text
<SETWIFI>ssid<ssid/pwd>pwd</SETWIFI>
```

| Parameter | Description |
| --- | --- |
| `ssid` | The Wi-Fi network name. |
| `pwd` | The Wi-Fi network password. |

## Node.js example

```ts
await client.printers.createPrintJob(printerUid, {
  printer_msg: "<SETWIFI>MyCafeSSID<ssid/pwd>MyCafePassword</SETWIFI>",
});
```

> This tag configures the **printer's** Wi-Fi. To manage SSIDs stored on a Raspberry Pi device, use the [Wi-Fi endpoints](../api/devices/wifi/get-configuration.md) instead.
