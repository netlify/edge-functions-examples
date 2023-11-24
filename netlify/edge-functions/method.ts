import type { Config, Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {

  return new Response(`This is a response to a ${request.method} request`)
};

export const config: Config = {
  path: "/method",
  method: ["POST", "PUT"]
}
