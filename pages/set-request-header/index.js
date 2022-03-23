import repoLink from "../../components/repo-link.js";

export default {
  title: "Set HTTP request header",
  description: "Set a custom HTTP request header",
  image: "set-request-header",
  page: function() {
    return `
    <section>
      <h1>Set custom HTTP request headers with an Edge Function</h1>
      <p>Use an Edge Function to add HTTP headers to any HTTP request</p>
      <pre><code>
import type { Context } from "netlify:edge";

export default async (req: Request, { next }: Context) => {
  req.headers.set("X-Your-Custom-Header", "Your custom header value");
  return next();
};    
      </code></pre>
      <ul>
        <li>${repoLink("set-request-header.ts")}</li>
      </ul>
    </section>
  `
  }
};