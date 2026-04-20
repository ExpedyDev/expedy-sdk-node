export class ExpedyError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message);
    this.name = "ExpedyError";
    if (options?.cause !== undefined) {
      (this as { cause?: unknown }).cause = options.cause;
    }
  }
}

export class ExpedyApiError extends ExpedyError {
  readonly status: number;
  readonly rawBody: unknown;
  readonly requestUid?: string;

  constructor(params: {
    status: number;
    message: string;
    rawBody: unknown;
    requestUid?: string;
  }) {
    super(params.message);
    this.name = "ExpedyApiError";
    this.status = params.status;
    this.rawBody = params.rawBody;
    if (params.requestUid !== undefined) {
      this.requestUid = params.requestUid;
    }
  }
}
