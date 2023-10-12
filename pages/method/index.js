import repoLink from "../../components/repo-link.js";

export default {
  title: "Configure for HTTP Methods",
  metaDescription: "Configure Edge Functions to execute for certain HTTP methods.",
  page: function() {
    return `
    <section>
    <h1>Configure for specific HTTP methods</h1>
    <p>
      With in-source configuration, you can restrict Edge Functions to respond to certain HTTP methods.
    </p>
    <p>
      In this example, we set up an Edge Function to execute for a <code>PUT</code> or <code>POST</code> request.
    </p>

    <pre><code>import type { Config, Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new Response(\`This is a response to a \${request.method}\`)
};

export const config: Config = {
  method: ["POST", "PUT"]
}</code></pre>
    <h2>See this in action</h2>
    <p>Since the Edge Function is configured to respond to <code>PUT</code> and <code>POST</code>, accessing the Edge Function through a browser will result in a 404.
    <br/>To validate that the Edge Function works, you can use cURL in your terminal:

    <br/><code>curl  -X POST https://edge-functions-examples.netlify.app/example/method</code></li>
    <br/><code>curl -X PUT https://edge-functions-examples.netlify.app/example/method</code>
    </p>
    <ul>
      <li>${repoLink("method.ts")}</li>
    </ul>
  </section>
  `;
  },
};
