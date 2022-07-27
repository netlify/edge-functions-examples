import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  if (url.searchParams.get("method") !== "set-response-header") {
    return context.next();
  }

  context.log(`Adding a custom header to the response for ${url}`);

  const response = await context.next();
  response.headers.set("X-Your-Custom-Header", "Your custom header value");
  return response;
};
