import repoLink from "../../components/repo-link.js";

export default {
  title: "Transform HTML Response stream",
  metaDescription: "Dynamically transform any HTML response at the edge.",
  page: function () {
    return /* html */ `
    <section>
      <h1>Transform HTML responses with Netlify Edge Functions and HTMLRewriter</h1>
      <p>
      You can use Edge Functions with the HTMLRewriter library to transform HTML
      responses. HTMLRewriter uses WebAssembly to parse a response stream, so is very
      efficient. It can parse large HTML pages with minimal overhead, and is a better
      choice than using a string transform in most cases. It has an API that uses
      familiar CSS selectors to target elements, and can be used to add, remove, or
      modify elements.
    </p>
      <p>
      In this example, we transform an HTML page, replacing the <code>src</code> of <code><img></code> tags
      with a placeholder image. We also add content with the user's location. This
      shows how to do user personalization when the pages may be static.      
    </p>

      <pre><code>import { Config, Context } from "@netlify/edge-functions";
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);
  // Only run if the catify query parameter is set
  if (!url.searchParams.has("catify")) {
    return;
  }

  const location = context?.geo?.city;

  const response = await context.next();
  const rewriter = new HTMLRewriter()
    .on("#location", {
      element: (element) => {
        element.setInnerContent(\`Catified for a visitor in \${location}\`);
      },
    })
    .on("img[catify]", {
      element: (element) => {
        const width = element.getAttribute("width") ?? 800;
        const height = element.getAttribute("height") ?? 600;
        element.setAttribute(
          "src",
          \`https://placekitten.com/\${width}/\${height}\`
        );
        element.setAttribute("alt", "A random cat");
      },
    });
  return rewriter.transform(response);
}
</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li><a href="/a-static-page">View the original response from /a-static-page</a> without a transform</li>
        <li>View the response from /a-static-page <a href="/a-static-page?catify">dynamically transformed with a HTMLRewriter</a></li>
        <li>${repoLink("htmlrewriter.ts")}</li>
      </ul>
    </section>
  `;
  },
};
