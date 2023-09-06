![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Set custom HTTP response headers with Netlify Edge Functions

Use an Edge Function to add HTTP headers to any HTTP response at The Edge.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const response = await context.next();
  response.headers.set("X-Your-Custom-Header", "A custom header value");
  return response;
};
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/set-response-header.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/set-response-header

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
