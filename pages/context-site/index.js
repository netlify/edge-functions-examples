import repoLink from "../../components/repo-link.js";

export default {
  title: "Access Site Information from Edge Functions",
  metaDescription: "Access Site Information from an Edge Function",
  page: function () {
    return `
    <section>
      <h1>Access Site Information from Edge Functions</h1>
      <p>Netlify Edge Functions give access to site information via <code>context.site</code>.</p>
      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new Response(\`Hello from \${context.site.name}!\`);
};</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li><a href="/context-site">See response from code snippet</a></li>
        <li>${repoLink("context-site.ts")}</li>
      </ul>
      <h2>Related</h2>
      <ul>
        <li><a href="/example/environment">Environment variables</a></li>
      </ul>
    </section>
  `;
  },
};
