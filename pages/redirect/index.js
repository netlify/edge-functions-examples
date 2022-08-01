import repoLink from "../../components/repo-link.js";

export default {
  title: "Redirect with Edge Functions",
  metaDescription: "Redirect HTTP requests with an edge function",
  page: function() {
    return `
    <section>
      <h1>Redirect with Edge Functions</h1>
      <p>You can Redirect requests on one URL to another URL using an Edge Function.</p>
      <pre><code>import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  return Response.redirect("https://icanhazdadjoke.com/", 302);
};
</code></pre>

    <h2>See this in action</h2>
    <ul>
      <li><a href="/redirect">Run the redirect edge function</a></li>
      <li>${repoLink("redirect.ts")}</li>
    </ul>

    <div class="protip">
      <h2>Pro tip!</h2>
      <p>You can combine <a href="/example/localized-content">geolocation data</a> with URL redirects to redirect to different URLs for internationalized content.</p>
    </div>
    </section>
  `;
  },
};
