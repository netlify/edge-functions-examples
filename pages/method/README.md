![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Configure for specific HTTP methods

With in-source configuration, you can restrict Edge Functions to respond to certain HTTP methods.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import type { Config, Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {

  return new Response(`This is a response to a ${request.method} request`)
};

export const config: Config = {
  method: ["POST", "PUT"]
}
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/method.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/method

When viewed through a browser, the URL should 404. To validate that it works, you can use a CURL by running the following command in a terminal:

```
curl -X POST https://edge-functions-examples.netlify.app/example/method
```

or

```
curl -X PUT https://edge-functions-examples.netlify.app/example/method
```


## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
