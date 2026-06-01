export class FetchError extends Error {
  constructor(
    public readonly status: number,
    public readonly url: string,
    public readonly body?: string,
  ) {
    super(`Fetch error ${status}: ${url}`);
    this.name = 'FetchError';
  }
}

export class NotFoundError extends FetchError {
  constructor(url: string) {
    super(404, url);
    this.name = 'NotFoundError';
  }
}

export class NetworkError extends Error {
  constructor(
    public readonly url: string,
    cause?: unknown,
  ) {
    super(`Network error: ${url}`);
    this.name = 'NetworkError';
    this.cause = cause;
  }
}