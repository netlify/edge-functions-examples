![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# Transform HTML responses with Netlify Edge Functions and HTMLRewriter

You can use Edge Functions with the HTMLRewriter library to transform HTML
responses. HTMLRewriter uses WebAssembly to parse a response stream, so is very
efficient. It can parse large HTML pages with minimal overhead, and is a better
choice than using a string transform in most cases. It has an API that uses
familiar CSS selectors to target elements, and can be used to add, remove, or
modify elements.

In this example, we transform an HTML page, replacing the `src` of `<img>` tags
with a placeholder image. We also add content with the user's location. This
shows how to do user personalization when the pages may be static.

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
import { Config, Context } from "@netlify/edge-functions";
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);
  // Only run if the `catify` query parameter is set
  if (!url.searchParams.has("catify")) {
    return;
  }

  const location = context?.geo?.city;

  const response = await context.next();
  const rewriter = new HTMLRewriter()
    .on("#location", {
      element: (element) => {
        element.setInnerContent(`Catified for a visitor in ${location}`);
      },
    })
    .on("img[catify]", {
      element: (element) => {
        const width = element.getAttribute("width") ?? 800;
        const height = element.getAttribute("height") ?? 600;
        element.setAttribute(
          "src",
          `https://placekitten.com/${width}/${height}`
        );
        element.setAttribute("alt", "A random cat");
      },
    });
  return rewriter.transform(response);
}
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/htmlrewriter.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/htmlrewriter/

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your
own to explore and experiment with, by clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
