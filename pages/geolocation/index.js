import repoLink from "../../components/repo-link.js";
import geolocationInfo from "../../components/geolocation-info.js";

export default {
  title: "Geolocation",
  metaDescription:
    "Use Netlify Edge Functions to get information about a user's location to serve location-specific content.",
  page: function ({ geo }) {
    return `
    <section>
      <h1>Geolocation</h1>
      <p>You can use Edge Functions to get information about a user's location to serve location-specific content and personalize their experience.</p>
      
      ${geolocationInfo({
        city: geo?.city,
        countryCode: geo?.country?.code,
        countryName: geo?.country?.name,
        latitude: geo?.latitude,
        longitude: geo?.longitude,
        timezone: geo?.timezone,
      })}
      
      <p>Geolocation information is available on the <code>Context.geo</code> object.</p>

      <pre><code>import { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Here's what's available on context.geo

  // context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     latitude?: number;
  //     longitude?: number;
  //     timezone?: string;
  //   }
  // }

  return Response.json({
    geo: context.geo,
  });
};</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li>View your raw geolocation data at <a href="/geolocation">/geolocation</a></li>
        <li>${repoLink("geolocation.ts")}</li>
      </ul>
    </section>
  `;
  },
};
