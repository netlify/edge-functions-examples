import type { Context, Config } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new URL("/something-to-serve-with-a-rewrite", request.url);
};
export const config: Config = {
  path: "/rewrite",
};