import type { PrinterHan } from "./common.js";

export interface Device {
  /** Unique ID of the device, as shown in the console under **Machines**. */
  device_uid: string;
  /** Firmware version running on the device. */
  version: string;
  /** Unix timestamp (seconds) of the device's last contact with the server. */
  last_ping: string;
  /** Human-readable label set in the Expedy console. */
  rpi_nickname: string;
  /** Disk size of the device, in gigabytes. */
  rpi_disk_size: string;
  /** Semicolon-separated list of media/display IDs attached to the device. */
  rpi_vid_list: string;
}

export interface DeviceLastPing {
  /**
   * Unix timestamp (seconds) of the device's last contact with the server.
   *
   * A value far in the past means the device was not online. It is the cheapest
   * signal available that a device has gone silent — worth reading on every
   * call.
   */
  last_ping: number;
}

export interface UsbPortEntry {
  /** USB port number, `1` to `4`, matching the ports shown in the console. */
  usb_port: number;
  /** `1` when a printer is detected and configured on the port, `0` otherwise. */
  usb_status: number;
  device_manufacturer?: string;
  device_model?: string;
  /** Printer width in millimetres, when detected. */
  device_width?: number;
}

export interface UsbConfigurationResponse {
  last_ping: number;
  usb_conf: UsbPortEntry[];
}

export interface UsbScanResponse {
  last_ping: number;
  usb_scan?: UsbPortEntry[];
  usb_conf?: UsbPortEntry[];
}

export interface CreateUsbPrintJobRequest {
  /**
   * Payload sent to the printer.
   *
   * For ESC/POS thermal printers this accepts the same tag language as
   * `printer_msg`. For label / PDF printers, send the raw HTTPS URL of the PDF
   * with no tag wrapper.
   */
  usb_msg: string;
  /**
   * URL the print service calls once it has handed the job to the printer. Use
   * it to close the loop in your own system instead of assuming the job
   * printed.
   */
  notification_url?: string;
  /**
   * Free-form label identifying the source of the job (a URI, an app name, a
   * department…). Echoed in the Expedy console.
   */
  origin?: string;
  /**
   * Script to compose the receipt in — required for Chinese, Japanese and
   * Korean text.
   *
   * By default the receipt is composed in single-byte mode, and no single-byte
   * code page contains Hanzi, Kana or Hangul: **without this field every such
   * character is replaced with a `?` before the job even reaches the printer**.
   *
   * The value has to match the script — Korean sent as `"cn"` still comes out
   * as `?` — and the printer has to carry the matching font in ROM. Leave it
   * out for Latin scripts.
   *
   * @see https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/receipt-layout/asian-characters.md
   */
  printer_han?: PrinterHan;
}

export interface CreateUsbPrintJobResponse {
  /**
   * Unix timestamp (seconds) of the device's last contact with the server. A
   * value far in the past means the device was not online when you sent the
   * job.
   */
  last_ping: number;
  /** Unique identifier of the accepted print job. */
  request_uid: string;
}

export interface WifiEntry {
  wifi_id: number;
  wifi_ssid: string;
  wifi_psk: string;
}

export interface WifiConfigurationResponse {
  status?: string;
  last_ping: number;
  wifi_conf: WifiEntry[];
}

export interface AddSsidRequest {
  wifi_ssid: string;
  wifi_psk: string;
}
