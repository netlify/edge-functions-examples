import repoLink from "../../components/repo-link.js";

export default {
  title: "Rewrite with Edge Functions",
  metaDescription: "Rewrite HTTP requests with an edge function",
  page: function() {
    return `
    <section>
      <h1>Rewrite with Edge Functions</h1>
      <p>You can rewrite requests on one URL to resources available on another URL using an Edge Function.</p>
      <pre><code>import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  return context.rewrite("/something-to-serve-with-a-rewrite");
};
</code></pre>

    <h2>See this in action</h2>
    <ul>
      <li><a href="/rewrite">Run the rewrite edge function</a></li>
      <li>${repoLink("rewrite.ts")}</li>
    </ul>

    <div class="protip">
      <h2>Pro tip!</h2>
      <p>You can combine <a href="/example/localized-content">geolocation data</a> with URL rewrites to serve different URLs powering internationalized content.</p>
    </div>
    </section>
  `;
  },
};
