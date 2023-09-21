import repoLink from "../../components/repo-link.js";

export default {
  title: "Return an image",
  metaDescription: "Use Edge Functions to return an image from your project, or an image from the internet.",
  page: function () {
    return `
    <section>
      <h1>Image Response</h1>
      <p>You can use Edge Functions to return an image.</p>

      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {

  // Return an internal image using a rewrite
  // This image is stored in the /public directory of this project
  return new URL("/apple-touch-icon.png", request.url);

  // OR

  // Use fetch() and return the image response
  const kitten = await fetch("https://placekitten.com/g/300/300");
  return kitten;
};
</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/image-internal">Return an image stored in your project</a></li>
        <li><a href="/image-external">Return an image from the internet</a></li>
        <li>${repoLink("image-internal.ts", "View the code for the internal image request:")}</li>
        <li>${repoLink("image-external.ts", "View the code for the external image request:")}</li>
      </ul>
    </section>
  `;
  },
};
