import repoLink from "../../components/repo-link.js";

export default {
  title: "Rewrite",
  description: "...",
  image: "rewrite",
  page: function () {
    return `
    <section>
      <h1>Rewrite</h1>
      <p>One or two sentences describing what it does.</p>
      <ul>
        <li>Link to any context setting</li>
        <li><a href="/rewrite">Run the rewrite edge function</li>
        <li>Link to the edge function in the code on GitHub</li>
        <li><li>${repoLink("rewrite.ts")}</li></li>
      </ul>
    </section>
  `;
  },
};
