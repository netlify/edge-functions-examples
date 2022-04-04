export default {
  title: "Home",
  metaDescription: "Explore our library of Edge Function examples and deploy your own to Netlify.",
  page: function() {
    return `
    <h1>Edge Functions on Netlify</h1>
      <p>Explore a library of reference examples for exploring and learning about Edge Functions on Netlify.</p>

      <section class="home__section">
        <h2 class="home__sectionHeader">Responses</h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/hello">Hello, world</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/json">Return JSON</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/image">Return an image **TO DO**</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/log">Write to the logs</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">Rewrites and proxies **NOT WORKING**</h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/rewrite">Rewrite a URL</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/proxy">Proxy requests to another source **TO DO**</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">HTTP Headers</h2>
        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/set-request-header">Set custom HTTP request headers</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/set-response-header">Set custom HTTP response headers</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/headers-i18n">Use request headers to serve internationalized content **TO DO**</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">Geolocation **NOT WORKING** </h2>
        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/geolocation">Determine a user's location</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/geoblock">Block content according to country **TO DO**</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/internationalization">Serve localized content **TO DO**</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">Cookies</h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/cookies-set">Set cookies</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/cookies-read">Read cookies</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/cookies-delete">Delete cookies</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">A/B tests</h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/abtest">Set up an A/B test using cookies</a></li>
        </ul>
      </section>

      <section class="home__section">
        <h2 class="home__sectionHeader">Transforming responses</h2>

        <ul class="home__sectionList">
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/transform">Text transformations</a></li>
          <li class="home__sectionListItem"><a class="home__sectionListItemLink" href="/example/include">Content includes</a></li>
        </ul>
      </section>
  `;
  },
};