import repoLink from "../../components/repo-link.js";

export default {
  title: "Deleting cookies",
  metaDescription: "Delete an HTTP cookie",
  page: function () {
    return `
    <section>
      <h1>Delete HTTP cookies</h1>
      <p>Use an Edge Function to delete cookies.</p>
      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Delete a cookie
  context.cookies.delete("My cookie");
};</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li><a href="/cookies?action=clear">Delete a cookie</a></li>
        <li>${repoLink("cookies.ts")}</li>
      </ul>
      <h2>Related</h2>
      <ul>
        <li><a href="/example/cookies-set">Set the value of a cookie</a></li>
        <li><a href="/example/cookies-read">Read the value of a cookie</a></li>
      </ul>
    </section>
  `;
  },
};
