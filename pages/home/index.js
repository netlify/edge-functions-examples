export default {
  title: "Home",
  metaDescription: "Explore our library of edge function examples and deploy your own to Netlify.",
  page: function () {
    return `
    <section>
    <h1>Edge Functions on Netlify</h1>
      <p>Explore a library of reference examples for exploring and learning about Edge Functions on Netlify.</p>
      <ul>
        <li><a href="/example/hello">Static Hello World page</a></li>
        <li><a href="/example/transform">Transform HTTP responses</a></li>
        <li><a href="/example/include">Dynamically include content with edge includes</a></li>
        <li><a href="/example/geolocation">**NOT WORKING** Determine a user's location</a></li>
        <li><a href="/example/json">Return a JSON response at the edge</a></li>
        <li><a href="/example/set-response-header">Set custom HTTP response headers</a></li>
        <li><a href="/example/set-request-header">Set custom HTTP request headers</a></li>
        <li><a href="/example/rewrite">**NOT WORKING** Rewrite a URL at the Edge</a></li>
        <li><a href="/example/cookies">Cookies</a></li>
        <li><a href="/example/abtest">Set up an A/B test using cookies at the Edge</a></li>
      </ul>
    </section>
  `;
  },
};
