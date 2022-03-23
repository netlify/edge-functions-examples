import repoLink from "../../components/repo-link.js";

export default {
  title: "Set HTTP response header",
  description: "Set a custom HTTP response header",
  page: function() {
    return `
    <section>
      <h1>Set custom HTTP response headers with an Edge Function</h1>
      <p>Use an Edge Function to add HTTP headers to any HTTP response</p>
      <pre><code>
import type { Context } from "netlify:edge";

export default async (req: Request, { next }: Context) => {
  const res = await next();
  res.headers.set("X-Your-Custom-Header", "Your custom header value");
  return res
};

</code></pre>

      <ul>
        <li><a href="/example/set-response-header">This page, without custom HTTP response header</a></li>
        <li><a href="/example/set-response-header?method=set-response-header">This page, but with a custom HTTP response header added</a></li>
        <li>${repoLink("set-response-header.ts")}</li>
      </ul>
    </section>
  `
  }
};