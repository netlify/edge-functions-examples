import repoLink from "../../components/repo-link.js";

export default {
  title: "Includes at The Edge",
  metaDescription: "Dynamically include content into templates at The Edge.",
  page: function() {
    return `
    <section>
    <h1>Include content into templates at The Edge</h1>
    <p>
      The ability to transform the content of an HTTP response with Edge Functions enables you to substitute content into templates as you would with Edge Includes.
    </p>
    <p>
      In this example, we look for an <code>{{INCLUDE_PRICE_INFO}}</code> placeholder in our response, and replace it with some other content.
    </p>

    <pre><code>import { Context } from "@netlify/edge-functions";

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

</code></pre>

  <p>This include Edge Function is set up to run using the <code>include=pricing</code> query parameter on any URL, using this entry in the netlify.toml file:</p>

  <pre><code>[[edge_functions]]
  function = "include"
  path = "/*"</code></pre>
    <h2>See this in action</h2>
    <ul>
      <li><a href="/some-content-page">View the original resource, before any replacement.</a></li>
      <li><a href="/some-content-page?include=pricing">View the returned response after the include has been inserted.</a></li>
      <li>${repoLink("include.ts")}</li>
    </p>
    </section>
  `;
  },
};