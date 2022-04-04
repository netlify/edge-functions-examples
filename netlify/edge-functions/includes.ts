import { Context } from "netlify:edge";

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);
  if (url.searchParams.get("include") !== "pricing") {
    return context.next();
  }

  const resp = await context.next();
  if (resp.status === 304) {
    return resp;
  }

  console.log("Including pricing content into the page");
  const page = await resp.text();
  const pricingContent = "It's expensive, but buy it anyway.";
  const regex = /{{INCLUDE_PRICE_INFO}}/i;
  const updatedPage = page.replace(regex, pricingContent);
  return new Response(updatedPage, resp);
};
