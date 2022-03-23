import repoLink from "../../components/repo-link.js";

export default {
  title: "Set HTTP header",
  description: "Set a custom HTTP header",
  image: "set-header",
  page: function() {
    return `
    <section>
      <h1>Set custom HTTP headers with an Edge Function</h1>
      <p>Use an Edge Function to add HTTP headers to any HTTP response</p>
      <ul>
        <li><a href="/example/set-header">This page, without custom HTTP header</a></li>
        <li><a href="/example/set-header?method=set-header">This page, but with a custom HTTP header added</a></li>
        <li>${repoLink("set-header.ts")}</li>
      </ul>
    </section>
  `
  }
};