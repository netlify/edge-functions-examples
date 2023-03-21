![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Rewrite with Netlify Edge Functions

You can rewrite requests on one URL to resources available on another URL using an Edge Function.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  return new URL("/something-to-serve-with-a-rewrite", request.url);
};
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/rewrite.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/rewrite

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
