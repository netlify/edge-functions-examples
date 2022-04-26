![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Transform responses with Netlify Edge Functions

You can use Edge Functions to transform the content of an HTTP response. In this example, we transform the response of a
request to `/hello` with JavaScript's <code>toUpperCase()</code> function, using the query parameter
`?method=transform`.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);

  // Look for the query parameter, and return if we don't find it
  if (url.searchParams.get("method") !== "transform") {
    return;
  }

  context.log(`Transforming the response from this ${url}`);

  const response = await context.next();

  const text = await response.text();
  return new Response(text.toUpperCase(), response);
};
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/transform.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/transform

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
