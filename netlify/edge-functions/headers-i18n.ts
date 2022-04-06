import { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  return new Response("This is a placeholder for headers-i18n", {
    headers: { "content-type": "text/html" },
  });
};
