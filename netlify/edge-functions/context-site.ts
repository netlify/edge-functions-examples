import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new Response(`Hello from ${context.site.name}!`);
};
