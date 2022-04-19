![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Serve localized content with Netlify Edge Functions

You can use geolocation data to serve localized content according to country code.

## Code example

Geolocation information is available on the `Context.geo` object.

```javascript
context: {
  geo: {
    city?: string;
    country?: {
      code?: string;
      name?: string;
    },
    subdivision?: {
      code?: string;
      name?: string;
    },
  }
}
```

Edge Functions are files held in the `netlify/edge-functions` directory.

- [Explore the code for this Edge Function](../../netlify/edge-functions/localized-content.js)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/localized-content

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples)
