import repoLink from "../../components/repo-link.js";

export default {
  title: "JSON Response",
  description: "Use Edge Functions to return a JSON response using the Context without JSON.stringify.",
  image: "jsonresponse",
  page: function () {
    return `
    <section>
      <h1>JSON Response</h1>
      <p>You can use Edge Functions to return a JSON response by returning <code>context.json()</code> with a JavaScript object — no need to <code>JSON.stringify</code>!</p>
      <p>In this example, we return a JSON object containing <code>hello: "world"</code>.</p>
      <ul>
        <li><a href="/json">View the response from the Edge Function</a></li>
        <li>${repoLink("json.js")}</li>
      </ul>
    </section>
  `;
  },
};
