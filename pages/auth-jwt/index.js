import repoLink from "../../components/repo-link.js";

export default {
  title: "JWT Authentication",
  description: "One or two sentences describing your edge function",
  page: function () {
    return `
    <section>
      <h1>JWT Authentication</h1>
      <p>One or two sentences describing what it does.</p>

        <pre><code>//add code example here</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li>Link to any context setting</li>
        <li>Link to result of edge function example</li>
        <li>Link to the edge function in the code on GitHub</li>
        <li>${repoLink("edge-function-name.js")}</li>
      </ul>
    </section>
  `;
  },
};
