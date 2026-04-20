import { ExpedyApiError, ExpedyError } from "./errors.js";
import { PrintersResource } from "./resources/printers.js";
import { DevicesResource } from "./resources/devices.js";
import type { RequestOptions } from "./types/common.js";

export interface ExpedyClientConfig {
  apiSid: string;
  apiToken: string;
  baseUrl?: string;
  fetch?: typeof globalThis.fetch;
}

export const DEFAULT_BASE_URL = "https://www.expedy.fr/api/v2";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface InternalRequestArgs extends RequestOptions {
  method: HttpMethod;
  path: string;
  body?: unknown;
}

export class ExpedyClient {
  readonly printers: PrintersResource;
  readonly devices: DevicesResource;

  private readonly apiSid: string;
  private readonly apiToken: string;
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof globalThis.fetch;

  constructor(config: ExpedyClientConfig) {
    if (!config.apiSid || !config.apiToken) {
      throw new ExpedyError("`apiSid` and `apiToken` are both required.");
    }
    this.apiSid = config.apiSid;
    this.apiToken = config.apiToken;
    this.baseUrl = (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    const fetchImpl = config.fetch ?? globalThis.fetch;
    if (typeof fetchImpl !== "function") {
      throw new ExpedyError(
        "No global `fetch` is available. Use Node.js >= 18 or pass a `fetch` implementation.",
      );
    }
    this.fetchImpl = fetchImpl.bind(globalThis);

    this.printers = new PrintersResource(this);
    this.devices = new DevicesResource(this);
  }

  async request<T>(args: InternalRequestArgs): Promise<T> {
    const url = `${this.baseUrl}${args.path}`;
    const headers: Record<string, string> = {
      Authorization: `${this.apiSid}:${this.apiToken}`,
    };

    let body: string | undefined;
    if (args.body !== undefined) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(args.body);
    }

    const init: RequestInit = {
      method: args.method,
      headers,
    };
    if (body !== undefined) init.body = body;
    if (args.signal) init.signal = args.signal;

    let response: Response;
    try {
      response = await this.fetchImpl(url, init);
    } catch (cause) {
      throw new ExpedyError(
        `Network error while calling ${args.method} ${args.path}`,
        { cause },
      );
    }

    const rawText = await response.text();
    const parsed = parseJson(rawText);

    if (!response.ok) {
      const message = buildErrorMessage(args.method, args.path, response.status, parsed, rawText);
      throw new ExpedyApiError({
        status: response.status,
        message,
        rawBody: parsed ?? rawText,
        ...(extractRequestUid(parsed) !== undefined
          ? { requestUid: extractRequestUid(parsed) as string }
          : {}),
      });
    }

    return (parsed ?? (rawText as unknown)) as T;
  }
}

function parseJson(text: string): unknown {
  if (!text) return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return undefined;
  }
}

function buildErrorMessage(
  method: string,
  path: string,
  status: number,
  parsed: unknown,
  rawText: string,
): string {
  const detail =
    (typeof parsed === "object" && parsed !== null && "message" in parsed
      ? String((parsed as { message: unknown }).message)
      : undefined) ??
    (rawText.length > 0 && rawText.length < 200 ? rawText : undefined);
  return detail
    ? `Expedy API ${status} on ${method} ${path}: ${detail}`
    : `Expedy API ${status} on ${method} ${path}`;
}

function extractRequestUid(parsed: unknown): string | undefined {
  if (typeof parsed !== "object" || parsed === null) return undefined;
  const uid = (parsed as { request_uid?: unknown }).request_uid;
  return typeof uid === "string" ? uid : undefined;
}
