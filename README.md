<div align="center">
  <a href="https://netlify.com" target="_blank">
    <img src="./logo.svg" alt="Netlify logo">
    <h1 align="center">Netlify Edge Handlers Examples</h1>
  </a>
</div>

## Contents

- A/B Testing with Google Optimize
- A/B Testing Example
- Add Header Example
- API Rate Limiting with API Keys and IP Blocking
- API Rate Limiting with Upstash
- Basic Auth Password Protection
- Bot Detection with Botd
- Bot Detection with Datadome
- Clerk Authentication at the Edge
- Cookies Example
- CORS
- Crypto
- Feature Flag Apple STore
- Feature Flag Config Cat
- Feature Flag Posthog
- Feature Flag Split
- Geolocation Country Block
- Geolocation
- Hostname Rewrites
- i18n
- Image Response
- IP Blocking Datadome
- JSON Response
- JWT Authentication
- Logging
- Next News
- Personalization Builder io
- Power Parity Pricing Strategies
- Power Parity Pricing
- Query Params Filter
- Redirects Upstash
- Rewrites Upstash

---

## Notes for development of these examples

(To be removed before publishing) OUT OF DATE

### Creating a new example

We're using eleventy as a build mechanic to generate new example folders with a common set of assets and to include the same CSS and format and boilerplate.

1. Duplicate the `/src/hello-world` folder and name your new folder appropriately
2. Add a pass through copy rule to the `.eleventy.js` config file to use the folder name of your new example folder
3. Generate a new example folder in the repo from your new source with `npm run gen`. (You can also run `npm run dev` to watch the src folder for changes as you build your edge handlers)

### Serving your examples locally

The steps above generate an example folder for you and will update it when you edit your filers in the src. But we'll use `netlify dev` to serve your generated examples.

1. Leave your terminal session with `npm run dev` watching your src. Open another terminal
2. Move into the desired example folder which was generated for you
3. This is a new site and project, so run `npm i` to install dependencies.
4. run  `npm run cli -- dev` to have the internal version of the CLI run netlify dev and serve your site, functions and edge handlers.
5. Do your development work in the `src/YOUR-EXAMPLE` folder. Changes will be built into the folder that you are serving.


