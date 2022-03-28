![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Set custom HTTP response headers with Netlify Edge Functions

Use an Edge Function to add HTTP headers to any HTTP response

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

- [Explore the code for this Edge Function](../../netlify/edge-functions/set-response-header.ts)

```ts
import type { Context } from "netlify:edge";

export default async (req: Request, { next }: Context) => {
  const res = await next();
  res.headers.set("X-Your-Custom-Header", "Your custom header value");
  return res;
};
```

## View this example on the web

- https://edge-functions-examples.netlify.app/example/set-response-header

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples)
