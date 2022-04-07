import repoLink from "../../components/repo-link.js";

export default {
  title: "Block content according to country",
  metaDescription: "Use geolocation data to block content according to country.",
  page: function () {
    return `
    <section>
      <h1>Block content according to country</h1>
      <p>You can use geolocation data to identify a user's country, block content and/or redirect to alternative content.</p>

      <pre><code>//add code example here
//include using rewrite?</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li>Link to any context setting</li>
        <li>Link to result of edge function example</li>
        <li>Link to the edge function in the code on GitHub</li>
        <li>${repoLink("country-block.ts")}</li>
      </ul>
    </section>
  `;
  },
};
