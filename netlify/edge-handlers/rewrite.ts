import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  console.log("here");

  return context.rewrite("/hello");
};
