import repoLink from "../../components/repo-link.js";

export default {
  title: "Rewrite",
  metaDescription: "...",
  page: function () {
    return `
    <section>
      <h1>Rewrite — purposefully not complete</h1>
      <p>One or two sentences describing what it does.</p>
      <h2>See this in action</h2>
      <ul>
        <li>Link to any context setting</li>
        <li><a href="/rewrite">Run the rewrite edge function</li>
        <li>${repoLink("rewrite.ts")}</li>
      </ul>
      <h2>Pro tip!</h2>
      <p>You can combine <a href="/example/localized-content">geolocation data</a> with URL rewrites to serve different URLs powering internationalized content.</p>
    </section>
  `;
  },
};
