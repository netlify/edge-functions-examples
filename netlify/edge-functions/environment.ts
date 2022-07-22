import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const value = Deno.env.get("MY_IMPORTANT_VARIABLE");

  return new Response(`Value of MY_IMPORTANT_VARIABLE is "${value}".`, {
    headers: { "content-type": "text/html" },
  });
};
