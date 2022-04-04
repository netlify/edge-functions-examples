import type { Context } from "netlify:edge";

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  if (url.searchParams.get("method") !== "set-response-header") {
    return context.next();
  }

  context.log(`Adding a custom header to the response for ${url}`);
  const res = await context.next();
  res.headers.set("X-Your-Custom-Header", "Your custom header value");
  return res;
};
