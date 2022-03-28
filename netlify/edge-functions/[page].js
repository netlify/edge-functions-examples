// A global page template for all of our HTML views
// You know, for consistency.
import layout from "../../components/layout.js";

// A bit convoluted, but necessary for the moment
// until we can import the page templates we need
// dynamically from withing the exported function
import pageHome from "../../pages/home/index.js";
import pageHello from "../../pages/hello/index.js";
import pageTransform from "../../pages/transform/index.js";
import pageIncludes from "../../pages/includes/index.js";
import pageGeolocation from "../../pages/geolocation/index.js";
import pageJson from "../../pages/json/index.js";
import pageSetRequestHeader from "../../pages/set-request-header/index.js";
import pageSetResponseHeader from "../../pages/set-response-header/index.js";
import pageCookies from "../../pages/cookies/index.js";

// The keys here correspond to the path in the request to `/example/PATH`
const pages = {
  home: pageHome,
  hello: pageHello,
  transform: pageTransform,
  includes: pageIncludes,
  json: pageJson,
  "set-response-header": pageSetResponseHeader,
  "set-request-header": pageSetRequestHeader,
  cookies: pageCookies,
  geolocation: pageGeolocation,
};

export default async (Request, Context) => {
  const url = new URL(Request.url);
  const path = url.pathname.split("/example/")[1] || "home";

  console.log(`serve page for ${url} `);

  // render the appropriate page with the global layout
  const html = layout({
    url: url,
    title: pages[path].title,
    content: pages[path].page(),
    metaDescription: pages[path].metaDescription,
    geo: Context.geo,
  });

  // send our response
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
};
