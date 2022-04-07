![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Netlify Edge Functions Examples

Explore these examples here: https://edge-funk.netlify.app/ (This URL to change after we launch)

## Responses

- [Hello, world](/pages/hello)
- [Return JSON](/pages/json)
- [Return an image](/pages/image)
- [Write to the logs](/pages/log)

## Rewrites and proxies

- [Rewrite responses from another URL](/pages/rewrite)
- [Proxy requests to another source](/pages/proxy-requests)

## HTTP Headers

- [Set custom HTTP request headers](/pages/set-request-header)
- [Set custom HTTP response headers](/pages/set-response-header)
- [Use request headers to serve internationalized content](/pages/headers-i18n)

## Transforming responses

- [Text transformation](/pages/transform)
- [Content includes](/pages/include)

## Geolocation

- [Determine a user's location](/pages/geolocation)
- [Block content according to country](/pages/country-block)
- [Serve localized content](/pages/localized-content)

## Cookies

- [Set cookies](/pages/cookies-set)
- [Read cookies](/pages/cookies-read)
- [Delete cookies](/pages/cookies-delete)
- [Set up an A/B test using cookies](/pages/abtest)

## Authentication

- [JWT Authentication](/pages/auth-jwt)

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

- Add your edge function to the `netlify/edge-functions` directory
- Add your page which explains this example as a new directory in the `pages` directory. Copying one of the other
  directories in `examples` is a good start
- Update your page meta data in your index.js file:

```javascript
  title: "Page title", // will be suffixed with "| Edge Functions on Netlify"
  metaDescription: "A one sentence description of your page that will show in search engines and on Open Graph previews.",
```

- Populate the page and the README.md in your folder
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
