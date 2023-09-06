import repoLink from "../../components/repo-link.js";

export default {
  title: "Block content according to country",
  metaDescription: "Use geolocation data to block content according to country.",
  page: function () {
    return `
    <section>
      <h1>Block content according to country</h1>
      <p>You can use geolocation data to identify a user's country and block content if required.</p>
      <p>Geolocation information is available on the <code>Context.geo</code> object.</p>

      <pre><code>import { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const BLOCKED_COUNTRY_CODE = "GB";
  const countryCode = context.geo?.country?.code || "US";
  const countryName = context.geo?.country?.name || "United States of America";

  if (countryCode === BLOCKED_COUNTRY_CODE) {
    return new Response(&#96;We're sorry, you can't access our content from $&#123;countryName&#125;!&#96;, {
      headers: { "content-type": "text/html" },
      status: 451,
    });
  }

  return new Response(&#96;Hello there! You can freely access our content from $&#123;countryName&#125;!&#96;, {
    headers: { "content-type": "text/html" },
  });
};</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li>Check if you're in a blocked country by running the <a href="/country-block">country block Edge Function</a></li>
        <li>${repoLink("country-block.ts")}</li>
      </ul>
    </section>
  `;
  },
};
