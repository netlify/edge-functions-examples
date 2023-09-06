import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  request.headers.set("X-Your-Custom-Header", "Your custom header value");
};
