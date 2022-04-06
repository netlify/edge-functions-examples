import repoLink from "../../components/repo-link.js";

export default {
  title: "Rewrite",
  description: "...",
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
    </section>
  `;
  },
};
