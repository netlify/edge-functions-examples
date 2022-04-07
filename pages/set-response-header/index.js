import repoLink from "../../components/repo-link.js";

export default {
  title: "Set HTTP response header",
  metaDescription: "Set a custom HTTP response header",
  page: function () {
    return `
    <section>
      <h1>Set custom HTTP response headers with an Edge Function</h1>
      <p>Use an Edge Function to add HTTP headers to any HTTP response.</p>
      <pre><code>import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  const response = await context.next();
  response.headers.set("X-Your-Custom-Header", "Your custom value");
  return response;
};</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/example/set-response-header">This page, without a custom HTTP response header</a></li>
        <li><a href="/example/set-response-header?method=set-response-header">This page, but with a custom HTTP response header added</a></li>
        <li>${repoLink("set-response-header.ts")}</li>
      </ul>
    </section>
  `;
  },
};
