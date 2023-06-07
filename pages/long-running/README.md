![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Long-running Netlify Edge Functions

Edge Functions are limited to 50ms of CPU time, but this does not include time spent waiting or making network calls. As long as a function returns headers within 40 seconds it can run indefinitely. If you need to make API calls or perform other work that takes longer than this, you can return a stream from the function and write to it when you have the data.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import type { Context } from "https://edge.netlify.com";

export default (request: Request, context: Context) => {
  const body = new ReadableStream({
    async start(controller) {
      // this might be an API call or other slow external operation
      const response = await doSomethingSlow();
      controller.enqueue(new TextEncoder().encode(response));
      controller.close()
    }
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

```

- [Explore the code for this Edge Function](../../netlify/edge-functions/sse.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/server-sent-events

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
