import repoLink from "../../components/repo-link.js";

export default {
  title: "Logging with Edge Functions",
  metaDescription: "Output content to the logs from an edge function",
  page: function () {
    return `
    <section>
      <h1>Logging with Edge Functions</h1>
      <p>You can output content to the logs during the execution of your Edge Function.</p>
      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  console.log("Hello from the logging service");
};</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/log">Echo content to the logs</a></li>
        <li>${repoLink("log.ts")}</li>
      </ul>
    </section>
  `;
  },
};
