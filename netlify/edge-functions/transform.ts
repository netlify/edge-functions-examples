import { Context } from "netlify:edge";

export default async (req: Request, { next }: Context) => {

  const url = new URL(req.url);
  if (url.searchParams.get("method") !== "transform") {
    return next();
  }
  
  console.log(`Transforming the response from this ${url}`);

  const resp = await next();
  if (resp.status === 304) {
    return resp;
  }
  const text = await resp.text();
  return new Response(text.toUpperCase(), resp);
};
