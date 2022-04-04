export default {
  title: "Home",
  metaDescription: "Explore our library of Edge Function examples and deploy your own to Netlify.",
  page: function () {
    return `
    <h1>Edge Functions on Netlify</h1>
      <p>Explore a library of reference examples for exploring and learning about Edge Functions on Netlify.</p>

      <section class="home__section">
        <h2 class="home__sectionHeader">Working with HTTP</h2>

        <h3>HTTP requests</h3>
        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/set-request-header">Set custom HTTP request headers</a></li>
        </ul>

        <h3>HTTP responses</h3>
        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/hello">Return an HTML response</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/json">Return a JSON response</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/transform">Transform HTTP responses</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/set-response-header">Set custom HTTP response headers</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">Geolocation **NOT WORKING** </h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/geolocation">Determine a user's location</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/geoblock">Block content according to country **TO DO**</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/internationalization">Internationalization **TO DO**</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">Cookie management</h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/cookies">Set, read and delete cookies</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">A/B tests</h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/abtest">Set up an A/B test using cookies</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">Rewrites **NOT WORKING** </h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/rewrite">Rewrite a URL</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">Content includes</h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/include">Dynamically include content with edge includes</a></li>
        </ul>
      </section>
  `;
  },
};
