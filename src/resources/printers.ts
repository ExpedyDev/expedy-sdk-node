import type { ExpedyClient } from "../client.js";
import type { RequestOptions } from "../types/common.js";
import type {
  CreatePrintJobRequest,
  CreatePrintJobResponse,
  Printer,
} from "../types/printer.js";

export class PrintersResource {
  constructor(private readonly client: ExpedyClient) {}

  /** `GET /printers/all` — List every printer owned by the authenticated account. */
  list(options?: RequestOptions): Promise<Printer[]> {
    return this.client.request<Printer[]>({
      method: "GET",
      path: "/printers/all",
      ...(options ?? {}),
    });
  }

  /** `POST /printers/{printer_uid}/print` — Queue a ticket on a cloud thermal printer. */
  createPrintJob(
    printerUid: string,
    body: CreatePrintJobRequest,
    options?: RequestOptions,
  ): Promise<CreatePrintJobResponse> {
    return this.client.request<CreatePrintJobResponse>({
      method: "POST",
      path: `/printers/${encodeURIComponent(printerUid)}/print`,
      body,
      ...(options ?? {}),
    });
  }
}
