![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Server-Sent Events (SSE) with Netlify Edge Functions

You can use Edge Functions to create a long-running service that can stream data to the browser using [Server-Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events). While there is a 50ms limit on CPU time, time spent waiting for a response from an upstream service, or waiting for a timer to expire, does not count towards this limit. This means you can create a long-running service that can stream data to the browser.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  let index = 0
  const encoder = new TextEncoder();
  const body = new ReadableStream({
    start(controller) {
      setInterval(() => {
        controller.enqueue(encoder.encode(`data: Hello ${index++}\n\n`));
      }, 1000);
    },
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
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
