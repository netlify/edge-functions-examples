import repoLink from "../../components/repo-link.js";

export default {
  title: "Server-Sent Events (SSE)",
  metaDescription: "Use Edge Functions to stream data to the browser using Server-Sent Events",
  page: function () {
    return `
    <section>
      <h1>Server-Sent Events (SSE)</h1>
      <p>You can use Edge Functions to create a long-running service that can stream data to the browser using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events">Server-Sent Events (SSE)</a>. 
      While there is a 50ms limit on CPU time, time spent waiting for a response from an upstream service, or waiting for a timer to expire, does not count towards this limit.
      This means you can create a long-running service that can stream data to the browser.
      </p>

      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  let index = 0
  const encoder = new TextEncoder();
  const body = new ReadableStream({
    start(controller) {
      setInterval(() => {
        controller.enqueue(encoder.encode(\`data: Hi $\{index++}\\n\\n\`));
      }, 1000);
    },
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
};
</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/sse">View the response from the Edge Function</a></li>
        <li>${repoLink("sse.ts")}</li>
      </ul>

      <div class="protip">
        <h2>Pro tip!</h2>
        <p>Need to wait a long time before starting to stream a response? Check out the <a href="/example/slow-stream">slow streaming</a> example.</p>
      </div>
    </section>
  `;
  },
};
