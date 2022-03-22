![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Netlify Edge Functions Examples

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
- [Hello, World](/pages/hello/)
- Hostname Rewrites
- i18n
- Image Response
- [Includes at the Edge](/pages/include)
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
- [Transform HTTP Response](/pages/transform)

---

## Notes for development of these examples

(To be removed before publishing)

## Setting up

Run the following commands at the root of the project to set up the experimental development environment:

```bash
npm install
```

## To run the app locally

At the root of the project, run:

```bash
npm run cli -- dev
```

## Adding a new Edge function example

- Add your edge function to the `netlify/edge-handlers` directory
- Add your page which explains this example as a new directory in the `pages` directory. Copying one of the other
  directories in `examples` is a good start
- Create an Open Graph image as a `png` file for your page with https://netlify-seo-images.netlify.app/ and save it to
  /public/img
- Update your page meta data in your index.js file:

```javascript
  title: "Page title", // will be suffixed with "| Edge Functions on Netlify"
  metaDescription: "A one sentence description of your page that will show in search engines and on Open Graph previews.",
  openGraphImageName: "home", // name of the Open Graph image you created in the previous step (without file exension)
```

- Populate the page and the README.me in your folder
- Import your new page in the `[pages].js` edge function which serves the example pages.
- Add your new example page to the list on the index page in `pages/home`
- Add routes to your new edge function as necessary in the `netlify.toml` file.
- Add a link to your file on THIS README.md

---

## Deploying examples to production

For the moment, Edge Functions are not exposed in the CI/CD pipeline on Netlify, so we need to build locally and push
the result. We have a command for that :)

```
npm run cli -- deploy --build --prod
```
