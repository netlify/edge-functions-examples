import { Context, Config } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  
  // Just return what was requested without transforming it, 
  // unless we fnd the query parameter for this demo
  const url = new URL(request.url);
  if (url.searchParams.get("include") !== "pricing") {
    return;
  }

  console.log("Including pricing content into the page");
  
  // Get the page content
  const response = await context.next();
  const page = await response.text();

  // Search for the placeholder
  const regex = /{{INCLUDE_PRICE_INFO}}/i;

  // Replace the content
  const pricingContent = "It's expensive, but buy it anyway.";
  const updatedPage = page.replace(regex, pricingContent);
  return new Response(updatedPage, response);
};

export const config: Config = {
  path: "/*",
};