import { setupServer } from "msw/node";
import { beforeAll } from "vitest";

import type { RequestHandler } from "msw";
import type { SetupServer } from "msw/node";

export function setupMockServer(
  ...defaultHandlers: RequestHandler[]
): SetupServer {
  const handlers: RequestHandler[] =
    (defaultHandlers.length && defaultHandlers) || [];
  const server = setupServer(...handlers);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  return server;
}
