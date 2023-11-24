import type { Context, Config } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return Response.json({ hello: "world" });
};

export const config: Config = {
  path: "/json",
};