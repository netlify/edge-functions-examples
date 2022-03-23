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
        <li>${repoLink("rewrite.ts")}</li>
      </ul>
    </section>
  `;
  },
};
