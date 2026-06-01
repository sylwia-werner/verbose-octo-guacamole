import z from "zod";
import { FetchError, NetworkError, NotFoundError } from "./errors";
import { API_CONFIG } from "./config";
import { buildUrl } from "@/shared/lib/build-url";

const DEFAULT_TIMEOUT_MS = 10000;

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface fetchApiOptions extends Omit<RequestInit, 'method' | 'body'> {
  method?: HttpMethod;
  body?: unknown;
  timeoutMs?: number;
  params?: Record<string, string | number | undefined>;
}

async function extractErrorMessage(response: Response, path: string): Promise<never> {
  let responseText: string;
  try {
    responseText = await response.text();
  } catch {
    throw new FetchError(response.status, path, response.statusText);
  }

  let errorMessage: string;
  try {
    errorMessage = JSON.parse(responseText)?.error;
  } catch {
    throw new FetchError(response.status, path, responseText);
  }

  throw new FetchError(response.status, path, errorMessage);
}

async function sendRequest(url: string, options: RequestInit): Promise<Response> {
  try {
    return await fetch(url, options);
  } catch (err) {
    if (err instanceof DOMException && err.name === 'TimeoutError') {
      throw new NetworkError(url, new Error(`Request timed out`));
    }
    throw new NetworkError(url, err);
  }
}

async function parseResponse<T>(res: Response, schema: z.ZodType<T>, path: string): Promise<T> {
  let json: unknown;
  try {
    json = await res.json();
  } catch {
    throw new FetchError(res.status, path, 'Invalid JSON response');
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[fetchApi] Schema validation failed for ${path}:`, parsed.error.flatten());
    }
    throw new FetchError(res.status, path, 'Response schema validation failed');
  }

  return parsed.data;
}

export async function fetchApi<T>(
  path: string,
  schema: z.ZodType<T>,
  { method = 'GET', body, timeoutMs = DEFAULT_TIMEOUT_MS, params, ...init }: fetchApiOptions = {},
): Promise<T> {
  const resolvedPath = buildUrl(path, params);
  const url = `${API_CONFIG.baseUrl}/${resolvedPath}`;

  const signal = AbortSignal.any([
    AbortSignal.timeout(timeoutMs),
    ...(init.signal ? [init.signal] : []),
  ]);

  const res = await sendRequest(url, {
    ...init,
    method,
    signal,
    headers: { 'Content-Type': 'application/json', ...init.headers },
    ...(body !== undefined && { body: JSON.stringify(body) }),
  });

  if (!res.ok) {
    if (res.status === 404) throw new NotFoundError(path);
    await extractErrorMessage(res, path);
  }

  return parseResponse(res, schema, path);
}
