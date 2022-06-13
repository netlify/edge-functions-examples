import repoLink from "../../components/repo-link.js";

export default {
  title: "Uncaught Exceptions",
  metaDescription: "Learn how to access logs for uncaught exceptions in Netlify Edge Functions.",
  page: function () {
    return `
    <section>
      <h1>Read logs for uncaught exceptions</h1>
      <p>
      When a Netlify Edge Function throws an uncaught exception,
      an error page is served.
      To access the full error message, click on the "Edge Function Logs" link:
      </p>

      <img src="/img/screenshot-error-page.png" width="100%" />

      <pre><code>export default async () => {
  throw new Error("💥");
};</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/error">See an error page</a></li>
        <li>${repoLink("error.ts")}</li>
      </ul>
    </section>
  `;
  },
};
