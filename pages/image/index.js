import repoLink from "../../components/repo-link.js";

export default {
  title: "Return an image",
  description: "Use Edge Functions to return an image from your project, or an image from the internet.",
  page: function () {
    return `
    <section>
      <h1>Image Response</h1>
      <p>You can use Edge Functions to return an image.</p>
      <ul>
        <li><a href="/image-internal">Return an image stored in your project</a></li>
        <li><a href="/image-external">Return an image from the internet</a></li>
        <li>${repoLink("image-internal.ts")}</li>
      </ul>
    </section>
  `;
  },
};
