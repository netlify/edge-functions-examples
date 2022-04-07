import repoLink from "../../components/repo-link.js";

export default {
  title: "Name of your edge function",
  metaDescription: "One or two sentences describing your edge function",
  page: function () {
    return `
    <section>
      <h1>Title of edge function</h1>
      <p>One or two sentences describing what it does.</p>
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
