export interface Device {
  device_uid: string;
  version: string;
  last_ping: string;
  rpi_nickname: string;
  rpi_disk_size: string;
  rpi_vid_list: string;
}

export interface DeviceLastPing {
  last_ping: number;
}

export interface UsbPortEntry {
  usb_port: number;
  usb_status: number;
  device_manufacturer?: string;
  device_model?: string;
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
  usb_msg: string;
  notification_url?: string;
  origin?: string;
}

export interface CreateUsbPrintJobResponse {
  last_ping: number;
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
