import { Context } from "netlify:edge";

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  if (url.searchParams.get("method") !== "transform") {
    return context.next();
  }

  console.log(`Transforming the response from this ${url}`);

  const resp = await context.next();
  if (resp.status === 304) {
    return resp;
  }
  const text = await resp.text();
  return new Response(text.toUpperCase(), resp);
};
