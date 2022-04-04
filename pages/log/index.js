import repoLink from "../../components/repo-link.js";

export default {
  title: "Logging with Edge Functions",
  description: "Output content to the logs from an edge function",
  page: function () {
    return `
    <section>
      <h1>Logging with Edge Functions</h1>
      <p>You can output content to the logs during the execution of your edge function.</p>
      <p><strong>Note: </strong>You can still use <code>console.log()</code> in your Edge Functions, but using <code>context.log()</code> will tell you which Edge Function generated the message for easier debugging!</p>
      <pre><code>import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  context.log("Hello from the logging service");
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
