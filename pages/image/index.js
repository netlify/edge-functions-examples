import repoLink from "../../components/repo-link.js";

export default {
  title: "Return an image",
  description: "Use Edge Functions to return an image from your project, or an image from the internet.",
  page: function () {
    return `
    <section>
      <h1>Image Response</h1>
      <p>You can use Edge Functions to return an image.</p>

      <pre><code>import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {

  // Return an internal image using context.rewrite()
  return context.rewrite("/apple-touch-icon.png");

  // OR

  // Use fetch() and return the image response
  const kitten = await fetch("https://placekitten.com/g/300/300");
  return kitten;

};
</code></pre>

      <ul>
        <li><a href="/image-internal">Return an image stored in your project</a></li>
        <li><a href="/image-external">Return an image from the internet</a></li>
        <li>${repoLink("image-internal.ts")}</li>
      </ul>
    </section>
  `;
  },
};
