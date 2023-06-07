import repoLink from "../../components/repo-link.js";

export default {
  title: "Long-running Edge Functions",
  metaDescription: "Use streams to return data from long-running Edge Functions",
  page: function () {
    return /* html */`
    <section>
      <h1>Long-running Netlify Edge Functions</h1>
      <p>Edge Functions are limited to 50ms of CPU time, but this does not include time spent waiting or 
        making network calls. As long as a function returns headers within 40 seconds it can run indefinitely. 
        If you need to make API calls or perform other work that takes longer than this, you can return a stream 
        from the function and write to it when you have the data.
      </p>

      <pre><code>import type { Context } from "https://edge.netlify.com";

export default (request: Request, context: Context) => {
  const body = new ReadableStream({
    async start(controller) {
      // this might be an API call or other slow external operation
      const response = await doSomethingSlow();
      controller.enqueue(new TextEncoder().encode(response));
      controller.close()
    }
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/long-running">View the response from the Edge Function (takes 60s to respond)</a></li>
        <li>${repoLink("long-running.ts")}</li>
      </ul>

      <div class="protip">
        <h2>Pro tip!</h2>
        <p>Need to send updates to the browser from a long-running edge function? Check out the <a href="/example/server-sent-events">server-sent events (SSE)</a> example.</p>
      </div>
    </section>
  `;
  },
};
