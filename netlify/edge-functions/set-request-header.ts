import type { Context } from "netlify:edge";

export default async (req: Request, { next }: Context) => {
  req.headers.set("X-Your-Custom-Header", "Your custom header value");
  return next();
};

