import type { Context } from "netlify:edge";

export default async (req: Request, context: Context) => {
  req.headers.set("X-Your-Custom-Header", "Your custom header value");
  return context.next();
};
