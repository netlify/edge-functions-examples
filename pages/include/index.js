import repoLink from "../../components/repo-link.js";

export default {
  title: "Includes at the Edge",
  metaDescription: "Dynamically include content into templates at the edge.",
  page: function () {
    return `
    <section>
    <h1>Include content into templates at the edge</h1>
    <p>
      The ability to transform the content of an HTTP response with Edge Functions enables you to substitute content into templates as you would with Edge Includes.
    </p>
    <p>
      In this example, we look for an <code>{{INCLUDE_PRICE_INFO}}</code> placeholder in our response, and replace it with some other content.
    </p>

    <pre><code>import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  // Look for the query parameter, and return if we don't find it
  if (url.searchParams.get("include") !== "pricing") {
    return context.next();
  }

  const response = await context.next();

  // Check to see if the response has already been modified.
  // If it has, just return.
  if (response.status === 304) {
    return response;
  }

  // Get the page content
  const page = await response.text();
  
  // Search for the placeholder
  const regex = /{{INCLUDE_PRICE_INFO}}/i;
  
  // Replace the content
  const pricingContent = "It's expensive, but buy it anyway.";
  const updatedPage = page.replace(regex, pricingContent);
  return new Response(updatedPage, response);
};
</code></pre>

  <p>This include Edge Function is set up to run using the <code>include=pricing</code> query parameter on any URL, using this entry in the netlify.toml file:</p>

  <pre><code>[[edge_functions]]
  function = "include"
  path = "/*"</code></pre>

    <ul>
      <li><a href="/some-content-page">The original resource, before any replacement.</a></li>
      <li><a href="/some-content-page?include=pricing">The returned response after the include has been inserted.</a></li>
      <li>${repoLink("include.ts")}</li>
    </p>
    </section>
  `;
  },
};
