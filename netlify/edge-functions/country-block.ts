import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  return new Response("This is a placeholder for country block!", {
    headers: { "content-type": "text/html" },
  });
};
