import repoLink from "../../components/repo-link.js";

export default {
  title: "Serve localized content",
  metaDescription: "Use geolocation data to serve localized content according to country.",
  page: function () {
    return `
    <section>
      <h1>Serve localized content</h1>
      <p>You can use geolocation data to serve localized content according to country.</p>

        <pre><code>//add code example here
//include using rewrite?</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li>Link to any context setting</li>
        <li>Link to result of edge function example</li>
        <li>Link to the edge function in the code on GitHub</li>
        <li>${repoLink("localized-content.ts")}</li>
      </ul>
    </section>
  `;
  },
};
