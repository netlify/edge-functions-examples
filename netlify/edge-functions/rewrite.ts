import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  return new URL("/something-to-serve-with-a-rewrite", request.url);
};
