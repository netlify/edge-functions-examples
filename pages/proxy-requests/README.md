![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Proxy requests to another source

You can use [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch) to make requests to other sources via an
Edge Function.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  const joke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jsonData = await joke.json();
  return context.json(jsonData);
};
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/proxy-requests.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/proxy-requests.ts

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
