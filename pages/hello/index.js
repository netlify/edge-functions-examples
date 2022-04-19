import repoLink from "../../components/repo-link.js";

export default {
  title: "Hello, world!",
  metaDescription: "Explore our library of edge function examples and deploy your own to Netlify.",
  page: function () {
    return `
    <section>
      <h1>Hello, world!</h1>
      <p>
      You can use Edge Functions to return a plain HTTP text/html response. In this example, we return the string "Hello, World!" as text/html.
      </p>

      <pre><code>export default async (Request) => {
  return new Response("Hello, World!", {
    headers: { "content-type": "text/html" },
  });
};</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/hello">View the response from the Edge Function</a></li>
        <li>${repoLink("hello.js")}</li>
      </ul>

      <div class="protip">
        <h2>Pro tip!</h2>
        <p>Need to return JSON data from an Edge Function? Check out the <a href="/example/json">JSON response</a> method on the Context object!</p>
      </div>
    </section>
  `;
  },
};
