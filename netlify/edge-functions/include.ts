import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  // Look for the query parameter, and return if we don't find it
  if (url.searchParams.get("include") !== "pricing") {
    return context.next();
  }

  const response = await context.next();

  // Check to see if the response has already been modified.
  // If it has, return it.
  if (response.status === 304) {
    return response;
  }

  context.log("Including pricing content into the page");

  // Get the page content
  const page = await response.text();

  // Search for the placeholder
  const regex = /{{INCLUDE_PRICE_INFO}}/i;

  // Replace the content
  const pricingContent = "It's expensive, but buy it anyway.";
  const updatedPage = page.replace(regex, pricingContent);
  return new Response(updatedPage, response);
};
