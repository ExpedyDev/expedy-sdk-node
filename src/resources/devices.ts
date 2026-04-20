import type { ExpedyClient } from "../client.js";
import type { RequestOptions } from "../types/common.js";
import type {
  AddSsidRequest,
  CreateUsbPrintJobRequest,
  CreateUsbPrintJobResponse,
  Device,
  DeviceLastPing,
  UsbConfigurationResponse,
  UsbScanResponse,
  WifiConfigurationResponse,
} from "../types/device.js";

export class DevicesResource {
  readonly system: DeviceSystem;
  readonly usb: DeviceUsb;
  readonly wifi: DeviceWifi;

  constructor(private readonly client: ExpedyClient) {
    this.system = new DeviceSystem(client);
    this.usb = new DeviceUsb(client);
    this.wifi = new DeviceWifi(client);
  }

  /** `GET /devices/all` — List every Raspberry Pi gateway owned by the account. */
  list(options?: RequestOptions): Promise<Device[]> {
    return this.client.request<Device[]>({
      method: "GET",
      path: "/devices/all",
      ...(options ?? {}),
    });
  }

  /** `GET /devices/{device_uid}` — Summary + status for a single device. */
  get(deviceUid: string, options?: RequestOptions): Promise<Device> {
    return this.client.request<Device>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}`,
      ...(options ?? {}),
    });
  }
}

export class DeviceSystem {
  constructor(private readonly client: ExpedyClient) {}

  /** `GET /devices/{device_uid}/ping` — Ask the device to ping back. */
  ping(deviceUid: string, options?: RequestOptions): Promise<DeviceLastPing> {
    return this.client.request<DeviceLastPing>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/ping`,
      ...(options ?? {}),
    });
  }

  /** `GET /devices/{device_uid}/update` — Initiate a firmware update if available. */
  update(deviceUid: string, options?: RequestOptions): Promise<DeviceLastPing> {
    return this.client.request<DeviceLastPing>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/update`,
      ...(options ?? {}),
    });
  }

  /** `GET /devices/{device_uid}/reboot` — Reboot the device remotely. */
  reboot(deviceUid: string, options?: RequestOptions): Promise<DeviceLastPing> {
    return this.client.request<DeviceLastPing>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/reboot`,
      ...(options ?? {}),
    });
  }

  /**
   * `GET /devices/{device_uid}/shutdown` — Shut the device down.
   *
   * Requires physical access to power the device back on; usually reserved for
   * safe relocation between geographical sites.
   */
  shutdown(deviceUid: string, options?: RequestOptions): Promise<DeviceLastPing> {
    return this.client.request<DeviceLastPing>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/shutdown`,
      ...(options ?? {}),
    });
  }
}

export class DeviceUsb {
  constructor(private readonly client: ExpedyClient) {}

  /** `GET /devices/{device_uid}/usb/conf` — Read the last-known USB port configuration. */
  getConfiguration(
    deviceUid: string,
    options?: RequestOptions,
  ): Promise<UsbConfigurationResponse> {
    return this.client.request<UsbConfigurationResponse>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/usb/conf`,
      ...(options ?? {}),
    });
  }

  /** `GET /devices/{device_uid}/usb/scan` — Trigger a fresh scan of attached USB printers. */
  scan(deviceUid: string, options?: RequestOptions): Promise<DeviceLastPing> {
    return this.client.request<DeviceLastPing>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/usb/scan`,
      ...(options ?? {}),
    });
  }

  /** `GET /devices/{device_uid}/usb/scan/read` — Read the latest USB scan result. */
  readScan(deviceUid: string, options?: RequestOptions): Promise<UsbScanResponse> {
    return this.client.request<UsbScanResponse>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/usb/scan/read`,
      ...(options ?? {}),
    });
  }

  /** `POST /devices/{device_uid}/usb/{usb_port}/print` — Queue a print job on a USB-attached printer. */
  createPrintJob(
    deviceUid: string,
    usbPort: number | string,
    body: CreateUsbPrintJobRequest,
    options?: RequestOptions,
  ): Promise<CreateUsbPrintJobResponse> {
    return this.client.request<CreateUsbPrintJobResponse>({
      method: "POST",
      path: `/devices/${encodeURIComponent(deviceUid)}/usb/${encodeURIComponent(String(usbPort))}/print`,
      body,
      ...(options ?? {}),
    });
  }
}

export class DeviceWifi {
  constructor(private readonly client: ExpedyClient) {}

  /** `GET /devices/{device_uid}/wifi/conf` — Read the stored Wi-Fi configuration. */
  getConfiguration(
    deviceUid: string,
    options?: RequestOptions,
  ): Promise<WifiConfigurationResponse> {
    return this.client.request<WifiConfigurationResponse>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/wifi/conf`,
      ...(options ?? {}),
    });
  }

  /** `PUT /devices/{device_uid}/wifi/add` — Add a new SSID to the stored configuration. */
  addSsid(
    deviceUid: string,
    body: AddSsidRequest,
    options?: RequestOptions,
  ): Promise<WifiConfigurationResponse> {
    return this.client.request<WifiConfigurationResponse>({
      method: "PUT",
      path: `/devices/${encodeURIComponent(deviceUid)}/wifi/add`,
      body,
      ...(options ?? {}),
    });
  }

  /** `PATCH /devices/{device_uid}/wifi/{wifi_id}/del` — Delete an SSID from the stored configuration. */
  deleteSsid(
    deviceUid: string,
    wifiId: number,
    options?: RequestOptions,
  ): Promise<WifiConfigurationResponse> {
    return this.client.request<WifiConfigurationResponse>({
      method: "PATCH",
      path: `/devices/${encodeURIComponent(deviceUid)}/wifi/${encodeURIComponent(String(wifiId))}/del`,
      ...(options ?? {}),
    });
  }

  /** `GET /devices/{device_uid}/wifi/update` — Push any Wi-Fi configuration change to the device. */
  applyUpdate(deviceUid: string, options?: RequestOptions): Promise<DeviceLastPing> {
    return this.client.request<DeviceLastPing>({
      method: "GET",
      path: `/devices/${encodeURIComponent(deviceUid)}/wifi/update`,
      ...(options ?? {}),
    });
  }
}
