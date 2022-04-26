![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Read, write, and delete cookies with Netlify Edge Functions

Manipulate HTTP cookies

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  // Set a cookie
  context.cookies.set({
    name: "My cookie",
    value: "hello",
  });

  // Delete a cookie
  context.cookies.delete("My cookie");

  // Read the value of a cookie
  const value = context.cookies.get("My cookie");
};
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/cookies.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/cookies

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
