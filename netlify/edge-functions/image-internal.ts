import type { Context } from "https://edge.netlify.com";

// Let's serve an image that's stored in the repo
// by rewriting the URL.

export default async (request: Request, context: Context) => {
  return context.rewrite("/apple-touch-icon.png");
};
