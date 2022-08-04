import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  return new Response(`Hello from ${context.site.name}!`);
};
