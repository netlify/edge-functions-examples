import repoLink from "../../components/repo-link.js";

export default {
  title: "Block content according to country",
  description: "Use geolocation data to block content according to country.",
  page: function () {
    return `
    <section>
      <h1>Block content according to country</h1>
      <p>You can use geolocation data to block content according to country.</p>
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
