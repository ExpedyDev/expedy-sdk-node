import { test } from "node:test";
import assert from "node:assert/strict";
import {
  ExpedyClient,
  ExpedyApiError,
  ExpedyError,
  DEFAULT_BASE_URL,
} from "../dist/index.js";

function makeClient({ fetchImpl, baseUrl } = {}) {
  return new ExpedyClient({
    apiSid: "SID123",
    apiToken: "TOKEN456",
    ...(baseUrl !== undefined ? { baseUrl } : {}),
    fetch: fetchImpl,
  });
}

function jsonResponse(status, body) {
  return new Response(body === undefined ? "" : JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

test("constructor throws ExpedyError when credentials are missing", () => {
  assert.throws(
    () => new ExpedyClient({ apiSid: "", apiToken: "" }),
    (err) => err instanceof ExpedyError,
  );
});

test("Authorization header is the raw SID:TOKEN value, no prefix", async () => {
  let capturedHeaders;
  const client = makeClient({
    fetchImpl: async (_url, init) => {
      capturedHeaders = init.headers;
      return jsonResponse(200, { request_uid: "ABC" });
    },
  });

  await client.printers.createPrintJob("PRT1", { printer_msg: "<C>Hi</C>" });

  assert.equal(capturedHeaders.Authorization, "SID123:TOKEN456");
  assert.ok(!capturedHeaders.Authorization.startsWith("Bearer"));
  assert.ok(!capturedHeaders.Authorization.startsWith("Basic"));
});

test("Content-Type is set only when a body is present", async () => {
  const seen = [];
  const client = makeClient({
    fetchImpl: async (_url, init) => {
      seen.push(init.headers["Content-Type"]);
      return jsonResponse(200, { last_ping: 1 });
    },
  });

  await client.devices.system.ping("DEV1"); // GET, no body
  await client.printers.createPrintJob("PRT1", { printer_msg: "<C>Hi</C>" }); // POST, body

  assert.equal(seen[0], undefined);
  assert.equal(seen[1], "application/json");
});

test("printer_han travels through the JSON body on printers.createPrintJob", async () => {
  let capturedBody;
  const client = makeClient({
    fetchImpl: async (_url, init) => {
      capturedBody = JSON.parse(init.body);
      return jsonResponse(200, { request_uid: "ABC" });
    },
  });

  await client.printers.createPrintJob("PRT1", {
    printer_msg: "<C><BOLD>주문 #1234</BOLD></C>",
    printer_han: "kr",
  });

  assert.equal(capturedBody.printer_han, "kr");
  assert.equal(capturedBody.printer_msg, "<C><BOLD>주문 #1234</BOLD></C>");
});

test("printer_han travels through the JSON body on devices.usb.createPrintJob", async () => {
  let capturedBody;
  const client = makeClient({
    fetchImpl: async (_url, init) => {
      capturedBody = JSON.parse(init.body);
      return jsonResponse(200, { last_ping: 1, request_uid: "ABC" });
    },
  });

  await client.devices.usb.createPrintJob("DEV1", 1, {
    usb_msg: "<C><BOLD>注文 #1234</BOLD></C>",
    printer_han: "jp",
  });

  assert.equal(capturedBody.printer_han, "jp");
});

test("CJK text survives the JSON round-trip as UTF-8", async () => {
  let capturedBody;
  const client = makeClient({
    fetchImpl: async (_url, init) => {
      capturedBody = init.body;
      return jsonResponse(200, { request_uid: "ABC" });
    },
  });

  const text = "주문 #1234 — 김치찌개";
  await client.printers.createPrintJob("PRT1", {
    printer_msg: text,
    printer_han: "kr",
  });

  const roundTripped = JSON.parse(capturedBody).printer_msg;
  assert.equal(roundTripped, text);
  assert.deepEqual(
    Array.from(new TextEncoder().encode(roundTripped)),
    Array.from(new TextEncoder().encode(text)),
  );
});

test("UIDs and usb_port are percent-encoded in the URL", async () => {
  let capturedUrl;
  const client = makeClient({
    fetchImpl: async (url) => {
      capturedUrl = url;
      return jsonResponse(200, { last_ping: 1, request_uid: "ABC" });
    },
  });

  await client.devices.usb.createPrintJob("dev/weird uid", "1", {
    usb_msg: "<C>Hi</C>",
  });

  assert.ok(capturedUrl.includes(encodeURIComponent("dev/weird uid")));
  assert.ok(!capturedUrl.includes("dev/weird uid/usb"));
});

test("trailing slashes are stripped from a custom baseUrl", async () => {
  let capturedUrl;
  const client = makeClient({
    baseUrl: "https://example.test/api///",
    fetchImpl: async (url) => {
      capturedUrl = url;
      return jsonResponse(200, []);
    },
  });

  await client.printers.list();

  assert.equal(capturedUrl, "https://example.test/api/printers/all");
});

test("DEFAULT_BASE_URL is used when no baseUrl is provided", async () => {
  let capturedUrl;
  const client = makeClient({
    fetchImpl: async (url) => {
      capturedUrl = url;
      return jsonResponse(200, []);
    },
  });

  await client.printers.list();

  assert.ok(capturedUrl.startsWith(DEFAULT_BASE_URL));
});

test("a non-2xx response throws ExpedyApiError with status, message and rawBody", async () => {
  const client = makeClient({
    fetchImpl: async () => jsonResponse(422, { message: "Invalid printer" }),
  });

  await assert.rejects(
    () => client.printers.createPrintJob("PRT1", { printer_msg: "<C>Hi</C>" }),
    (err) => {
      assert.ok(err instanceof ExpedyApiError);
      assert.ok(err instanceof ExpedyError);
      assert.equal(err.status, 422);
      assert.match(err.message, /Invalid printer/);
      assert.deepEqual(err.rawBody, { message: "Invalid printer" });
      return true;
    },
  );
});

test("requestUid is extracted from the error body when present", async () => {
  const client = makeClient({
    fetchImpl: async () =>
      jsonResponse(500, { message: "boom", request_uid: "XYZ" }),
  });

  await assert.rejects(
    () => client.devices.usb.createPrintJob("DEV1", 1, { usb_msg: "<C>Hi</C>" }),
    (err) => {
      assert.equal(err.requestUid, "XYZ");
      return true;
    },
  );
});

test("a network failure throws ExpedyError with the underlying cause", async () => {
  const networkError = new Error("getaddrinfo ENOTFOUND");
  const client = makeClient({
    fetchImpl: async () => {
      throw networkError;
    },
  });

  await assert.rejects(
    () => client.printers.list(),
    (err) => {
      assert.ok(err instanceof ExpedyError);
      assert.ok(!(err instanceof ExpedyApiError));
      assert.equal(err.cause, networkError);
      return true;
    },
  );
});
