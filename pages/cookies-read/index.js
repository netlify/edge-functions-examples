import repoLink from "../../components/repo-link.js";

export default {
  title: "Reading cookies",
  description: "Read HTTP cookie values",
  page: function () {
    return `
    <section>
      <h1>Reading cookies</h1>
      <p>Use an Edge Function to read and manage HTTP cookies</p>
      <pre><code>import type { Context } from "netlify:edge";

export default async (req: Request, context: Context) => {
  
  // Read the value of a cookie
  const value = context.cookies.get("My cookie");

};</code></pre>
    </section>
    <section>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/cookies">Read the value of a cookie</a></li>
        <li>${repoLink("cookies.ts")}</li>
      </ul>
      </section>
      <h2>Related</h2>
      <ul>
        <li><a href="/example/cookies-set">Set the value of a cookie</a></li>
        <li><a href="/example/cookies-delete">Delete a cookie</a></li>
      </ul>
    </section>
  `;
  },
};
