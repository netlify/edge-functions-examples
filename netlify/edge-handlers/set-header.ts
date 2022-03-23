import type { Context } from "netlify:edge";

export default async (req: Request, { next }: Context) => {
  
  const url = new URL(req.url);
  if (url.searchParams.get("method") !== "set-header") {
    return next();
  }  
  
  console.log(`Adding a custom header to the response for ${url}`);
  const res = await next();
  res.headers.set("X-Your-Custom-Header", "Your custom header value");
  return res

};

