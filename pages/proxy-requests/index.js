import repoLink from "../../components/repo-link.js";

export default {
  title: "Proxy requests to another source",
  metaDescription: "...",
  page: function () {
    return `
    <section>
      <h1>Proxy requests to another source — purposefully not complete</h1>
      <p>One or two sentences describing what it does.</p>
      <h2>See this in action</h2>
      <ul>
        <li>Link to any context setting</li>
        <li>Link to result of edge function example</li>
        <li>Link to the edge function in the code on GitHub</li>
        <li>${repoLink("proxy-requests.ts")}</li>
      </ul>
    </section>
  `;
  },
};
