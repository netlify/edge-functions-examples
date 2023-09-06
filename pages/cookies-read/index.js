import repoLink from "../../components/repo-link.js";

export default {
  title: "Reading cookies",
  metaDescription: "Read HTTP cookie values",
  page: function () {
    return `
    <section>
      <h1>Reading cookies</h1>
      <p>Use an Edge Function to read and manage HTTP cookies.</p>
      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {  
  // Read the value of a cookie
  const value = context.cookies.get("My cookie");
};</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/cookies">Read the value of a cookie</a></li>
        <li>${repoLink("cookies.ts")}</li>
      </ul>
      <h2>Related</h2>
      <ul>
        <li><a href="/example/cookies-set">Set the value of a cookie</a></li>
        <li><a href="/example/cookies-delete">Delete a cookie</a></li>
      </ul>
    </section>
  `;
  },
};
