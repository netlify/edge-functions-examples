<div align="center">
  <a href="https://netlify.com" target="_blank">
    <img src="./logo.svg" alt="Netlify logo">
    <h1 align="center">Netlify Edge Functions Examples</h1>
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
- Populate the page and the README.me in your folder
- Import your new page in the `[pages].js` edge function which serves the example pages.
- Add your new example page to the list on the index page in `pages/home`
- Add routes to your new edge function as necessary in the `netlify.toml` file.
