export interface Printer {
  printer_uid: string;
  printer_name: string;
  printer_status: string;
  printer_width: string;
  printer_graphic_mode: string;
  printer_print_mode: string;
}

export interface CreatePrintJobRequest {
  printer_msg: string;
  origin?: string;
}

export interface CreatePrintJobResponse {
  request_uid: string;
  request_timestamp: string;
}
