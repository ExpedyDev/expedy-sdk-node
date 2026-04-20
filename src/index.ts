export { ExpedyClient, DEFAULT_BASE_URL } from "./client.js";
export type { ExpedyClientConfig } from "./client.js";
export { ExpedyError, ExpedyApiError } from "./errors.js";
export type {
  Printer,
  CreatePrintJobRequest,
  CreatePrintJobResponse,
} from "./types/printer.js";
export type {
  Device,
  DeviceLastPing,
  UsbPortEntry,
  UsbConfigurationResponse,
  UsbScanResponse,
  CreateUsbPrintJobRequest,
  CreateUsbPrintJobResponse,
  WifiEntry,
  WifiConfigurationResponse,
  AddSsidRequest,
} from "./types/device.js";
export type { RequestOptions } from "./types/common.js";
export {
  PrintersResource,
} from "./resources/printers.js";
export {
  DevicesResource,
  DeviceSystem,
  DeviceUsb,
  DeviceWifi,
} from "./resources/devices.js";
