export interface RequestOptions {
  signal?: AbortSignal;
}

/**
 * Multi-byte script used to compose a print job — the `printer_han` field.
 *
 * - `"cn"` — Chinese (Hanzi)
 * - `"kr"` — Korean (Hangul)
 * - `"jp"` — Japanese (Kana / Kanji)
 *
 * Omit the field entirely for Latin scripts: accented characters are handled in
 * the default single-byte mode. `"1"` is still accepted as a legacy synonym of
 * `"cn"`.
 *
 * @see https://github.com/ExpedyDev/expedy-sdk-node/blob/main/docs/receipt-layout/asian-characters.md
 */
export type PrinterHanScript = "cn" | "kr" | "jp";

/**
 * Accepted values of `printer_han`, including the legacy `"1"` synonym of
 * `"cn"` kept for backwards compatibility with older integrations.
 */
export type PrinterHan = PrinterHanScript | "1";
