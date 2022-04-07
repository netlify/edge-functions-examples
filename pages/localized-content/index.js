import repoLink from "../../components/repo-link.js";

export default {
  title: "Serve localized content",
  metaDescription: "Use geolocation data to serve localized content according to country.",
  page: function () {
    return `
    <section>
      <h1>Serve localized content</h1>
      <p>You can use geolocation data to serve localized content according to country code.</p>
      <p>Geolocation information is available on the <code>Context.geo</code> object.</p>

      <pre><code>export default async (request, context) => {
  const translations = {
    UNKNOWN: "Hello!",
    US: "Howdy y'all!",
    GB: "How do you do?",
    AU: "G'day, mate!",
  };

  const countryCode = context.geo?.country?.code || "UNKNOWN";
  const countryName = context.geo?.country?.name || "somewhere in the world";

  return new Response(&#96;Your personalized greeting for $&#123;countryName&#125; is: $&#123;translations[countryCode]&#125;&#96;, {
    headers: { "content-type": "text/html" },
  });
};
</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li><a href="/localized-content">Get your localized content from the Edge Function</a></li>
        <li>${repoLink("localized-content.js")}</li>
      </ul>

      <div class="protip">
        <h2>Pro tip!</h2>
        <p>You can also combine geolocation data with <a href="/example/rewrite">URL rewrites</a> for another way to serve internationalized content.</p>
      </div>
   </section>
  `;
  },
};
