![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)


# Transform responses with Netlify Edge Functions

You can use Edge Functions to transform the content of an HTTP response. In this example, we transform the response of a request to <a href="/hello">/hello</a> with JavaScript's <code>toUpperCase()</code> function.


## Code example

Edge Functions are files held in the `netlify/edge-handlers` directory.

- [Explore the code for this Edge Function](../../netlify/edge-handlers/transform.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/transform

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples)
