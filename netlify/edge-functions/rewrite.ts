import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  console.log("here");

  // to do — check for 304?

  return context.rewrite("/hello");
};
