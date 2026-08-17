import type { PrinterHan } from "./common.js";

export interface Printer {
  /** Unique ID of the printer — pass it as `printer_uid` to `createPrintJob`. */
  printer_uid: string;
  /** Human-readable label set in the Expedy console (e.g. `"Lobby"`, `"Kitchen"`). */
  printer_name: string;
  /**
   * Activation flag: `"1"` active, `"0"` suspended.
   *
   * This is an **administrative flag controlled solely by ExpedyPRINT** — not a
   * live connectivity indicator. `"0"` means the printer has been suspended and
   * will not print until reactivated. To verify that an active printer is
   * physically reachable, send a test print instead of reading this field.
   */
  printer_status: string;
  /** Paper width in millimetres: `"58"` (32 chars/line), `"80"` (48), `"104"`. */
  printer_width: "58" | "80" | "104" | (string & {});
  /**
   * Image rendering mode configured in the console:
   * `"0"` Graphics (default) · `"1"` BitImageRaster · `"2"` BitImageColumn.
   */
  printer_graphic_mode: "0" | "1" | "2" | (string & {});
  /** Numeric code for the printer's print mode (device-specific configuration). */
  printer_print_mode: string;
}

export interface CreatePrintJobRequest {
  /**
   * The ticket content: plain UTF-8 text mixed with the Expedy layout tags
   * (`<C>`, `<BOLD>`, `<IMG>`, `<QR>`, `<CUT/>`, …).
   */
  printer_msg: string;
  /**
   * Free-form label identifying the source of the job (a URI, an app name, a
   * department…). Echoed in the Expedy console — useful for filtering and
   * debugging.
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

export interface CreatePrintJobResponse {
  /** Unique identifier of the accepted print job. */
  request_uid: string;
  /**
   * Unix timestamp (seconds) at which the platform accepted the job.
   *
   * Returned by the API but not part of the documented response contract —
   * treat it as optional and do not depend on its presence.
   */
  request_timestamp?: string;
}
