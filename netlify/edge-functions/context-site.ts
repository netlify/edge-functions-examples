import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  return new Response(`Hello from ${context.site.name}!`);
};
