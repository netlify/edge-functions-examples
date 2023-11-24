import type { Context, Config } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  const value = Netlify.env.get("MY_IMPORTANT_VARIABLE");

  return new Response(`Value of MY_IMPORTANT_VARIABLE is "${value}".`, {
    headers: { "content-type": "text/html" },
  });
};

export const config: Config = {
  path: "/environment",
};