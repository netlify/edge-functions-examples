import { Config, Context } from "@netlify/edge-functions";
import { HTMLRewriter } from "https://ghuc.cc/worker-tools/html-rewriter/index.ts";

export default async function handler(request: Request, context: Context) {
  const url = new URL(request.url);
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

export const config: Config = {
  path: "/a-static-page",
};
