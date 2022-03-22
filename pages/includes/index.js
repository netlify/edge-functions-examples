import repoLink from "../../components/repo-link.js";

export default {
  title: "Includes at the Edge",
  metaDescription: "Dynamically include content into templates at the edge.",
  openGraphImageName: "include",
  page: function() {
    return `
    <section>
    <h1>Include content into templates at the edge</h1>
    <p>
      The ability to transform the content aof an HTTP response with Edge Functions enables you to substitute content into templates as you would with Edge Includes.
    </p>
    <p>
      In this example, we look for an <code>{{ EDGE_INCLUDE }}</code> placeholder in our response, and replace it with some other content.
    </p>
    <ul>
      <li><a href="/some-content-page">The original resource, before any replacement.</a></li>
      <li><a href="/some-content-page?include=pricing">The returned response after the include has been inserted.</a></li>
      <li>${repoLink('include.ts')}</li>
    </p>
    </section>
  `
  }
};
